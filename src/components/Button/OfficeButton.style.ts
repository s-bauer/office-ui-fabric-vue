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

import {IOfficeButtonStyles} from "@/components/Button/OfficeButton.types";
import {FontSizes, FontWeights, getFocusStyle, hiddenContentStyle, HighContrastSelector, ITheme} from "@/styling";
import {memoizeFunction} from "@/utility/memoize";
import {concatStyleSets, IRawStyle} from "@uifabric/merge-styles";

const DEFAULT_BUTTON_HEIGHT = "32px";
const DEFAULT_BUTTON_MINWIDTH = "80px";

const noOutline: IRawStyle = {
    outline: 0
};

const iconStyle = {
    fontSize: FontSizes.icon,
    margin: "0 4px",
    height: "16px",
    lineHeight: "16px",
    textAlign: "center",
    verticalAlign: "middle",
    flexShrink: 0
};

export const getStyles = memoizeFunction((theme: ITheme, customStyles?: IOfficeButtonStyles, primary?: boolean): IOfficeButtonStyles => {
        const baseButtonStyles: IOfficeButtonStyles = getBaseStyles(theme);
        const defaultButtonStyles: IOfficeButtonStyles = {
            root: {
                minWidth: DEFAULT_BUTTON_MINWIDTH,
                height: DEFAULT_BUTTON_HEIGHT
            },
            label: {
                fontWeight: FontWeights.semibold
            }
        };

        return concatStyleSets(
            baseButtonStyles,
            defaultButtonStyles,
            primary ? primaryStyles(theme) : standardStyles(theme),
            customStyles
        )!;
    });

export const getBaseStyles = memoizeFunction((theme: ITheme): IOfficeButtonStyles => {
    const { semanticColors } = theme;

    const border = semanticColors.buttonBorder;
    const disabledBackground = semanticColors.disabledBackground;
    const disabledText = semanticColors.disabledText;
    const buttonHighContrastFocus = {
        left: -2,
        top: -2,
        bottom: -2,
        right: -2,
        border: "none",
        outlineColor: "ButtonText"
    };

    return {
        root: [
            getFocusStyle(theme, -1, "relative", buttonHighContrastFocus),
            theme.fonts.medium,
            {
                boxSizing: "border-box",
                border: "1px solid " + border,
                userSelect: "none",
                display: "inline-block",
                textDecoration: "none",
                textAlign: "center",
                cursor: "pointer",
                verticalAlign: "top",
                padding: "0 16px",
                borderRadius: 0,

                selectors: {
                    // IE11 workaround for preventing shift of child elements of a button when active.
                    ":active > *": {
                        position: "relative",
                        left: 0,
                        top: 0
                    }
                }
            }
        ],

        rootDisabled: [
            getFocusStyle(theme, -1, "relative", buttonHighContrastFocus),
            {
                backgroundColor: disabledBackground,
                color: disabledText,
                cursor: "default",
                pointerEvents: "none",
                selectors: {
                    ":hover": noOutline,
                    ":focus": noOutline,
                    [HighContrastSelector]: {
                        color: "grayText",
                        bordercolor: "grayText"
                    }
                }
            }
        ],

        iconDisabled: {
            color: disabledText
        },

        menuIconDisabled: {
            color: disabledText
        },

        flexContainer: {
            display: "flex",
            height: "100%",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center"
        },

        textContainer: {
            flexGrow: 1
        },

        icon: iconStyle,

        menuIcon: [
            iconStyle,
            {
                fontSize: FontSizes.small
            }
        ],

        label: {
            margin: "0 4px",
            lineHeight: "100%"
        },

        screenReaderText: hiddenContentStyle
    };
});

export function standardStyles(theme: ITheme): IOfficeButtonStyles {

    return {
        root: {
            backgroundColor: "#f4f4f4",
            color: "#333333"
        },

        rootHovered: {
            backgroundColor: "#eaeaea",
            color: "#212121",
            selectors: {
                [HighContrastSelector]: {
                    borderColor: "Highlight",
                    color: "Highlight"
                }
            }
        },

        rootPressed: {
            backgroundColor: "#c8c8c8",
            color: "#212121"
        },

        rootExpanded: {
            backgroundColor: "#c8c8c8",
            color: "#212121"
        },

        rootChecked: {
            backgroundColor: "#c8c8c8",
            color: "#212121"
        },

        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralLight,
            color: "#000000"
        },

        // Split button styles
        splitButtonContainer: {
            selectors: {
                [HighContrastSelector]: {
                    border: "none"
                }
            }
        },

        splitButtonMenuButton: {
            color: theme.palette.white,
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ":hover": {
                    backgroundColor: theme.palette.neutralLight,
                    selectors: {
                        [HighContrastSelector]: {
                            color: "Highlight"
                        }
                    }
                }
            }
        },

        splitButtonMenuButtonDisabled: {
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ":hover": {
                    backgroundColor: theme.palette.neutralLighter
                }
            }
        },

        splitButtonDivider: {
            backgroundColor: theme.palette.neutralTertiaryAlt
        },

        splitButtonMenuButtonChecked: {
            backgroundColor: theme.palette.themePrimary
        },

        splitButtonMenuButtonExpanded: {
            backgroundColor: theme.palette.neutralLight
        },

        splitButtonMenuIcon: {
            color: theme.palette.neutralPrimary
        },

        splitButtonMenuIconDisabled: {
            color: theme.palette.neutralTertiary
        }
    };
}

export function primaryStyles(theme: ITheme): IOfficeButtonStyles {
    return {
        root: {
            backgroundColor: "#0078d4",
            color: "#ffffff",
        },

        rootHovered: {
            backgroundColor: "#106ebe",
            color: "#ffffff",
        },

        rootPressed: {
            backgroundColor: "#005a9e",
            color: "#ffffff",
        },

        rootExpanded: {
            backgroundColor: "#005a9e",
            color: "#ffffff"
        },

        rootChecked: {
            backgroundColor: "#005a9e",
            color: "#ffffff"
        },

        rootCheckedHovered: {
            backgroundColor: theme.palette.themePrimary,
            color: "#ffffff"
        },

        splitButtonDivider: {
            backgroundColor: theme.palette.themeLighter
        },

        splitButtonMenuButton: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white,
            selectors: {
                ":hover": {
                    backgroundColor: theme.palette.themeDark,
                    selectors: {
                        [HighContrastSelector]: {
                            color: "Highlight"
                        }
                    }
                }
            }
        },

        splitButtonMenuButtonDisabled: {
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ":hover": {
                    backgroundColor: theme.palette.neutralLighter
                }
            }
        },

        splitButtonMenuButtonChecked: {
            backgroundColor: theme.palette.themeDark
        },

        splitButtonMenuButtonExpanded: {
            backgroundColor: theme.palette.themeDark
        },

        splitButtonMenuIcon: {
            color: theme.palette.white
        },

        splitButtonMenuIconDisabled: {
            color: theme.palette.neutralTertiary
        }
    };
}

