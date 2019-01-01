<template>
    <div :class="classNames.root">
        <slot/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {getDocument} from "@/utility/dom";

    @Component
    export default class OfficePopup extends Vue {
        private originalFocusedElement?: HTMLElement;

        get classNames() {
            return mergeStyleSets({
                root: [
                    this.needsVerticalScrollBar && {
                        overflowY: 'scroll'
                    },
                    !this.needsVerticalScrollBar && {
                        overflowY: undefined
                    }]
            });
        }
        @Prop({type: Boolean, default: true}) private needsVerticalScrollBar!: boolean;
        beforeMount(){
            this.originalFocusedElement = getDocument()!.activeElement as HTMLElement;
        }

    }
</script>
