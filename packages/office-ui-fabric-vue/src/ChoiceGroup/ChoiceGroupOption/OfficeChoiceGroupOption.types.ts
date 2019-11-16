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
import {IOfficeChoiceGroupOption} from "../OfficeChoiceGroup.types";
import {IStyle} from "@uifabric/merge-styles";

export interface IOfficeChoiceGroupOptionProps extends IOfficeChoiceGroupOption {
  /**
   * Indicates if the ChoiceGroupOption should appear focused, visually
   */
  focused?: boolean;

  /**
   * If true, it specifies that an option must be selected in the ChoiceGroup before submitting the form
   */
  required?: boolean;

  /**
   * This value is used to group each ChoiceGroupOption into the same logical ChoiceGroup
   */
  name?: string;
}

export interface IOfficeChoiceGroupOptionStyleProps {
  theme: ITheme;
  hasIcon?: boolean;
  hasImage?: boolean;
  checked?: boolean;
  disabled?: boolean;
  imageIsLarge?: boolean;
  focused?: boolean;
}

export interface IOfficeChoiceGroupOptionStyles {
  root?: IStyle;
  choiceFieldWrapper?: IStyle;
  input?: IStyle;
  field?: IStyle;
  innerField?: IStyle;
  imageWrapper?: IStyle;
  selectedImageWrapper?: IStyle;
  iconWrapper?: IStyle;
  labelWrapper?: IStyle;
}
