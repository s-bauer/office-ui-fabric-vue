/*
Taken from https://github.com/OfficeDev/office-ui-fabric-react and slightly modified

License:
    Office UI Fabric React
    Copyright (c) Microsoft Corporation
    All rights reserved.
    MIT License
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the ""Software""), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    Note: Usage of the fonts and icons referenced in Office UI Fabric is subject to the terms listed at http://aka.ms/fabric-assets-license
*/


import {IStyle, IStyleFunctionOrObject} from "@uifabric/merge-styles";
import {ITheme} from "@s-bauer/uifabric-styling";

export interface IOfficeTextFieldSubComponentStyles {
    /**
     * Styling for Label child component.
     */
    // TODO: this should be the interface once we"re on TS 2.9.2 but otherwise causes errors in 2.8.4
    // label: IStyleFunctionOrObject<ILabelStyleProps, ILabelStyles>;
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
    inputClassName?: string;
    iconClass?: string;

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
    subComponentStyles: IOfficeTextFieldSubComponentStyles;
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
