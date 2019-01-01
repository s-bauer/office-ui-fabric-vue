<template>
    <div ref="root" @keydown="onKeyDown" @focusin="onFocusCapture">
        <slot/>
    </div>
</template>

<script lang="ts">

    import {elementContains} from "@/utility/dom";
    import {focusAsync, getFirstTabbable, getLastTabbable, getNextElement} from "@/utility/focus";
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";

    @Component
    export default class FocusTrapZone extends Vue {
        private static focusStack: FocusTrapZone[] = [];

        @Prop({type: Object}) private elementToFocusOnDismiss?: HTMLElement;
        @Prop({type: Boolean, default: false}) private isClickableOutsideFocusTrap!: boolean;
        @Prop({type: Boolean, default: true}) private forceFocusInsideTrap!: boolean;
        @Prop({type: Boolean, default: false}) private ignoreExternalFocusing!: boolean;
        @Prop({type: Boolean, default: false}) private disableFirstFocus?: boolean;
        @Prop({type: Boolean, default: true}) private focusPreviouslyFocusedInnerElement?: boolean;
        @Prop({type: [String, Function]}) private firstFocusableSelector?: string | (() => string);

        private previouslyFocusedElementInTrapZone?: HTMLElement;
        private previouslyFocusedElementOutsideTrapZone?: HTMLElement;
        private hasFocusHandler?: boolean;
        private hasClickHandler?: boolean;

        public focus() {
            if (
                this.focusPreviouslyFocusedInnerElement &&
                this.previouslyFocusedElementInTrapZone &&
                elementContains(this.$refs.root as HTMLElement, this.previouslyFocusedElementInTrapZone)
            ) {
                // focus on the last item that had focus in the zone before we left the zone
                focusAsync(this.previouslyFocusedElementInTrapZone);
                return;
            }

            const focusSelector =
                typeof this.firstFocusableSelector === "string" ? this.firstFocusableSelector : this.firstFocusableSelector && this.firstFocusableSelector();

            let firstFocusableChild: HTMLElement | null = null;

            if (this.$refs.root) {
                if (focusSelector) {
                    firstFocusableChild = (this.$refs.root as HTMLElement).querySelector("." + focusSelector);
                } else {
                    firstFocusableChild = getNextElement((this.$refs.root as HTMLElement), (this.$refs.root as HTMLElement).firstChild as HTMLElement, true, false, false, true);
                }
            }
            if (firstFocusableChild) {
                focusAsync(firstFocusableChild);
            }
        }

        private beforeMount() {
            FocusTrapZone.focusStack.push(this);
        }

        private mounted() {
            this.previouslyFocusedElementOutsideTrapZone = this.elementToFocusOnDismiss
                ? this.elementToFocusOnDismiss
                : (document.activeElement as HTMLElement);
            if (!elementContains(this.$refs.root as HTMLElement, this.previouslyFocusedElementOutsideTrapZone) && !this.disableFirstFocus) {
                this.focus();
            }

            this.updateEventHandlers();
        }

        @Watch("elementToFocusOnDismiss")
        private watchElementToFocusOnDismiss(newVal: HTMLElement) {
            if (newVal && this.previouslyFocusedElementOutsideTrapZone !== newVal) {
                this.previouslyFocusedElementOutsideTrapZone = newVal;
            }

            this.updateEventHandlers();
        }

        private beforeDestroy() {
            FocusTrapZone.focusStack = FocusTrapZone.focusStack.filter((value: FocusTrapZone) => this !== value);

            const activeElement = document.activeElement as HTMLElement;
            if (
                !this.ignoreExternalFocusing &&
                this.previouslyFocusedElementOutsideTrapZone &&
                typeof this.previouslyFocusedElementOutsideTrapZone.focus === "function" &&
                (elementContains(this.$refs.root as HTMLElement, activeElement) || activeElement === document.body)
            ) {
                focusAsync(this.previouslyFocusedElementOutsideTrapZone);
            }
        }

        private updateEventHandlers() {

            if (this.forceFocusInsideTrap && !this.hasFocusHandler) {
                window.addEventListener("focus", this.forceFocusInTrap, true);
            } else if (!this.forceFocusInsideTrap && this.hasFocusHandler) {
                window.removeEventListener("focus", this.forceFocusInTrap);
            }
            this.hasFocusHandler = this.forceFocusInsideTrap;

            if (!this.isClickableOutsideFocusTrap && !this.hasClickHandler) {
                window.addEventListener("click", this.forceClickInTrap, true);
            } else if (this.isClickableOutsideFocusTrap && this.hasClickHandler) {
                window.removeEventListener("click", this.forceClickInTrap);
            }
            this.hasClickHandler = !this.isClickableOutsideFocusTrap;
        }

        private onFocusCapture(ev: FocusEvent) {
            if (ev.target !== ev.currentTarget) {
                this.previouslyFocusedElementInTrapZone = ev.target as HTMLElement;
            }
        }

        private onKeyDown(ev: KeyboardEvent) {
            if (ev.defaultPrevented || ev.which !== 9 || !this.$refs.root)
                return;

            const ref = this.$refs.root as HTMLElement;
            const firstTabbableChild = getFirstTabbable(ref, ref.firstChild as HTMLElement, true);
            const lastTabbableChild = getLastTabbable(ref, ref.lastChild as HTMLElement, true);

            if (ev.shiftKey && firstTabbableChild === ev.target) {
                focusAsync(lastTabbableChild);
                ev.preventDefault();
                ev.stopPropagation();
            } else if (!ev.shiftKey && lastTabbableChild === ev.target) {
                focusAsync(firstTabbableChild);
                ev.preventDefault();
                ev.stopPropagation();
            }
        }

        private forceFocusInTrap(ev: FocusEvent): void {
            if (FocusTrapZone.focusStack.length && this === FocusTrapZone.focusStack[FocusTrapZone.focusStack.length - 1]) {
                const focusedElement = document.activeElement as HTMLElement;

                if (!elementContains(this.$refs.root as HTMLElement, focusedElement)) {
                    this.focus();
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        }

        private forceClickInTrap(ev: MouseEvent): void {
            if (FocusTrapZone.focusStack.length && this === FocusTrapZone.focusStack[FocusTrapZone.focusStack.length - 1]) {
                const clickedElement = ev.target as HTMLElement;

                if (clickedElement && !elementContains(this.$refs.root as HTMLElement, clickedElement)) {
                    this.focus();
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        }
    }

</script>
