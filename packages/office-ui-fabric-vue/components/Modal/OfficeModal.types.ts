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
import {IOfficeLayerProps} from "@components/Layer/OfficeLayer.types";

export interface IOfficeModalProps {
    /**
     * Theme provided by High-Order Component.
     */
    theme?: ITheme;

    /**
     * Whether the dialog is displayed.
     * @defaultvalue false
     */
    isOpen?: boolean;

    /**
     * Whether the overlay is dark themed.
     * @defaultvalue true
     */
    isDarkOverlay?: boolean;
    /**
     * Optional override for root class
     */
    className?: string;
    /**
     * Optional override for container class
     */
    containerClassName?: string;

    /**
     * Optional override for scrollable content class
     */
    scrollableContentClassName?: string;

    /**
     * A callback function for when the Modal is dismissed light dismiss, before the animation completes.
     */
    onDismiss?: () => any;

    /**
     * Props to be passed through to Layer
     */
    layerProps?: IOfficeLayerProps;

    /**
     * Whether the dialog can be light dismissed by clicking outside the dialog (on the overlay).
     * @defaultvalue false
     */
    isBlocking?: boolean;

    /**
     * Whether the modal should have top offset fixed once opened and expand from the bottom only
     * when the content changes dynamically.
     */
    topOffsetFixed?: boolean;
}

export interface IOfficeModalStyleProps {
    /**
     * Accept theme prop.
     */
    theme: ITheme;
    topOffsetFixed?: boolean;
    containerClassName?: string;
    className?: string;

    /**
     * Optional override for scrollable content class
     */
    scrollableContentClassName?: string;
    /** Modal open state. */
    isOpen?: boolean;
    /** Modal visible state. */
    isVisible?: boolean;
    /** Modal has been opened state. */
    hasBeenOpened?: boolean;

    /** Positioning of modal on first render */
    modalRectangleTop?: number;
}


export interface IOfficeModalStyles {
    root: IStyle;
    main: IStyle;
    scrollableContent: IStyle;
}
