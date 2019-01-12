<template>
    <div :class="classNames.root">
        <div :class="classNames.circle" ></div>
        <div v-if="label" :class="classNames.label">{{label}}</div>
    </div>
</template>

<script lang="ts">
    import {getStyles} from "./OfficeSpinner.styles";
    import {SpinnerLabelPosition, SpinnerSize} from "./OfficeSpinner.types";
    import {loadTheme} from "@s-bauer/uifabric-styling"
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class OfficeSpinner extends Vue {
        @Prop({type: String}) public labelPosition?: SpinnerLabelPosition;
        @Prop({type: String}) public label?: string;
        @Prop({type: Number}) public size?: SpinnerSize;

        private get classNames() {
            return mergeStyleSets(getStyles({
                theme: loadTheme({}),
                labelPosition: this.labelPosition,
                size: this.size
            }));
        }
    }
</script>
