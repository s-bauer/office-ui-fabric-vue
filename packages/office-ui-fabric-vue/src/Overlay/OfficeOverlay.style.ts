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

import { HighContrastSelector } from "@s-bauer/uifabric-styling";
import {getGlobalClassNames} from "@s-bauer/uifabric-styling";
import {IOfficeOverlayStyleProps, IOfficeOverlayStyles} from "./OfficeOverlay.types";

const GlobalClassNames = {
    root: "ms-Overlay",
    rootDark: "ms-Overlay--dark"
};

export const getStyles = (props: IOfficeOverlayStyleProps): IOfficeOverlayStyles => {
    const { theme, isNone, isDark } = props;

    const { palette } = theme;

    const classNames = getGlobalClassNames(GlobalClassNames, theme);

    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                backgroundColor: palette.whiteTranslucent40,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                position: "absolute",

                selectors: {
                    [HighContrastSelector]: {
                        border: "1px solid WindowText"
                    }
                }
            },

            isNone && {
                visibility: "hidden"
            },

            isDark && [
                classNames.rootDark,
                {
                    backgroundColor: palette.blackTranslucent40
                }
            ]
        ]
    };
};
