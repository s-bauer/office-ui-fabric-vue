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

import {IOfficeSpinnerStyleProps, IOfficeSpinnerStyles, SpinnerSize} from "@components/Spinner/OfficeSpinner.types";
import {hiddenContentStyle, HighContrastSelector} from "@styling/styles";
import {getGlobalClassNames} from "@styling/styles/getGlobalClassNames";
import {keyframes} from "@uifabric/merge-styles";

const GlobalClassNames = {
  root: "ms-Spinner",
  circle: "ms-Spinner-circle",
  label: "ms-Spinner-label"
};

const spinAnimation: string = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});

export const getStyles = (props: IOfficeSpinnerStyleProps): IOfficeSpinnerStyles => {
  const { theme, size, className, labelPosition } = props;

  const { palette } = theme;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      classNames.root,
      {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      },
      labelPosition === "top" && {
        flexDirection: "column-reverse"
      },
      labelPosition === "right" && {
        flexDirection: "row"
      },
      labelPosition === "left" && {
        flexDirection: "row-reverse"
      },
      className
    ],
    circle: [
      classNames.circle,
      {
        boxSizing: "border-box",
        borderRadius: "50%",
        border: "1.5px solid " + palette.themeLight,
        borderTopColor: palette.themePrimary,
        animationName: spinAnimation,
        animationDuration: "1.3s",
        animationIterationCount: "infinite",
        animationTimingFunction: "cubic-bezier(.53,.21,.29,.67)",
        selectors: {
          [HighContrastSelector]: {
            borderTopColor: "Highlight"
          }
        }
      },
      size === SpinnerSize.xSmall && [
        "ms-Spinner--xSmall",
        {
          width: 12,
          height: 12
        }
      ],
      size === SpinnerSize.small && [
        "ms-Spinner--small",
        {
          width: 16,
          height: 16
        }
      ],
      size === SpinnerSize.medium && [
        "ms-Spinner--medium",
        {
          width: 20,
          height: 20
        }
      ],
      size === SpinnerSize.large && [
        "ms-Spinner--large",
        {
          width: 28,
          height: 28
        }
      ]
    ],
    label: [
      classNames.label,
      {
        color: palette.themePrimary,
        margin: "10px 0 0",
        textAlign: "center"
      },
      labelPosition === "top" && {
        margin: "0 0 10px"
      },
      labelPosition === "right" && {
        margin: "0 0 0 10px"
      },
      labelPosition === "left" && {
        margin: "0 10px 0 0"
      }
    ],
    screenReaderText: hiddenContentStyle
  };
};
