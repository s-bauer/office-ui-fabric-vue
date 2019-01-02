<template>
    <div
            ref="self"
            :class="classNames.root"
            @focus="focused = true"
            @blur="onSelfBlur"
    >
        <slot/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {getDocument} from "@/utility/dom";

    @Component
    export default class OfficePopup extends Vue {
        @Prop({type: Boolean, default: true) private needsVerticalScrollBar?: boolean;
        @Prop({type: Boolean, default: false}) private shouldRestoreFocus!: boolean;
        private originalFocusedElement?: HTMLElement;

        private focused: boolean = false;
        private needsVerticalScrollBarCalc?:boolean;

        get classNames() {
            return mergeStyleSets({
                root: [
                    this.needsVerticalScrollBarCalc && {
                        overflowY: "scroll"
                    },
                    !this.needsVerticalScrollBarCalc && {
                        overflowY: undefined
                    }]
            });
        }

        public beforeMount() {
            this.originalFocusedElement = getDocument()!.activeElement as HTMLElement;
        }

        public mounted() {
            this.needsVerticalScrollBarCalc = this.needsVerticalScrollBar;
            this.updateScrollBar();
        }

        public updated() {
            this.needsVerticalScrollBarCalc = this.needsVerticalScrollBar;
            this.updateScrollBar();
        }

        public beforeDestroy() {
            if (this.shouldRestoreFocus &&
                this.originalFocusedElement &&
                this.focused &&
                (this.originalFocusedElement as any) !== window &&
                this.originalFocusedElement) {
                this.originalFocusedElement.focus();
            }
        }

        public onSelfBlur(event: any) {
            if ((this.$refs.self as HTMLElement).contains(event.relatedTarget as HTMLElement)) {
                this.focused = false;
            }
        }

        private updateScrollBar() {
            requestAnimationFrame(() => this.getScrollBar());
        }

        private getScrollBar() {
            const root = this.$refs.self as HTMLElement;
            if (root && root.style && root.style.overflowY) {
                return;
            }
            let needsVerticalScrollBar = false;
            
            if (root.firstElementChild) {
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
