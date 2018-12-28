import {IOfficeIconProps} from "@/components/Icon/OfficeIcon.types";
import {ITheme} from "@/styling";
import {IStyle} from "@uifabric/merge-styles";

export interface IOfficeChoiceGroupProps {
  /**
   * The options for the choice group.
   */
  options?: IOfficeChoiceGroupOption[];

  /**
   * The key of the option that will be initially checked.
   */
  defaultSelectedKey?: string | number;

  /**
   * Descriptive label for the choice group.
   */
  label?: string;
}

export interface IOfficeChoiceGroupOption {
  /**
   * A required key to uniquely identify the option.
   */
  key: string;

  /**
   * The text string for the option.
   */
  text: string;

  /**
   * The src of image for choice field.
   */
  imageSrc?: string;

  /**
   * The Icon component props for choice field
   */
  iconProps?: IOfficeIconProps;

  /**
   * The alt of image for choice field. Defaults to '' if not set.
   */
  imageAlt?: string;

  /**
   * The src of image for choice field which is selected.
   */
  selectedImageSrc?: string;

  /**
   * The width and height of the image in px for choice field.
   * @defaultvalue \{ width: 32, height: 32 \}
   */
  imageSize?: { width: number; height: number };

  /**
   * Whether or not the option is disabled.
   */
  disabled?: boolean;

  /**
   * Whether or not the option is checked.
   */
  checked?: boolean;
}

export interface IOfficeChoiceGroupStyleProps {
  theme: ITheme;
  className?: string;
  optionsContainIconOrImage?: boolean;
}

export interface IOfficeChoiceGroupStyles {
  applicationRole?: IStyle;
  root?: IStyle;
  label?: IStyle;
  flexContainer?: IStyle;
}
