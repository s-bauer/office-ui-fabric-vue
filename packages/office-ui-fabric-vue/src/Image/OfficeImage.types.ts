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

import {ITheme} from "@s-bauer/uifabric-styling";
import {IStyle, IStyleFunctionOrObject} from "@uifabric/merge-styles";

/**
 * The possible methods that can be used to fit the image.
 */
export enum ImageFit {
  /**
   * The image is not scaled. The image is centered and cropped within the content box.
   */
  center = 0,

  /**
   * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
   * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
   * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
   */
  contain = 1,

  /**
   * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
   * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
   */
  cover = 2,

  /**
   * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
   * frame will have empty space.
   */
  none = 3,

  /**
   * The image will be centered horizontally and vertically within the frame and maintains its aspect ratio. It will
   * behave as ImageFit.center if the image's natural height or width is less than the Image frame's height or width,
   * but if both natural height and width are larger than the frame it will behave as ImageFit.cover.
   */
  centerCover = 4
}

/**
 * The cover style to be used on the image
 */
export enum ImageCoverStyle {
  /**
   * The image will be shown at 100% height of container and the width will be scaled accordingly
   */
  landscape = 0,

  /**
   * The image will be shown at 100% width of container and the height will be scaled accordingly
   */
  portrait = 1
}

export enum ImageLoadState {
  /**
   * The image has not yet been loaded, and there is no error yet.
   */
  notLoaded = 0,

  /**
   * The image has been loaded successfully.
   */
  loaded = 1,

  /**
   * An error has been encountered while loading the image.
   */
  error = 2,

  /**
   * Deprecated at v1.3.6, to replace the src in case of errors, use `onLoadingStateChange` instead
   * and rerender the Image with a difference src.
   * @deprecated Use `onLoadingStateChange` instead
   * and rerender the Image with a difference src.
   */
  errorLoaded = 3
}

export interface IOfficeImageStyleProps {
  /**
   * Accept theme prop.
   */
  theme: ITheme;

  /**
   * Accept custom classNames
   */
  className?: string;

  /**
   * If true, the image frame will expand to fill its parent container.
   */
  maximizeFrame?: boolean;

  /**
   * If true, the image is loaded
   */
  isLoaded?: boolean;

  /**
   * If true, fades the image in when loaded.
   * @defaultvalue true
   */
  shouldFadeIn?: boolean;

  /**
   * If true, the image starts as visible and is hidden on error. Otherwise, the image is hidden until
   * it is successfully loaded. This disables shouldFadeIn.
   * @defaultvalue false;
   */
  shouldStartVisible?: boolean;

  /**
   * If true the image is coverStyle landscape instead of portrait
   */
  isLandscape?: boolean;

  /**
   * ImageFit booleans for center, cover, contain, centerCover, none
   */
  isCenter?: boolean;
  isContain?: boolean;
  isCover?: boolean;
  isCenterCover?: boolean;
  isNone?: boolean;

  /**
   * if true image load is in error
   */
  isError?: boolean;

  /**
   * if true, imageFit is undefined
   */
  isNotImageFit?: boolean;

  /**
   * Image width valye
   */
  width?: number | string;

  /**
   * Image height valye
   */
  height?: number | string;
}

export interface IOfficeImageStyles {
  /**
   * Style set for the root div element.
   */
  root: IStyle;
  /**
   * Style set for the img element.
   */
  image: IStyle;
}
