<template>
    <div :class="classNames.root">
        <OfficeLabel v-if="label" :class="classNames.titleLabel" :for="id">{{label}}</OfficeLabel>
        <div :class="classNames.container">
            <div role="slider"
                 :tabindex="disabled ? undefined : 0"
                 :class="classNames.slideBox"
                 :id="id"
                 @mousedown="onMouseDownOrTouchStart"
                 @touchstart="onMouseDownOrTouchStart"
                 @keydown="onKeyDown">
                <div :class="classNames.line" ref="sliderLine">
                    <span :class="classNames.thumb" :style="thumbStyle"></span>
                    <span
                            :class="classNames.lineContainer + ' ' + classNames.activeSection"
                            :style="{ [lengthString]: thumbOffsetPercent + '%' }"></span>
                    <span
                            :class="classNames.lineContainer + ' ' + classNames.inactiveSection"
                            :style="{ [lengthString]: 100 - thumbOffsetPercent + '%' }"></span>
                </div>
            </div>
            <OfficeLabel v-if="showValue" :class="classNames.valueLabel">{{value}}</OfficeLabel>
        </div>
    </div>
</template>

<script lang="ts">
    import OfficeLabel from "@/components/Label/OfficeLabel.vue";
    import {getStyles} from "@/components/Slider/OfficeSlider.styles";
    import {loadTheme} from "@/styling";
    import {getId} from "@/utility/object";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {getRTL} from "@uifabric/merge-styles/lib/transforms/rtlifyRules";
    import {Component, Model, Prop, Vue, Watch} from "vue-property-decorator";

    @Component({
        components: {OfficeLabel}
    })
    export default class OfficeSlider extends Vue {
        @Prop({type: Boolean, default: false}) public disabled!: boolean;
        @Prop({type: Boolean, default: false}) public vertical!: boolean;
        @Prop({type: Boolean, default: false}) public showValue!: boolean;
        @Prop({type: Number, default: 100}) public max!: number;
        @Prop({type: Number, default: 0}) public min!: number;
        @Prop({type: Number, default: 1}) public step!: number;
        @Prop({type: String, default: null}) public label?: string;

        @Model("change", {type: Number, default: 0}) private value!: number;


        // Fields
        private id = getId("Slider");
        private renderedValue: number = 0;
        private internalValue: number = 0;


        // Computed Properties
        private get lengthString() {
            return this.vertical ? "height" : "width";
        }

        private get thumbOffsetPercent(): number {
            return this.min === this.max ? 0 : ((this.renderedValue - this.min) / (this.max - this.min)) * 100;
        }

        private get thumbStyle() {
            const direction: string = this.vertical ? "bottom" : getRTL() ? "right" : "left";
            return {
                [direction]: this.thumbOffsetPercent + "%"
            };
        }

        private get classNames() {
            return mergeStyleSets(getStyles({
                theme: loadTheme({}),
                vertical: this.vertical,
                disabled: this.disabled,
                showValue: this.showValue,
                showTransitions: this.renderedValue === this.internalValue
            }));
        }


        // Watch
        @Watch("value")
        private watchValue(oldVal: number, newVal: number) {
            if (oldVal !== newVal) {
                this.internalValue = newVal;
                this.renderedValue = newVal;
            }
        }


        // Livecycle Events
        private created() {
            this.$watch(() => [this.min, this.max, this.value], () => {
                const realValue = Math.max(this.min, Math.min(this.max, this.value));
                if (realValue !== this.internalValue) {
                    this.internalValue = realValue;
                    this.renderedValue = realValue;
                }
            }, {immediate: true});

            const realValue = Math.max(this.min, Math.min(this.max, this.value));
            if (realValue !== this.value)
                this.$emit("change", realValue);
        }

        private beforeDestroy() {
            window.removeEventListener("mousemove", this.onMouseMoveOrTouchMove);
            window.removeEventListener("mouseup", this.onMouseUpOrTouchEnd);
            window.removeEventListener("touchmove", this.onMouseMoveOrTouchMove);
            window.removeEventListener("touchend", this.onMouseUpOrTouchEnd);
        }


        // Event Handlers
        private onMouseDownOrTouchStart(event: MouseEvent | TouchEvent): void {
            if (this.disabled)
                return;

            if (event.type === "mousedown") {
                window.addEventListener("mousemove", this.onMouseMoveOrTouchMove);
                window.addEventListener("mouseup", this.onMouseUpOrTouchEnd);
            } else if (event.type === "touchstart") {
                window.addEventListener("touchmove", this.onMouseMoveOrTouchMove);
                window.addEventListener("touchend", this.onMouseUpOrTouchEnd);
            }

            this.onMouseMoveOrTouchMove(event, true);
        }

        private onKeyDown(event: KeyboardEvent): void {
            let value: number | undefined = this.internalValue;
            let diff: number | undefined = 0;

            switch (event.which) {
                case 40: // DOWN
                    diff = -(this.step as number);
                    break;
                case 38: // UP
                    diff = this.step;
                    break;
                case 36: // HOME
                    value = this.min;
                    break;
                case 35: // END
                    value = this.max;
                    break;
                default:
                    return;
            }

            const newValue: number = Math.min(this.max, Math.max(this.min, value! + diff!));
            this.updateValue(newValue, newValue);

            event.preventDefault();
            event.stopPropagation();
        }


        // Functions
        private onMouseMoveOrTouchMove(event: MouseEvent | TouchEvent, suppressEventCancelation?: boolean): void {
            if (!this.$refs.sliderLine)
                return;

            const {max, min, step} = this;
            const steps: number = (max! - min!) / step!;
            const sliderPositionRect: ClientRect = (this.$refs.sliderLine as HTMLDivElement).getBoundingClientRect();
            const sliderLength: number = !this.vertical ? sliderPositionRect.width : sliderPositionRect.height;
            const stepLength: number = sliderLength / steps;
            let currentSteps: number | undefined;
            let distance: number | undefined;

            if (!this.vertical) {
                const left: number | undefined = this.getPosition(event, this.vertical);
                distance = getRTL() ? sliderPositionRect.right - left! : left! - sliderPositionRect.left;
                currentSteps = distance / stepLength;
            } else {
                const bottom: number | undefined = this.getPosition(event, this.vertical);
                distance = sliderPositionRect.bottom - bottom!;
                currentSteps = distance / stepLength;
            }

            let currentValue: number | undefined;
            let renderedValue: number | undefined;

            // The value shouldn't be bigger than max or be smaller than min.
            if (currentSteps! > Math.floor(steps)) {
                renderedValue = currentValue = max as number;
            } else if (currentSteps! < 0) {
                renderedValue = currentValue = min as number;
            } else {
                renderedValue = min! + step! * currentSteps!;
                currentValue = min! + step! * Math.round(currentSteps!);
            }

            this.updateValue(currentValue, renderedValue);

            if (!suppressEventCancelation) {
                event.preventDefault();
                event.stopPropagation();
            }
        }

        private getPosition(event: MouseEvent | TouchEvent, vertical: boolean | undefined): number | undefined {
            let currentPosition: number | undefined;
            switch (event.type) {
                case "mousedown":
                case "mousemove":
                    currentPosition = !vertical ? (event as MouseEvent).clientX : (event as MouseEvent).clientY;
                    break;
                case "touchstart":
                case "touchmove":
                    currentPosition = !vertical ? (event as TouchEvent).touches[0].clientX : (event as TouchEvent).touches[0].clientY;
                    break;
            }
            return currentPosition;
        }

        private updateValue(value: number, renderedValue: number): void {
            let numDec = 0;
            if (isFinite(this.step)) {
                while (Math.round(this.step * Math.pow(10, numDec)) / Math.pow(10, numDec) !== this.step) {
                    numDec++;
                }
            }

            // Make sure value has correct number of decimal places based on number of decimals in step
            const roundedValue = parseFloat(value.toFixed(numDec));

            this.renderedValue = renderedValue;
            this.internalValue = roundedValue;
            this.$emit("change", this.internalValue);
        }

        private onMouseUpOrTouchEnd(): void {
            this.renderedValue = this.internalValue;

            window.removeEventListener("mousemove", this.onMouseMoveOrTouchMove);
            window.removeEventListener("mouseup", this.onMouseUpOrTouchEnd);
            window.removeEventListener("touchmove", this.onMouseMoveOrTouchMove);
            window.removeEventListener("touchend", this.onMouseUpOrTouchEnd);
        }
    }
</script>
