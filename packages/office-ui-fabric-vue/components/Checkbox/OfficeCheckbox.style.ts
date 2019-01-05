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

import {ITheme} from "@styling/interfaces";
import {FontSizes, getFocusStyle, HighContrastSelector} from "@styling/styles";
import {IStyle} from "@uifabric/merge-styles";

const MS_CHECKBOX_LABEL_SIZE = "20px";
const MS_CHECKBOX_TRANSITION_DURATION = "200ms";
const MS_CHECKBOX_TRANSITION_TIMING = "cubic-bezier(.4, 0, .23, 1)";

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

export const getStyles = (props: ICheckboxStyleProps): ICheckboxStyles => {
    const { className, theme, reversed, checked, disabled, isUsingCustomLabelRender } = props;
    const { semanticColors } = theme;
    const checkmarkFontColor = semanticColors.inputForegroundChecked;
    const checkmarkFontColorCheckedDisabled = semanticColors.disabledBackground;
    const checkmarkFontColorHovered = semanticColors.inputBorder;
    const checkboxBorderColor = semanticColors.smallInputBorder;
    const checkboxBorderColorChecked = semanticColors.inputBackgroundChecked;
    const checkboxBorderColorDisabled = semanticColors.disabledBodySubtext;
    const checkboxBorderHoveredColor = semanticColors.inputBorderHovered;
    const checkboxBackgroundChecked = semanticColors.inputBackgroundChecked;
    const checkboxBackgroundCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
    const checkboxBorderColorCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
    const checkboxHoveredTextColor = semanticColors.bodyText;
    const checkboxBackgroundDisabledChecked = semanticColors.disabledBodySubtext;
    const checkboxTextColor = semanticColors.bodyText;
    const checkboxTextColorDisabled = semanticColors.disabledText;

    return {
        root: [
            "ms-Checkbox",
            reversed && "reversed",
            checked && "is-checked",
            !disabled && "is-enabled",
            disabled && "is-disabled",
            getFocusStyle(theme, -3),
            theme.fonts.medium,
            {
                padding: "0",
                border: "none",
                background: "none",
                margin: "0",
                outline: "none",
                display: "block",
                cursor: "pointer"
            },
            !disabled && [
                !checked && {
                    selectors: {
                        ":hover .ms-Checkbox-checkbox": {
                            borderColor: checkboxBorderHoveredColor,
                            selectors: {
                                [HighContrastSelector]: {
                                    borderColor: "Highlight"
                                }
                            }
                        },
                        ":focus .ms-Checkbox-checkbox": {
                            borderColor: checkboxBorderHoveredColor
                        },
                        ":hover .ms-Checkbox-checkmark": {
                            color: checkmarkFontColorHovered,
                            opacity: "1",
                            selectors: {
                                [HighContrastSelector]: {
                                    color: "Highlight"
                                }
                            }
                        }
                    }
                },
                checked && {
                    selectors: {
                        ":hover .ms-Checkbox-checkbox": {
                            background: checkboxBackgroundCheckedHovered,
                            borderColor: checkboxBorderColorCheckedHovered
                        },
                        ":focus .ms-Checkbox-checkbox": {
                            background: checkboxBackgroundCheckedHovered,
                            borderColor: checkboxBorderColorCheckedHovered
                        },
                        [HighContrastSelector]: {
                            selectors: {
                                ":hover .ms-Checkbox-checkbox": {
                                    background: "Window",
                                    borderColor: "Highlight"
                                },
                                ":focus .ms-Checkbox-checkbox": {
                                    background: "Highlight"
                                },
                                ":focus:hover .ms-Checkbox-checkbox": {
                                    background: "Highlight"
                                },
                                ":focus:hover .ms-Checkbox-checkmark": {
                                    color: "Window"
                                },
                                ":hover .ms-Checkbox-checkmark": {
                                    color: "Highlight"
                                }
                            }
                        }
                    }
                },
                {
                    selectors: {
                        ":hover .ms-Checkbox-text": { color: checkboxHoveredTextColor },
                        ":focus .ms-Checkbox-text": { color: checkboxHoveredTextColor }
                    }
                }
            ],
            className
        ],
        label: [
            "ms-Checkbox-label",
            {
                display: "flex",
                margin: "0 -4px",
                alignItems: isUsingCustomLabelRender ? "center" : "flex-start",
                cursor: disabled ? "default" : "pointer",
                position: "relative",
                userSelect: "none",
                textAlign: "left"
            },
            reversed && {
                flexDirection: "row-reverse",
                justifyContent: "flex-end"
            }
        ],
        checkbox: [
            "ms-Checkbox-checkbox",
            {
                display: "flex",
                flexShrink: 0,
                alignItems: "center",
                justifyContent: "center",
                height: MS_CHECKBOX_LABEL_SIZE,
                width: MS_CHECKBOX_LABEL_SIZE,
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: checkboxBorderColor,
                margin: "0 4px",
                boxSizing: "border-box",
                transitionProperty: "background, border, border-color",
                transitionDuration: MS_CHECKBOX_TRANSITION_DURATION,
                transitionTimingFunction: MS_CHECKBOX_TRANSITION_TIMING,

                /* in case the icon is bigger than the box */
                overflow: "hidden"
            },
            !disabled &&
            checked && {
                background: checkboxBackgroundChecked,
                borderColor: checkboxBorderColorChecked,
                selectors: {
                    [HighContrastSelector]: {
                        background: "Highlight",
                        borderColor: "Highlight"
                    }
                }
            },
            disabled && {
                borderColor: checkboxBorderColorDisabled
            },
            checked &&
            disabled && {
                background: checkboxBackgroundDisabledChecked,
                borderColor: checkboxBorderColorDisabled
            }
        ],
        checkmark: [
            "ms-Checkbox-checkmark",
            {
                opacity: checked ? "1" : "0",
                color: checked && disabled ? checkmarkFontColorCheckedDisabled : checkmarkFontColor,
                selectors: {
                    [HighContrastSelector]: {
                        color: disabled ? "InactiveBorder" : "Window",
                        MsHighContrastAdjust: "none"
                    }
                }
            }
        ],
        text: [
            "ms-Checkbox-text",
            {
                color: disabled ? checkboxTextColorDisabled : checkboxTextColor,
                margin: "0 4px",
                fontSize: FontSizes.medium,
                lineHeight: "20px"
            }
        ]
    };
};
