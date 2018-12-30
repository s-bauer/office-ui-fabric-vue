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

import {IOfficeImageStyleProps, IOfficeImageStyles} from "@/components/Image/OfficeImage.types";
import {AnimationClassNames} from "@/styling";
import {getGlobalClassNames} from "@/styling/styles/getGlobalClassNames";
import {IStyle} from "@uifabric/merge-styles";

const GlobalClassNames = {
  root: "ms-Image",
  rootMaximizeFrame: "ms-Image--maximizeFrame",
  image: "ms-Image-image",
  imageCenter: "ms-Image-image--center",
  imageContain: "ms-Image-image--contain",
  imageCover: "ms-Image-image--cover",
  imageCenterCover: "ms-Image-image--centerCover",
  imageNone: "ms-Image-image--none",
  imageLandscape: "ms-Image-image--landscape",
  imagePortrait: "ms-Image-image--portrait"
};

export const getStyles = (props: IOfficeImageStyleProps): IOfficeImageStyles => {
  const {
    className,
    width,
    height,
    maximizeFrame,
    isLoaded,
    shouldFadeIn,
    shouldStartVisible,
    isLandscape,
    isCenter,
    isContain,
    isCover,
    isCenterCover,
    isNone,
    isError,
    isNotImageFit,
    theme
  } = props;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  const ImageFitStyles: IStyle = {
    position: "absolute",
    left: "50% /* @noflip */",
    top: "50%",
    transform: "translate(-50%,-50%)" // @todo test RTL renders transform: translate(50%,-50%);
  };

  return {
    root: [
      classNames.root,
      theme.fonts.medium,
      {
        overflow: "hidden"
      },
      maximizeFrame && [
        classNames.rootMaximizeFrame,
        {
          height: "100%",
          width: "100%"
        }
      ],
      (isCenter || isContain || isCover || isCenterCover) && {
        position: "relative"
      },
      className
    ],
    image: [
      classNames.image,
      {
        display: "block",
        opacity: 0
      },
      isLoaded && [
        "is-loaded",
        {
          opacity: 1
        }
      ],
      isCenter && [classNames.imageCenter, ImageFitStyles],
      isContain && [
        classNames.imageContain,
        isLandscape && {
          width: "100%",
          height: "auto"
        },
        !isLandscape && {
          width: "auto",
          height: "100%"
        },
        ImageFitStyles
      ],
      isCover && [
        classNames.imageCover,
        isLandscape && {
          width: "auto",
          height: "100%"
        },
        !isLandscape && {
          width: "100%",
          height: "auto"
        },
        ImageFitStyles
      ],
      isCenterCover && [
        classNames.imageCenterCover,
        isLandscape && {
          maxHeight: "100%"
        },
        !isLandscape && {
          maxWidth: "100%"
        },
        ImageFitStyles
      ],
      isNone && [
        classNames.imageNone,
        {
          width: "auto",
          height: "auto"
        }
      ],
      isNotImageFit && [
        !!width &&
          !height && {
            height: "auto",
            width: "100%"
          },
        !width &&
          !!height && {
            height: "100%",
            width: "auto"
          },
        !!width &&
          !!height && {
            height: "100%",
            width: "100%"
          }
      ],
      isLoaded && shouldFadeIn && !shouldStartVisible && AnimationClassNames.fadeIn400,
      isLandscape && classNames.imageLandscape,
      !isLandscape && classNames.imagePortrait,
      !isLoaded && "is-notLoaded",
      shouldFadeIn && "is-fadeIn",
      isError && "is-error"
    ]
  };
};
