import {IOfficeLabelStyleProps} from "@/components/Label/OfficeLabel.types";
import {ITheme} from "@/styling";
import {IStyle, IStyleFunctionOrObject} from "@uifabric/merge-styles";

export enum RectangleEdge {
  top = 1,
  bottom = -1,
  left = 2,
  right = -2
}

export interface IOfficeDropdownStyleProps {
  theme?: ITheme;
  required: boolean;
  disabled: boolean;
  className?: string;
  hasError: boolean;
  isOpen: boolean;
  isRenderingPlaceholder: boolean;
  panelClassName?: string;
  calloutClassName?: string;
  calloutRenderEdge?: RectangleEdge;
}

export interface IOfficeDropdownStyles {
  root: IStyle;
  label: IStyle;
  dropdown: IStyle;
  title: IStyle;
  caretDownWrapper: IStyle;
  caretDown: IStyle;
  errorMessage: IStyle;
  dropdownItemsWrapper: IStyle;
  dropdownItems: IStyle;
  dropdownItem: IStyle;
  dropdownItemSelected: IStyle;
  dropdownItemDisabled: IStyle;
  dropdownItemSelectedAndDisabled: IStyle;
  dropdownOptionText: IStyle;
  dropdownDivider: IStyle;
  dropdownItemHeader: IStyle;
  panel: IStyle;
  callout: IStyle;
  subComponentStyles: IDropdownSubComponentStyles;
}

export interface IDropdownSubComponentStyles {
  /** Refers to the primary label for the Dropdown. */
  label: IStyleFunctionOrObject<IOfficeLabelStyleProps, any>;
}
