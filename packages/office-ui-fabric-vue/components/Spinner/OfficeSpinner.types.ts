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


import {ITheme} from "@styling/interfaces";
import {IStyle} from "@uifabric/merge-styles";

export interface IOfficeSpinnerProps {
  /**
   * The size of Spinner to render. \{ extraSmall, small, medium, large \}
   * @defaultvalue SpinnerType.medium
   */
  size?: SpinnerSize;

  /**
   * The label to show next to the Spinner. Label updates will be announced to the screen readers.
   * Use ariaLive to control politeness level.
   */
  label?: string;

  /**
   * The position of the label in regards of the spinner animation.
   * @defaultvalue SpinnerLabelPosition.bottom
   */
  labelPosition?: SpinnerLabelPosition;
}

/**
 * Possible variations of the spinner circle size.
 */
export enum SpinnerSize {
  /**
   * 12px Spinner diameter
   */
  xSmall = 0,

  /**
   * 16px Spinner diameter
   */
  small = 1,

  /**
   * 20px Spinner diameter
   */
  medium = 2,

  /**
   * 28px Spinner diameter
   */
  large = 3
}

/**
 * Possible locations of the label in regards to the spinner
 * @defaultvalue bottom
 */
export type SpinnerLabelPosition = "top" | "right" | "bottom" | "left";

/**
 * The props needed to construct styles. This represents the simplified set of immutable things which control the class names.
 */
export interface IOfficeSpinnerStyleProps {
  /** Theme provided by High-Order Component. */
  theme: ITheme;

  /** Size of the spinner animation. */
  size?: SpinnerSize;

  /** CSS class name for the component attached to the root stylable area. */
  className?: string;

  /** Position of the label in regards to the spinner animation. */
  labelPosition?: SpinnerLabelPosition;
}

/**
 * Represents the stylable areas of the control.
 */
export interface IOfficeSpinnerStyles {
  /** Styles for the root element. Refers to the wrapper containing both the circle and the label. */
  root?: IStyle;

  /** Styles for the spinner circle animation. */
  circle?: IStyle;

  /** Styles for the label accompanying the circle. */
  label?: IStyle;

  /** Styles for the hidden helper element to aid with screen readers. */
  screenReaderText?: IStyle;
}
