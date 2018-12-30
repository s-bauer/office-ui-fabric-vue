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

import {IOfficeLinkStyleProps, IOfficeLinkStyles} from "@/components/Link/OfficeLink.types";
import {HighContrastSelector, HighContrastSelectorBlack, HighContrastSelectorWhite} from "@/styling";
import {IsFocusVisibleClassName} from "@/styling/styles/getFocusStyle";
import {getGlobalClassNames} from "@/styling/styles/getGlobalClassNames";

const GlobalClassNames = {
  root: "ms-Link"
};

export const getStyles = (props: IOfficeLinkStyleProps): IOfficeLinkStyles => {
  const { className, isButton, isDisabled, theme } = props;
  const { semanticColors } = theme;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      classNames.root,
      theme.fonts.medium,
      {
        color: semanticColors.link,
        outline: "none",
        fontSize: "inherit",
        fontWeight: "inherit",
        selectors: {
          [`.${IsFocusVisibleClassName} &:focus`]: {
            // Can't use getFocusStyle because it doesn't support wrapping links
            // https://github.com/OfficeDev/office-ui-fabric-react/issues/4883#issuecomment-406743543
            outline: `1px solid ${theme.palette.neutralSecondary}`
          }
        }
      },
      isButton && {
        background: "none",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        display: "inline",
        margin: 0,
        overflow: "inherit",
        padding: 0,
        textAlign: "left",
        textOverflow: "inherit",
        userSelect: "text",
        borderBottom: "1px solid transparent", // For Firefox high contrast mode
        selectors: {
          [HighContrastSelectorBlack]: {
            color: "#FFFF00"
          },
          [HighContrastSelectorWhite]: {
            color: "#00009F"
          },
          "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)": {
            // For IE high contrast mode
            borderBottom: "none"
          }
        }
      },
      !isButton && {
        textDecoration: "none"
      },
      isDisabled && [
        "is-disabled",
        {
          color: semanticColors.disabledText,
          cursor: "default"
        },
        {
          selectors: {
            "&:link, &:visited": {
              pointerEvents: "none"
            }
          }
        }
      ],
      !isDisabled && {
        selectors: {
          "&:active, &:hover, &:active:hover": {
            color: semanticColors.linkHovered,
            selectors: {
              [HighContrastSelector]: {
                textDecoration: "underline"
              }
            }
          },
          "&:focus": {
            color: semanticColors.link
          }
        }
      },
      classNames.root,
      className
    ]
  };
};
