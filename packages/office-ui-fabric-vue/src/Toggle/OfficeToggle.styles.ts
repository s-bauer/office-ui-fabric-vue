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

import {IOfficeToggleStyleProps, IOfficeToggleStyles} from "./OfficeToggle.types";
import {getFocusStyle, HighContrastSelector} from "@s-bauer/uifabric-styling";

export const getStyles = (props: IOfficeToggleStyleProps): IOfficeToggleStyles => {
  const { theme, disabled, checked } = props;
  const { semanticColors } = theme;
  const pillUncheckedBackground = semanticColors.bodyBackground;
  const pillCheckedBackground = semanticColors.inputBackgroundChecked;
  const pillCheckedHoveredBackground = semanticColors.inputBackgroundCheckedHovered;
  const pillCheckedDisabledBackground = semanticColors.disabledBodySubtext;
  const thumbBackground = semanticColors.inputBorderHovered;
  const thumbCheckedBackground = semanticColors.inputForegroundChecked;
  const thumbDisabledBackground = semanticColors.disabledBodySubtext;
  const thumbCheckedDisabledBackground = semanticColors.disabledBackground;
  const pillBorderColor = semanticColors.smallInputBorder;
  const pillBorderHoveredColor = semanticColors.inputBorderHovered;
  const pillBorderDisabledColor = semanticColors.disabledBodySubtext;
  const textDisabledColor = semanticColors.disabledText;

  return {
    root: [
      "ms-Toggle",
      checked && "is-checked",
      !disabled && "is-enabled",
      disabled && "is-disabled",
      theme.fonts.medium,
      {
        marginBottom: "8px"
      }
    ],

    label: [
      "ms-Toggle-label",
      disabled && {
        color: textDisabledColor,
        selectors: {
          [HighContrastSelector]: {
            color: "GrayText"
          }
        }
      }
    ],

    container: [
      "ms-Toggle-innerContainer",
      {
        display: "inline-flex",
        position: "relative"
      }
    ],

    pill: [
      "ms-Toggle-background",
      getFocusStyle(theme, -3),
      {
        fontSize: "20px",
        boxSizing: "border-box",
        width: "2.2em",
        height: "1em",
        borderRadius: "1em",
        transition: "all 0.1s ease",
        borderWidth: "1px",
        borderStyle: "solid",
        background: pillUncheckedBackground,
        borderColor: pillBorderColor,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        padding: "0 .2em"
      },
      !disabled && [
        !checked && {
          selectors: {
            ":hover": [
              {
                borderColor: pillBorderHoveredColor
              }
            ],
            ":hover .ms-Toggle-thumb": [
              {
                selectors: {
                  [HighContrastSelector]: {
                    borderColor: "Highlight"
                  }
                }
              }
            ]
          }
        },
        checked && [
          {
            background: pillCheckedBackground,
            borderColor: "transparent",
            justifyContent: "flex-end"
          },
          {
            selectors: {
              ":hover": [
                {
                  backgroundColor: pillCheckedHoveredBackground,
                  borderColor: "transparent",
                  selectors: {
                    [HighContrastSelector]: {
                      backgroundColor: "Highlight"
                    }
                  }
                }
              ],
              [HighContrastSelector]: {
                backgroundColor: "WindowText"
              }
            }
          }
        ]
      ],
      disabled && [
        {
          cursor: "default"
        },
        !checked && [
          {
            borderColor: pillBorderDisabledColor
          }
        ],
        checked && [
          {
            backgroundColor: pillCheckedDisabledBackground,
            borderColor: "transparent",
            justifyContent: "flex-end"
          }
        ]
      ],
      !disabled && {
        selectors: {
          "&:hover": {
            selectors: {
              [HighContrastSelector]: {
                borderColor: "Highlight"
              }
            }
          }
        }
      }
    ],

    thumb: [
      "ms-Toggle-thumb",
      {
        width: ".5em",
        height: ".5em",
        borderRadius: ".5em",
        transition: "all 0.1s ease",
        backgroundColor: thumbBackground,
        /* Border is added to handle high contrast mode for Firefox */
        borderColor: "transparent",
        borderWidth: ".28em",
        borderStyle: "solid",
        boxSizing: "border-box"
      },
      !disabled &&
        checked && [
          {
            backgroundColor: thumbCheckedBackground,
            selectors: {
              [HighContrastSelector]: {
                backgroundColor: "Window",
                borderColor: "Window"
              }
            }
          }
        ],
      disabled && [
        !checked && [
          {
            backgroundColor: thumbDisabledBackground
          }
        ],
        checked && [
          {
            backgroundColor: thumbCheckedDisabledBackground
          }
        ]
      ]
    ],

    text: [
      "ms-Toggle-stateText",
      {
        selectors: {
          // Workaround: make rules more sepecific than Label rules.
          "&&": {
            padding: "0",
            margin: "0 10px",
            userSelect: "none"
          }
        }
      },
      disabled && {
        selectors: {
          "&&": {
            color: textDisabledColor,
            selectors: {
              [HighContrastSelector]: {
                color: "GrayText"
              }
            }
          }
        }
      }
    ]
  };
};
