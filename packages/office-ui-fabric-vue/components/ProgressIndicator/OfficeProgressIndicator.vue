<template>
    <div :class="classNames.root">
        <div v-if="$slots.label" :class="classNames.itemName">
            <slot name="label"/>
        </div>
        <div :class="classNames.itemProgress">
            <div :class="classNames.progressTrack"></div>
            <div :class="classNames.progressBar" :style="progressBarStyle" role="progressbar"></div>
        </div>

        <div v-if="$slots.description" :class="classNames.itemDescription">
            <slot name="description"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {getStyles} from "./OfficeProgressIndicator.styles";
    import {loadTheme} from "@styling/styles";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {Component, Prop, Vue} from "vue-property-decorator";

    // if the percentComplete is near 0, don't animate it.
    // This prevents animations on reset to 0 scenarios
    const ZERO_THRESHOLD = 0.01;

    @Component
    export default class OfficeProgressIndicator extends Vue {
        @Prop({type: Boolean, default: false}) public indeterminate!: boolean;
        @Prop({type: Boolean, default: false}) public progressHidden!: boolean;
        @Prop({type: Number, default: 2}) public barHeight!: number;
        @Prop({type: Number}) public percentageComplete?: number;

        private get internalPercentage() {
            return this.percentageComplete ? Math.min(100, Math.max(0, this.percentageComplete * 100)) : 0;
        }

        private get progressBarStyle() {
            return {
                width: !this.indeterminate ? this.internalPercentage + "%" : undefined,
                transition: !this.indeterminate && this.internalPercentage < ZERO_THRESHOLD ? "none" : undefined
            };
        }

        private get classNames() {
            return mergeStyleSets(getStyles({
                theme: loadTheme({}),
                barHeight: this.barHeight,
                indeterminate: this.indeterminate,
            }));
        }
    }
</script>
