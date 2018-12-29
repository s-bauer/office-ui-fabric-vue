<template>
    <component :is="rootType" v-bind="rootProps" @click="onClick">
        <slot/>
    </component>
</template>

<script lang="ts">
    import {getStyles} from "@/components/Link/OfficeLink.styles";
    import {IOfficeLinkProps} from "@/components/Link/OfficeLink.types";
    import {loadTheme} from "@/styling";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class OfficeLink extends Vue implements IOfficeLinkProps {
        @Prop({type: Boolean}) public disabled!: boolean;
        @Prop({type: String, default: null}) public href?: string;

        private get rootType() {
            return this.href ? "a" : "button";
        }

        private get rootProps() {
            return {
                "class": this.classNames.root,
                "href": this.href ? this.href : undefined
            };
        }

        private onClick(evnt: MouseEvent) {
            if (this.disabled) {
                evnt.preventDefault();
            } else {
                this.$emit("click", evnt);
            }
        }

        private get classNames() {
            return mergeStyleSets(getStyles({
                theme: loadTheme({}),
                isButton: !this.href,
                isDisabled: this.disabled
            }));
        }
    }
</script>
