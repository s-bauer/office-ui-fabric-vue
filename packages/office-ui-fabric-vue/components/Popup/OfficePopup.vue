<template>
    <div
            ref="self"
            :style="rootStyle"
            @focus="containsFocus = true"
            @keydown.prevent.stop.esc="onEscapeDown"
            @blur="onSelfBlur">
        <slot/>
    </div>
</template>

<script lang="ts">
    import {doesElementContainFocus} from "@utilities/focus";
    import {Component, Vue, Prop} from "vue-property-decorator";
    import {getDocument} from "@utilities/dom";

    @Component
    export default class OfficePopup extends Vue {
        @Prop({type: Boolean, default: false}) private needsVerticalScrollBar!: boolean;
        @Prop({type: Boolean, default: true}) private shouldRestoreFocus!: boolean;

        private originalFocusedElement?: HTMLElement;
        private containsFocus: boolean = false;
        private needsVerticalScrollBarCalc?: boolean;

        private get rootStyle() {
            return {
                overflowY: this.needsVerticalScrollBarCalc ? "scroll" : undefined
            };
        }

        private beforeMount() {
            this.originalFocusedElement = getDocument()!.activeElement as HTMLElement;
        }

        private mounted() {
            if (this.$refs.self && doesElementContainFocus(this.$refs.self as HTMLElement))
                this.containsFocus = true;

            this.needsVerticalScrollBarCalc = this.needsVerticalScrollBar;
            this.updateScrollBar();
        }

        private updated() {
            this.needsVerticalScrollBarCalc = this.needsVerticalScrollBar;
            this.updateScrollBar();
        }

        private beforeDestroy() {
            if (this.shouldRestoreFocus &&
                this.originalFocusedElement &&
                this.containsFocus &&
                (this.originalFocusedElement as any) !== window) {
                this.originalFocusedElement.focus();
            }
        }

        private onSelfBlur(event: FocusEvent) {
            const root = this.$refs.self as HTMLElement;

            if (root && root.contains(event.relatedTarget as HTMLElement))
                this.containsFocus = false;
        }

        private onEscapeDown() {
            this.$emit("dismiss");
        }

        private updateScrollBar() {
            this.$nextTick(() => this.getScrollBar());
        }

        private getScrollBar() {
            const root = this.$refs.self as HTMLElement;
            if (root && root.style && root.style.display !== "none" && root.style.overflowY) {
                return;
            }
            let needsVerticalScrollBar = false;
            if (root && root.firstElementChild) {
                // ClientHeight returns the client height of an element rounded to an
                // integer. On some browsers at different zoom levels this rounding
                // can generate different results for the root container and child even
                // though they are the same height. This causes us to show a scroll bar
                // when not needed. Ideally we would use BoundingClientRect().height
                // instead however seems that the API is 90% slower than using ClientHeight.
                // Therefore instead we will calculate the difference between heights and
                // allow for a 1px difference to still be considered ok and not show the
                // scroll bar.
                const rootHeight = root.clientHeight;
                const firstChildHeight = root.firstElementChild.clientHeight;
                if (rootHeight > 0 && firstChildHeight > rootHeight) {
                    needsVerticalScrollBar = firstChildHeight - rootHeight > 1;
                }
            }
            if (this.needsVerticalScrollBarCalc !== needsVerticalScrollBar) {
                this.needsVerticalScrollBarCalc = needsVerticalScrollBar;
            }
        }
    }
</script>
