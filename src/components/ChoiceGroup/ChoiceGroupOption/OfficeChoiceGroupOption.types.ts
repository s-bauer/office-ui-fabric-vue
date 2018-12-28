import {IOfficeChoiceGroupOption} from "@/components/ChoiceGroup/OfficeChoiceGroup.types";
import {ITheme} from "@/styling";
import {IStyle} from "@uifabric/merge-styles";

export interface IOfficeChoiceGroupOptionProps extends IOfficeChoiceGroupOption {
  /**
   * Indicates if the ChoiceGroupOption should appear focused, visually
   */
  focused?: boolean;

  /**
   * If true, it specifies that an option must be selected in the ChoiceGroup before submitting the form
   */
  required?: boolean;

  /**
   * This value is used to group each ChoiceGroupOption into the same logical ChoiceGroup
   */
  name?: string;
}

export interface IOfficeChoiceGroupOptionStyleProps {
  theme: ITheme;
  hasIcon?: boolean;
  hasImage?: boolean;
  checked?: boolean;
  disabled?: boolean;
  imageIsLarge?: boolean;
  focused?: boolean;
}

export interface IOfficeChoiceGroupOptionStyles {
  root?: IStyle;
  choiceFieldWrapper?: IStyle;
  input?: IStyle;
  field?: IStyle;
  innerField?: IStyle;
  imageWrapper?: IStyle;
  selectedImageWrapper?: IStyle;
  iconWrapper?: IStyle;
  labelWrapper?: IStyle;
}
