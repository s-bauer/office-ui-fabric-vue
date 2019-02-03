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

import {AnimationVariables} from "@styling/styles";
import {getGlobalClassNames} from "@styling/styles/getGlobalClassNames";
import {IOfficeModalStyleProps, IOfficeModalStyles} from "./OfficeModal.types";

export const animationDuration = AnimationVariables.durationValue2;

const globalClassNames = {
    root: "ms-Modal",
    main: "ms-Dialog-main",
    scrollableContent: "ms-Modal-scrollableContent",
    isOpen: "is-open"
};

export const getStyles = (props: IOfficeModalStyleProps): IOfficeModalStyles => {
    const {
        topOffsetFixed,
        hasBeenOpened,
        isOpen,
        isVisible,
        modalRectangleTop,
        scrollableContentClassName,
        containerClassName,
        className,
        theme
    } = props;

    const {palette} = theme;

    const classNames = getGlobalClassNames(globalClassNames, theme);


    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                backgroundColor: "transparent",
                position: "fixed",
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                pointerEvents: "none",
                transition: `opacity ${animationDuration}`
            },
            topOffsetFixed &&
            hasBeenOpened && {
                alignItems: "flex-start"
            },
            isOpen && classNames.isOpen,
            isVisible && {
                opacity: 1,
                pointerEvents: "auto"
            },
            className
        ],
        /**
         *
         */
        main: [
            classNames.main,
            {
                boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.4)",
                backgroundColor: palette.white,
                boxSizing: "border-box",
                position: "relative",
                textAlign: "left",
                outline: "3px solid transparent",
                maxHeight: "100%",
                overflowY: "auto"
            },
            topOffsetFixed &&
            hasBeenOpened && {
                top: modalRectangleTop
            },
            containerClassName
        ],
        scrollableContent: [
            classNames.scrollableContent,
            {
                overflowY: "auto",
                flexGrow: 1
            },
            scrollableContentClassName
        ]
    };
};
