import { ITheme } from "@styling/interfaces";
import { IStyle } from "@uifabric/merge-styles";
export interface IOfficeSpinnerProps {
    /**
     * The size of Spinner to render. \{ extraSmall, small, medium, large \}
     * @defaultvalue SpinnerType.medium
     */
    size?: SpinnerSize;
    /**
     * The label to show next to the Spinner. Label updates will be announced to the screen readers.
     * Use ariaLive to control politeness level.
     */
    label?: string;
    /**
     * The position of the label in regards of the spinner animation.
     * @defaultvalue SpinnerLabelPosition.bottom
     */
    labelPosition?: SpinnerLabelPosition;
}
/**
 * Possible variations of the spinner circle size.
 */
export declare enum SpinnerSize {
    /**
     * 12px Spinner diameter
     */
    xSmall = 0,
    /**
     * 16px Spinner diameter
     */
    small = 1,
    /**
     * 20px Spinner diameter
     */
    medium = 2,
    /**
     * 28px Spinner diameter
     */
    large = 3
}
/**
 * Possible locations of the label in regards to the spinner
 * @defaultvalue bottom
 */
export declare type SpinnerLabelPosition = "top" | "right" | "bottom" | "left";
/**
 * The props needed to construct styles. This represents the simplified set of immutable things which control the class names.
 */
export interface IOfficeSpinnerStyleProps {
    /** Theme provided by High-Order Component. */
    theme: ITheme;
    /** Size of the spinner animation. */
    size?: SpinnerSize;
    /** CSS class name for the component attached to the root stylable area. */
    className?: string;
    /** Position of the label in regards to the spinner animation. */
    labelPosition?: SpinnerLabelPosition;
}
/**
 * Represents the stylable areas of the control.
 */
export interface IOfficeSpinnerStyles {
    /** Styles for the root element. Refers to the wrapper containing both the circle and the label. */
    root?: IStyle;
    /** Styles for the spinner circle animation. */
    circle?: IStyle;
    /** Styles for the label accompanying the circle. */
    label?: IStyle;
    /** Styles for the hidden helper element to aid with screen readers. */
    screenReaderText?: IStyle;
}
