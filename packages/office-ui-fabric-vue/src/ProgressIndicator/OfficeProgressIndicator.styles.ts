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


import {
  IProgressIndicatorStyleProps,
  IProgressIndicatorStyles
} from "./OfficeProgressIndicator.types";
import {FontSizes, FontWeights, HighContrastSelector, noWrap} from "@s-bauer/uifabric-styling";
import {getGlobalClassNames} from "@s-bauer/uifabric-styling";
import {IRawStyle, keyframes} from "@uifabric/merge-styles";

const GlobalClassNames = {
  root: "ms-ProgressIndicator",
  itemName: "ms-ProgressIndicator-itemName",
  itemDescription: "ms-ProgressIndicator-itemDescription",
  itemProgress: "ms-ProgressIndicator-itemProgress",
  progressTrack: "ms-ProgressIndicator-progressTrack",
  progressBar: "ms-ProgressIndicator-progressBar"
};

const IndeterminateProgress = keyframes({
  "0%": {
    left: "-30%"
  },
  "100%": {
    left: "100%"
  }
});
const IndeterminateProgressRTL = keyframes({
  "100%": {
    right: "-30%"
  },
  "0%": {
    right: "100%"
  }
});

export const getStyles = (props: IProgressIndicatorStyleProps): IProgressIndicatorStyles => {
  const { className, indeterminate, theme, barHeight = 2 } = props;

  const { palette, semanticColors } = theme;
  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  const marginBetweenText = 8;
  const textHeight = 18;
  const progressTrackColor = palette.neutralLight;

  return {
    root: [
      classNames.root,
      theme.fonts.medium,
      {
        fontWeight: FontWeights.regular
      },
      className
    ],

    itemName: [
      classNames.itemName,
      noWrap,
      {
        color: semanticColors.bodyText,
        fontSize: FontSizes.medium,
        paddingTop: marginBetweenText / 2,
        lineHeight: textHeight + 2
      }
    ],

    itemDescription: [
      classNames.itemDescription,
      {
        color: semanticColors.bodySubtext,
        fontSize: FontSizes.xSmall,
        lineHeight: textHeight
      }
    ],

    itemProgress: [
      classNames.itemProgress,
      {
        position: "relative",
        overflow: "hidden",
        height: barHeight,
        padding: `${marginBetweenText}px 0`
      }
    ],

    progressTrack: [
      classNames.progressTrack,
      {
        position: "absolute",
        width: "100%",
        height: barHeight,
        backgroundColor: progressTrackColor,

        selectors: {
          [HighContrastSelector]: {
            borderBottom: "1px solid WindowText"
          }
        }
      }
    ],

    progressBar: [
      {
        backgroundColor: palette.themePrimary,
        height: barHeight,
        position: "absolute",
        transition: "width .3s ease",
        width: 0,

        selectors: {
          [HighContrastSelector]: {
            backgroundColor: "WindowText"
          }
        }
      },

      indeterminate
        ? ({
            position: "absolute",
            minWidth: "33%",
            background: `linear-gradient(to right, ${progressTrackColor} 0%, ${palette.themePrimary} 50%, ${progressTrackColor} 100%)`,
            animation: `${IndeterminateProgress} 3s infinite`
          } as IRawStyle)
        : ({
            transition: "width .15s linear"
          } as IRawStyle),
      classNames.progressBar
    ]
  };
};
