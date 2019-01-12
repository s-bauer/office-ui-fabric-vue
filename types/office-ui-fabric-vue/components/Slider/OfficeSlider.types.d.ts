import { ITheme } from "../../../styling";
import { IStyle } from "@uifabric/merge-styles";
export interface IOfficeSliderProps {
    /**
     * Description label of the Slider
     */
    label?: string;
    /**
     * The initial value of the Slider. Use this if you intend for the Slider to be an uncontrolled component.
     * This value is mutually exclusive to value. Use one or the other.
     */
    defaultValue?: number;
    /**
     * The initial value of the Slider. Use this if you intend to pass in a new value as a result of onChange events.
     * This value is mutually exclusive to defaultValue. Use one or the other.
     */
    value?: number;
    /**
     * The min value of the Slider
     * @defaultvalue 0
     */
    min?: number;
    /**
     * The max value of the Slider
     * @defaultvalue 10
     */
    max?: number;
    /**
     * The difference between the two adjacent values of the Slider
     * @defaultvalue 1
     */
    step?: number;
    /**
     * Whether to show the value on the right of the Slider.
     * @defaultvalue true
     */
    showValue?: boolean;
    /**
     * Optional flag to render the slider vertically. Defaults to rendering horizontal.
     */
    vertical?: boolean;
    /**
     * Optional flag to render the Slider as disabled.
     */
    disabled?: boolean;
}
export interface IOfficeSliderStyleProps {
    theme: ITheme;
    showTransitions?: boolean;
    showValue?: boolean;
    titleLabelClassName?: string;
    className?: string;
    disabled: boolean;
    vertical: boolean;
}
export interface IOfficeSliderStyles {
    root: IStyle;
    titleLabel: IStyle;
    container: IStyle;
    slideBox: IStyle;
    line: IStyle;
    thumb: IStyle;
    lineContainer: IStyle;
    activeSection: IStyle;
    inactiveSection: IStyle;
    valueLabel: IStyle;
}
