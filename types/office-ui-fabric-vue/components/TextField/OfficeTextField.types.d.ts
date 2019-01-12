import { IStyle, IStyleFunctionOrObject } from "@uifabric/merge-styles";
import { ITheme } from "../../../styling";
export interface IOfficeTextFieldSubComponentStyles {
    /**
     * Styling for Label child component.
     */
    label: IStyleFunctionOrObject<any, any>;
}
export interface IOfficeTextFieldStyleProps {
    theme: ITheme;
    className?: string;
    disabled?: boolean;
    focused?: boolean;
    underlined?: boolean;
    required: boolean;
    multiline: boolean;
    hasLabel: boolean;
    borderless: boolean;
    resizable: boolean;
    autoAdjustHeight: boolean;
    hasErrorMessage: boolean;
    hasIcon: boolean;
    inputClassName: string;
    iconClass: string;
}
export interface IOfficeTextFieldStyles {
    /**
     * Style for the root element (a button) of the checkbox component in the default enabled/unchecked state.
     */
    root?: IStyle;
    /**
     * Style for the label part (contains the customized checkbox + text) when enabled.
     */
    wrapper?: IStyle;
    /**
     * Style for checkbox in its default unchecked/enabled state.
     */
    fieldGroup?: IStyle;
    prefix: IStyle;
    suffix: IStyle;
    /**
     * Style for the checkmark in the default enabled/unchecked state.
     */
    field?: IStyle;
    /**
     * Style for icon prop element.
     */
    icon: IStyle;
    /**
     * Style for error message element.
     */
    errorMessage: IStyle;
    /**
     * Styling for subcomponents.
     */
    subComponentStyles: IOfficeTextFieldSubComponentStyles;
}
export declare const globalClassNames: {
    root: string;
    description: string;
    errorMessage: string;
    field: string;
    fieldGroup: string;
    prefix: string;
    suffix: string;
    wrapper: string;
    multiline: string;
    borderless: string;
    underlined: string;
    unresizable: string;
    required: string;
    disabled: string;
    active: string;
};
