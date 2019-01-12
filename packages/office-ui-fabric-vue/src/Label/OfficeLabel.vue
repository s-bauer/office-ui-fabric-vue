<template>
    <label :class="classNames.root">
        <slot/>
    </label>
</template>

<script lang="ts">
    import {getStyles} from "./OfficeLabel.styles";
    import {loadTheme} from "@s-bauer/uifabric-styling"
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class OfficeLabel extends Vue {
        @Prop({type: Boolean}) private disabled!: boolean;
        @Prop({type: Boolean}) private required!: boolean;

        private get classNames() {
            return mergeStyleSets(getStyles({
                className: "",
                disabled: this.disabled,
                required: this.required,
                theme: loadTheme({})
            }));
        }
    }
</script>
