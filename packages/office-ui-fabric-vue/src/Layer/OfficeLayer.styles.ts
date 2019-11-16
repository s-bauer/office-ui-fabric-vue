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

import {IOfficeLayerStyleProps, IOfficeLayerStyles} from "./OfficeLayer.types";
import {ZIndexes} from "@s-bauer/uifabric-styling";
import {getGlobalClassNames} from "@s-bauer/uifabric-styling";

const GlobalClassNames = {
  root: "ms-Layer",
  rootNoHost: "ms-Layer--fixed",
  content: "ms-Layer-content"
};

export const getStyles = (props: IOfficeLayerStyleProps): IOfficeLayerStyles => {
  const { className, isNotHost, theme } = props;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      classNames.root,
      theme.fonts.medium,
      isNotHost && [
        classNames.rootNoHost,
        {
          position: "fixed",
          zIndex: ZIndexes.Layer,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          visibility: "hidden"
        }
      ],
      className
    ],
    content: [
      classNames.content,
      {
        visibility: "visible"
      }
    ]
  };
};
