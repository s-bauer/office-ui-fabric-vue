import { ITheme } from "@styling/interfaces";
import { IStyle } from "@uifabric/merge-styles";
export interface ICheckboxStyleProps {
    theme: ITheme;
    className?: string;
    disabled?: boolean;
    checked?: boolean;
    reversed?: boolean;
    isUsingCustomLabelRender: boolean;
}
export interface ICheckboxStyles {
    /**
     * Style for the root element (a button) of the checkbox component in the default enabled/unchecked state.
     */
    root?: IStyle;
    /**
     * Style for the label part (contains the customized checkbox + text) when enabled.
     */
    label?: IStyle;
    /**
     * Style for checkbox in its default unchecked/enabled state.
     */
    checkbox?: IStyle;
    /**
     * Style for the checkmark in the default enabled/unchecked state.
     */
    checkmark?: IStyle;
    /**
     * Style for text appearing with the checkbox in its default enabled state.
     */
    text?: IStyle;
}
export declare const getStyles: (props: ICheckboxStyleProps) => ICheckboxStyles;
