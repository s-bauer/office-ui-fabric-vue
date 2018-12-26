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

export function getStyles(props: ITextFieldStylesProps): ITextFieldStyles {
    const {disabled, focused} = props;
    return {
        root: [
            "ms-TextField",
            disabled && "is-disabled",
            focused && "is-active",
            {
                position: 'relative',
                selectors: {
                    /*[HighContrastSelector]: {
                        borderWidth: 2
                    }*/
                }
            },
            focused && {
                borderColor: "#0078d4"
            }
        ],
        wrapper: [
            "ms-TextField-wrapper",
        ],
        fieldGroup: [
            "ms-TextField-fieldGroup",
            {
                border: `1px solid #a6a6a6`,
                background: "#ffffff",
                height: 32,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                position: 'relative',
                selectors: {
                    ':hover': {
                        selectors: {
                           /* [HighContrastSelector]: {
                                borderColor: 'Highlight'
                            }*/
                        }
                    }
                }
            },
            !focused &&
            !disabled && {
                selectors: {
                    ':hover': {
                        borderColor: "#333333"
                    }
                }
            },
            focused && {
                borderColor: "#0078d4",
                selectors: {
                   /* [HighContrastSelector]: {
                        borderWidth: 2,
                        borderColor: 'Highlight'
                    }*/
                }
            },
            disabled && {
                backgroundColor: "#f4f4f4",
                borderColor: "#f4f4f4"
            }
        ],
        field: [
            "ms-TextField-wrapper",
            {
                fontSize: 14,
                borderRadius: 0,
                border: 'none',
                background: 'none',
                backgroundColor: 'transparent',
                color: "#333333",
                padding: '0 12px',
                width: '100%',
                minWidth: 0,
                textOverflow: 'ellipsis',
                outline: 0,
                selectors: {
                    '&:active, &:focus, &:hover': { outline: 0 },
                    '::-ms-clear': {
                        display: 'none'
                    },
                    '::placeholder': {
                        color: "#666666",
                        opacity: 1
                    },
                    ':-ms-input-placeholder': {
                        color: "#666666",
                        opacity: 1
                    }
                }
            },
            disabled && {
                backgroundColor: 'transparent',
                borderColor: 'transparent'
            },
            focused && {
               /* selectors: {
                    [HighContrastSelector]: {
                        padding: '0 11px 0 11px'
                    }
                }*/
            },
        ]
    };
}

export interface ITextFieldStyles {
    root?: IStyle;
    wrapper?: IStyle;
    fieldGroup?: IStyle;
    field?: IStyle;
}

export interface ITextFieldStylesProps {
    disabled: boolean;
    focused: boolean;
}
