"use strict";
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
exports.__esModule = true;
var styles_1 = require("@styling/styles");
var MS_CHECKBOX_LABEL_SIZE = "20px";
var MS_CHECKBOX_TRANSITION_DURATION = "200ms";
var MS_CHECKBOX_TRANSITION_TIMING = "cubic-bezier(.4, 0, .23, 1)";
exports.getStyles = function (props) {
    var _a, _b, _c, _d, _e;
    var className = props.className, theme = props.theme, reversed = props.reversed, checked = props.checked, disabled = props.disabled, isUsingCustomLabelRender = props.isUsingCustomLabelRender;
    var semanticColors = theme.semanticColors;
    var checkmarkFontColor = semanticColors.inputForegroundChecked;
    var checkmarkFontColorCheckedDisabled = semanticColors.disabledBackground;
    var checkmarkFontColorHovered = semanticColors.inputBorder;
    var checkboxBorderColor = semanticColors.smallInputBorder;
    var checkboxBorderColorChecked = semanticColors.inputBackgroundChecked;
    var checkboxBorderColorDisabled = semanticColors.disabledBodySubtext;
    var checkboxBorderHoveredColor = semanticColors.inputBorderHovered;
    var checkboxBackgroundChecked = semanticColors.inputBackgroundChecked;
    var checkboxBackgroundCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
    var checkboxBorderColorCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
    var checkboxHoveredTextColor = semanticColors.bodyText;
    var checkboxBackgroundDisabledChecked = semanticColors.disabledBodySubtext;
    var checkboxTextColor = semanticColors.bodyText;
    var checkboxTextColorDisabled = semanticColors.disabledText;
    return {
        root: [
            "ms-Checkbox",
            reversed && "reversed",
            checked && "is-checked",
            !disabled && "is-enabled",
            disabled && "is-disabled",
            styles_1.getFocusStyle(theme, -3),
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
                            selectors: (_a = {},
                                _a[styles_1.HighContrastSelector] = {
                                    borderColor: "Highlight"
                                },
                                _a)
                        },
                        ":focus .ms-Checkbox-checkbox": {
                            borderColor: checkboxBorderHoveredColor
                        },
                        ":hover .ms-Checkbox-checkmark": {
                            color: checkmarkFontColorHovered,
                            opacity: "1",
                            selectors: (_b = {},
                                _b[styles_1.HighContrastSelector] = {
                                    color: "Highlight"
                                },
                                _b)
                        }
                    }
                },
                checked && {
                    selectors: (_c = {
                            ":hover .ms-Checkbox-checkbox": {
                                background: checkboxBackgroundCheckedHovered,
                                borderColor: checkboxBorderColorCheckedHovered
                            },
                            ":focus .ms-Checkbox-checkbox": {
                                background: checkboxBackgroundCheckedHovered,
                                borderColor: checkboxBorderColorCheckedHovered
                            }
                        },
                        _c[styles_1.HighContrastSelector] = {
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
                        },
                        _c)
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
                selectors: (_d = {},
                    _d[styles_1.HighContrastSelector] = {
                        background: "Highlight",
                        borderColor: "Highlight"
                    },
                    _d)
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
                selectors: (_e = {},
                    _e[styles_1.HighContrastSelector] = {
                        color: disabled ? "InactiveBorder" : "Window",
                        MsHighContrastAdjust: "none"
                    },
                    _e)
            }
        ],
        text: [
            "ms-Checkbox-text",
            {
                color: disabled ? checkboxTextColorDisabled : checkboxTextColor,
                margin: "0 4px",
                fontSize: styles_1.FontSizes.medium,
                lineHeight: "20px"
            }
        ]
    };
};
