import {ITheme} from "@/styling";
import {IStyle} from "@uifabric/merge-styles";

export interface IOfficeLinkHTMLAttributes<T> {
  // Shared
  type?: string;

  // Anchor
  download?: any;
  href?: string;
  hrefLang?: string;
  media?: string;
  rel?: string;
  target?: string;

  // Button
  autoFocus?: boolean;
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;
  name?: string;
  value?: string | string[] | number;
}

export interface IOfficeLinkProps {
  disabled?: boolean;
  href?: string;
}

export interface IOfficeLinkStyleProps {
  className?: string;
  isButton?: boolean;
  isDisabled?: boolean;
  theme: ITheme;
}

export interface IOfficeLinkStyles {
  root: IStyle;
}
