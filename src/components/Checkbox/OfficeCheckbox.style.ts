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


import {IStyle} from "@uifabric/merge-styles";

export function getStyles(props: ICheckboxStylesProps): ICheckboxStyles {
    return {
        root: [
            "ms-Checkbox",
            {
                padding: 0,
                margin: 0,
                border: "none",
                background: "none",
                outline: "none",
                display: "block",
                cursor: "pointer",
                fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
            },
            !props.disabled && [
                !props.checked && {
                    selectors: {
                        ":hover .ms-Checkbox-checkbox": {
                            borderColor: "#333333"
                        },
                        ":focus .ms-Checkbox-checkbox": {
                            borderColor: "#333333"
                        },
                        ":hover .ms-Checkbox-checkmark": {
                            color: "#a6a6a6",
                            opacity: "1"
                        }
                    }
                },
                props.checked && {
                    selectors: {
                        ":hover .ms-Checkbox-checkbox": {
                            background: "#106ebe",
                            borderColor: "#106ebe"
                        },
                        ":focus .ms-Checkbox-checkbox": {
                            background: "#106ebe",
                            borderColor: "#106ebe"
                        }
                    }
                },
                {
                    selectors: {
                        ":hover .ms-Checkbox-text": {color: "#333333"},
                        ":focus .ms-Checkbox-text": {color: "#333333"}
                    }
                }
            ],
        ],
        label: [
            "ms-Checkbox-label",
            {
                display: "flex",
                margin: "0 -4px",
                alignItems: "flex-start",
                cursor: props.disabled ? "default" : "pointer",
                position: "relative",
                userSelect: "none",
                textAlign: "left"
            }
        ],
        checkbox: [
            "ms-Checkbox-checkbox",
            {
                display: "flex",
                flexShrink: 0,
                alignItems: "center",
                justifyContent: "center",
                height: "20px",
                width: "20px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#666666",
                margin: "0 4px",
                boxSizing: "border-box",
                transitionProperty: "background, border, border-color",
                transitionDuration: "200ms",
                transitionTimingFunction: "cubic-bezier(.4, 0, .23, 1)",

                /* in case the icon is bigger than the box */
                overflow: "hidden"
            },
            !props.disabled && props.checked && {
                background: "#0078d4",
                borderColor: "#0078d4"
            },
            props.disabled && {
                borderColor: "#c8c8c8"
            },
            props.checked && props.disabled && {
                background: "#c8c8c8",
                borderColor: "#c8c8c8"
            }
        ],
        checkmark: [
            "ms-Checkbox-checkmark",
            {
                opacity: props.checked ? "1" : "0",
                color: props.checked && props.disabled ? "#f4f4f4" : "#ffffff",
            }
        ],
        text: [
            "ms-Checkbox-text",
            {
                color: props.disabled ? "#a6a6a6" : "#333333",
                margin: "0 4px",
                fontSize: "14px",
                lineHeight: "20px"
            }
        ]
    };
}

export interface ICheckboxStyles {
    root?: IStyle;
    label?: IStyle;
    checkbox?: IStyle;
    checkmark?: IStyle;
    text?: IStyle;
}

export interface ICheckboxStylesProps {
    disabled: boolean;
    checked: boolean;
}
