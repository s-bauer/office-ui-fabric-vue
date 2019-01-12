import { Vue } from "vue-property-decorator";
export default class OfficeSlider extends Vue {
    disabled: boolean;
    vertical: boolean;
    showValue: boolean;
    max: number;
    min: number;
    step: number;
    label?: string;
    private value;
    private id;
    private renderedValue;
    private internalValue;
    private readonly lengthString;
    private readonly thumbOffsetPercent;
    private readonly thumbStyle;
    private readonly classNames;
    private watchValue;
    private created;
    private beforeDestroy;
    private onMouseDownOrTouchStart;
    private onKeyDown;
    private onMouseMoveOrTouchMove;
    private getPosition;
    private updateValue;
    private onMouseUpOrTouchEnd;
}
