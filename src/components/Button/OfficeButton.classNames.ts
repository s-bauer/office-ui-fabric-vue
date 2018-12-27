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

import {IOfficeButtonStyles} from "@/components/Button/OfficeButton.types";
import {ITheme} from "@/styling";
import {getGlobalClassNames} from "@/styling/styles/getGlobalClassNames";
import {memoizeFunction} from "@/utility/memoize";
import {mergeStyleSets} from "@uifabric/merge-styles";

export interface IButtonClassNames {
  root?: string;
  flexContainer?: string;
  textContainer?: string;
  icon?: string;
  label?: string;
  menuIcon?: string;
  description?: string;
  screenReaderText?: string;
}

const GlobalClassNames = {
  msButton: "ms-Button",
  msButtonIcon: "ms-Button-icon",
  msButtonMenuIcon: "ms-Button-menuIcon",
  msButtonLabel: "ms-Button-label",
  msButtonDescription: "ms-Button-description",
  msButtonScreenReaderText: "ms-Button-screenReaderText",
  msButtonFlexContainer: "ms-Button-flexContainer",
  msButtonTextContainer: "ms-Button-textContainer"
};

export const getBaseButtonClassNames = memoizeFunction(
  (
    theme: ITheme,
    styles: IOfficeButtonStyles,
    className: string,
    variantClassName: string,
    iconClassName: string | undefined,
    menuIconClassName: string | undefined,
    disabled: boolean,
    checked: boolean,
    expanded: boolean,
    isSplit: boolean | undefined
  ): IButtonClassNames => {
    const classNames = getGlobalClassNames(GlobalClassNames, theme || {});

    const isExpanded = expanded && !isSplit;
    return mergeStyleSets({
      root: [
        classNames.msButton,
        styles.root,
        variantClassName,
        checked && ["is-checked", styles.rootChecked],
        isExpanded && [
          "is-expanded",
          styles.rootExpanded,
          {
            selectors: {
              [`:hover .${classNames.msButtonIcon}`]: styles.iconExpandedHovered,
              // menuIcon falls back to rootExpandedHovered to support original behavior
              [`:hover .${classNames.msButtonMenuIcon}`]: styles.menuIconExpandedHovered || styles.rootExpandedHovered,
              ":hover": styles.rootExpandedHovered
            }
          }
        ],
        disabled && ["is-disabled", styles.rootDisabled],
        !disabled &&
          !isExpanded &&
          !checked && {
            selectors: {
              ":hover": styles.rootHovered,
              [`:hover .${classNames.msButtonLabel}`]: styles.labelHovered,
              [`:hover .${classNames.msButtonIcon}`]: styles.iconHovered,
              [`:hover .${classNames.msButtonDescription}`]: styles.descriptionHovered,
              [`:hover .${classNames.msButtonMenuIcon}`]: styles.menuIconHovered,
              ":focus": styles.rootFocused,
              ":active": styles.rootPressed,
              [`:active .${classNames.msButtonIcon}`]: styles.iconPressed,
              [`:active .${classNames.msButtonDescription}`]: styles.descriptionPressed,
              [`:active .${classNames.msButtonMenuIcon}`]: styles.menuIconPressed
            }
          },
        disabled && checked && [styles.rootCheckedDisabled],
        !disabled &&
          checked && {
            selectors: {
              ":hover": styles.rootCheckedHovered,
              ":active": styles.rootCheckedPressed
            }
          },
        className
      ],
      flexContainer: [classNames.msButtonFlexContainer, styles.flexContainer],
      textContainer: [classNames.msButtonTextContainer, styles.textContainer],
      icon: [
        classNames.msButtonIcon,
        iconClassName,
        styles.icon,
        isExpanded && styles.iconExpanded,
        checked && styles.iconChecked,
        disabled && styles.iconDisabled
      ],
      label: [classNames.msButtonLabel, styles.label, checked && styles.labelChecked, disabled && styles.labelDisabled],
      menuIcon: [
        classNames.msButtonMenuIcon,
        menuIconClassName,
        styles.menuIcon,
        checked && styles.menuIconChecked,
        disabled && styles.menuIconDisabled,
        !disabled &&
          !isExpanded &&
          !checked && {
            selectors: {
              ":hover": styles.menuIconHovered,
              ":active": styles.menuIconPressed
            }
          },
        isExpanded && ["is-expanded", styles.menuIconExpanded]
      ],
      description: [
        classNames.msButtonDescription,
        styles.description,
        checked && styles.descriptionChecked,
        disabled && styles.descriptionDisabled
      ],
      screenReaderText: [classNames.msButtonScreenReaderText, styles.screenReaderText]
    });
  }
);
