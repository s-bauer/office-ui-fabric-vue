<template>
    <div :class="classNames.root" ref="root">
        <slot/>
    </div>
</template>

<script lang="ts">
    import {getStyles} from "./OfficeFabric.styles";
    import {
        IOfficeFabricProps,
        IOfficeFabricStyleProps,
        IOfficeFabricStyles
    } from "./OfficeFabric.types";
    import {loadTheme} from "@styling/styles";
    import {getWindow} from "@utilities/dom";
    import {isDirectionalKeyCode} from "@utilities/keyboard";
    import {IStyleFunctionOrObject, mergeStyleSets} from "@uifabric/merge-styles";
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class OfficeFabric extends Vue implements IOfficeFabricProps {
        @Prop({type: Boolean}) public styles?: IStyleFunctionOrObject<IOfficeFabricStyleProps, IOfficeFabricStyles>;

        private isFocusVisible!: boolean;

        private mounted() {
            const win = getWindow(this.$refs.root as HTMLElement);
            if (win) {
                win.addEventListener("mousedown", this.onMouseDown, true);
                win.addEventListener("keydown", this.onKeyDown, true);
            }
        }

        private beforeDestroy() {
            const win = getWindow(this.$refs.root as HTMLElement);
            if (win) {
                win.removeEventListener("mousedown", this.onMouseDown);
                win.removeEventListener("keydown", this.onKeyDown);
            }
        }

        private get classNames() {
            return mergeStyleSets(getStyles({
                theme: loadTheme({}),
                isFocusVisible: this.isFocusVisible,
                styles: this.styles
            }));
        }

        private onMouseDown() {
            this.isFocusVisible = true;
        }

        private onKeyDown(ev: KeyboardEvent) {
            if (isDirectionalKeyCode(ev.which)) {
                this.isFocusVisible = true;
            }
        }
    }
</script>
