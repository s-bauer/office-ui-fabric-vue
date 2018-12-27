/*
Taken from https://github.com/OfficeDev/office-ui-fabric-react on 26.12.2018 and slightly modified

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


import {AnimationClassNames, FontSizes, HighContrastSelector, ITheme, normalize} from "@/styling";
import {IStyle, IStyleFunctionOrObject} from "@uifabric/merge-styles";
import {IOfficeLabelStyles, IOfficeLabelStyleProps} from "../Label/OfficeLabel.types";
import {getGlobalClassNames} from "@/styling/styles/getGlobalClassNames";

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
    inputClassName: string;
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
    TODO: Implement prefix and suffix
    /!**
     * Style for prefix element.
     *!/
    prefix: IStyle;

    /!**
     * Style for suffix element.
     *!/
    suffix: IStyle;
*/

    /**
     * Style for the checkmark in the default enabled/unchecked state.
     */
    field?: IStyle;
/*
    TODO: Implement icon for TextField, (depends on OfficeIcon Component[not created by now])
    /!**
     * Style for icon prop element.
     *!/
    icon: IStyle;
*/

    /**
     * Style for error message element.
     */
    errorMessage: IStyle;

    /**
     * Styling for subcomponents.
     */
    subComponentStyles: ITextFieldSubComponentStyles;
}


const globalClassNames = {
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

function getLabelStyles(props: ITextFieldStyleProps): IStyleFunctionOrObject<IOfficeLabelStyleProps, IOfficeLabelStyles> {
    const {underlined, disabled} = props;
    return () => ({
        root: [
            underlined &&
            disabled && {
                color: props.theme.palette.neutralTertiary
            },
            underlined && {
                fontSize: FontSizes.medium,
                marginRight: 8,
                paddingLeft: 12,
                paddingRight: 0,
                lineHeight: "22px",
                height: 32
            }
        ]
    });
}

export function getStyles(props: ITextFieldStyleProps): ITextFieldStyles {
    const {
        theme,
        className,
        disabled,
        focused,
        required,
        multiline,
        hasLabel,
        borderless,
        underlined,
        resizable,
        inputClassName
    } = props;

    const {semanticColors, palette} = theme;

    const classNames = getGlobalClassNames(globalClassNames, theme);

    const fieldPrefixSuffix: IStyle = {
        background: palette.neutralLighter,
        color: palette.neutralSecondary,
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        lineHeight: 1,
        whiteSpace: "nowrap"
    };

    return {
        root: [
            classNames.root,
            required && classNames.required,
            disabled && classNames.disabled,
            focused && classNames.active,
            multiline && classNames.multiline,
            borderless && classNames.borderless,
            underlined && classNames.underlined,
            normalize,
            {
                position: "relative",
                selectors: {
                    [HighContrastSelector]: {
                        borderWidth: 2
                    }
                }
            },
            focused && {
                borderColor: semanticColors.inputFocusBorderAlt
            },
            underlined &&
            !focused && {
                border: `0px solid ${semanticColors.inputBorder}`
            },
            underlined &&
            !disabled &&
            !focused && {
                selectors: {
                    ":hover": {
                        borderColor: semanticColors.inputBorderHovered
                    }
                }
            },
            className
        ],
        wrapper: [
            classNames.wrapper,
            underlined && {
                display: "flex",
                borderBottomWidth: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "inherit",
                width: "100%"
            },
            underlined &&
            disabled && {
                borderBottomColor: semanticColors.disabledBackground
            },
            underlined &&
            !disabled && {
                selectors: {
                    ":hover": {
                        selectors: {
                            [HighContrastSelector]: {
                                borderColor: "Highlight"
                            }
                        }
                    }
                }
            },
            underlined &&
            focused && {
                selectors: {
                    [HighContrastSelector]: {
                        borderColor: "Highlight"
                    }
                }
            }
        ],
        fieldGroup: [
            classNames.fieldGroup,
            normalize,
            {
                border: `1px solid ${semanticColors.inputBorder}`,
                background: semanticColors.bodyBackground,
                height: 32,
                display: "flex",
                flexDirection: "row",
                alignItems: "stretch",
                position: "relative",
                selectors: {
                    ":hover": {
                        selectors: {
                            [HighContrastSelector]: {
                                borderColor: "Highlight"
                            }
                        }
                    }
                }
            },
            multiline && {
                minHeight: "60px",
                height: "auto",
                display: "flex"
            },
            borderless && {
                borderColor: "transparent",
                borderWidth: 0
            },
            !focused &&
            !disabled && {
                selectors: {
                    ":hover": {
                        borderColor: semanticColors.inputBorderHovered
                    }
                }
            },
            focused && {
                borderColor: semanticColors.inputFocusBorderAlt,
                selectors: {
                    [HighContrastSelector]: {
                        borderWidth: 2,
                        borderColor: "Highlight"
                    }
                }
            },
            disabled && {
                backgroundColor: semanticColors.disabledBackground,
                borderColor: semanticColors.disabledBackground
            },
            underlined && {
                flex: "1 1 0px",
                borderWidth: 0,
                textAlign: "left"
            },
            underlined &&
            disabled && {
                backgroundColor: "transparent"
            },
            !hasLabel &&
            required && {
                selectors: {
                    ":after": {
                        content: `"*"`,
                        color: semanticColors.errorText,
                        position: "absolute",
                        top: -5,
                        right: -10
                    }
                }
            }
        ],
        field: [
            classNames.field,
            normalize,
            {
                fontSize: FontSizes.medium,
                borderRadius: 0,
                border: "none",
                background: "none",
                backgroundColor: "transparent",
                color: semanticColors.bodyText,
                padding: "0 12px",
                width: "100%",
                minWidth: 0,
                textOverflow: "ellipsis",
                outline: 0,
                selectors: {
                    "&:active, &:focus, &:hover": { outline: 0 },
                    "::-ms-clear": {
                        display: "none"
                    },
                    "::placeholder": {
                        color: semanticColors.inputPlaceholderText,
                        opacity: 1
                    },
                    ":-ms-input-placeholder": {
                        color: semanticColors.inputPlaceholderText,
                        opacity: 1
                    }
                }
            },
            multiline &&
            !resizable && [
                classNames.unresizable,
                {
                    resize: "none"
                }
            ],
            multiline && {
                minHeight: "inherit",
                lineHeight: 17,
                flexGrow: 1,
                paddingTop: 6,
                overflow: "auto",
                width: "100%"
            },
            disabled && {
                backgroundColor: "transparent",
                borderColor: "transparent"
            },
            underlined && {
                textAlign: "left"
            },
            underlined &&
            disabled && {
                backgroundColor: "transparent",
                color: semanticColors.disabledText
            },
            focused && {
                selectors: {
                    [HighContrastSelector]: {
                        padding: "0 11px 0 11px"
                    }
                }
            },
            inputClassName
        ],
        errorMessage: [
            classNames.errorMessage,
            AnimationClassNames.slideDownIn20,
            theme.fonts.small,
            {
                color: semanticColors.errorText,
                margin: 0,
                paddingTop: 5,
                display: "flex",
                alignItems: "center"
            }
        ],
        subComponentStyles: {
            label: getLabelStyles(props)
        }
    };
}
