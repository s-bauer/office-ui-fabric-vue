import {IStyle, IStyleFunctionOrObject} from "@uifabric/merge-styles";
import {ITheme} from "@/styling";

export interface ITextFieldSubComponentStyles {
    /**
     * Styling for Label child component.
     */
    // TODO: this should be the interface once we"re on TS 2.9.2 but otherwise causes errors in 2.8.4
    // label: IStyleFunctionOrObject<ILabelStyleProps, ILabelStyles>;
    label: IStyleFunctionOrObject<any, any>;
}

export interface ITextFieldStyleProps {
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

export interface ITextFieldStyles {
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

    /*
     * Style for prefix element.
     */
    prefix: IStyle;

    /*
    *
    Style for suffix element.
    */
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
    subComponentStyles: ITextFieldSubComponentStyles;
}

export const globalClassNames = {
    root: "ms-TextField",
    description: "ms-TextField-description",
    errorMessage: "ms-TextField-errorMessage",
    field: "ms-TextField-field",
    fieldGroup: "ms-TextField-fieldGroup",
    prefix: "ms-TextField-prefix",
    suffix: "ms-TextField-suffix",
    wrapper: "ms-TextField-wrapper",

    multiline: "ms-TextField--multiline",
    borderless: "ms-TextField--borderless",
    underlined: "ms-TextField--underlined",
    unresizable: "ms-TextField--unresizable",

    required: "is-required",
    disabled: "is-disabled",
    active: "is-active"
};
