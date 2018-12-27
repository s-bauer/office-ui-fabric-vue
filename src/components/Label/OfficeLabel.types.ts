import {ITheme} from "@/styling";
import {IStyle, IStyleFunctionOrObject} from "@uifabric/merge-styles";

export interface ILabelProps {

  /**
   * Whether the associated form field is required or not
   * @defaultvalue false
   */
  required?: boolean;

  /**
   * Renders the label as disabled.
   */
  disabled?: boolean;

  /**
   * Theme provided by HOC.
   */
  theme?: ITheme;

  /**
   * Styles for the label.
   */
  styles?: IStyleFunctionOrObject<IOfficeLabelStyleProps, IOfficeLabelStyles>;
}

export interface IOfficeLabelStyles {
  /**
   * Styles for the root element.
   */
  root: IStyle;
}

export interface IOfficeLabelStyleProps {
  theme: ITheme;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}
