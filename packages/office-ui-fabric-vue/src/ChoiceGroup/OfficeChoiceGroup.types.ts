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

import {IOfficeIconProps} from "../Icon/OfficeIcon.types";
import {ITheme} from "@s-bauer/uifabric-styling";
import {IStyle} from "@uifabric/merge-styles";

export interface IOfficeChoiceGroupProps {
  /**
   * The options for the choice group.
   */
  options?: IOfficeChoiceGroupOption[];

  /**
   * The key of the option that will be initially checked.
   */
  defaultSelectedKey?: string | number;

  /**
   * Descriptive label for the choice group.
   */
  label?: string;
}

export interface IOfficeChoiceGroupOption {
  /**
   * A required key to uniquely identify the option.
   */
  key: string;

  /**
   * The text string for the option.
   */
  text: string;

  /**
   * The src of image for choice field.
   */
  imageSrc?: string;

  /**
   * The Icon component props for choice field
   */
  iconProps?: IOfficeIconProps;

  /**
   * The alt of image for choice field. Defaults to '' if not set.
   */
  imageAlt?: string;

  /**
   * The src of image for choice field which is selected.
   */
  selectedImageSrc?: string;

  /**
   * The width and height of the image in px for choice field.
   * @defaultvalue \{ width: 32, height: 32 \}
   */
  imageSize?: { width: number; height: number };

  /**
   * Whether or not the option is disabled.
   */
  disabled?: boolean;
}

export interface IOfficeChoiceGroupStyleProps {
  theme: ITheme;
  className?: string;
  optionsContainIconOrImage?: boolean;
}

export interface IOfficeChoiceGroupStyles {
  applicationRole?: IStyle;
  root?: IStyle;
  label?: IStyle;
  flexContainer?: IStyle;
}
