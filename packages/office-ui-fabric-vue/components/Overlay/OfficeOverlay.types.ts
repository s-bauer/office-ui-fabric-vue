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

import {IStyle, IStyleFunctionOrObject} from "@uifabric/merge-styles";
import {ITheme} from "../../../styling";

export interface IOfficeOverlayProps {
    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;

    /**
     * Whether to use the dark-themed overlay.
     * @defaultvalue false
     */
    isDarkThemed?: boolean;

    onClick?: () => void;
}

export interface IOfficeOverlayStyleProps {
    /**
     * Accept theme prop.
     */
    theme: ITheme;

    /**
     * Is overlay visible
     */
    isNone?: boolean;

    /**
     * Is overlay dark themed
     */
    isDark?: boolean;
}

export interface IOfficeOverlayStyles {
    /**
     * Style for the root element.
     */
    root: IStyle;
}
