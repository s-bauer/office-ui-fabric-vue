
// Please keep alphabetized
import {IStyle} from "@uifabric/merge-styles";

export enum IconType {
  /**
   * Render using the fabric icon font.
   */
  default = 0,

  /**
   * Render using an image, where imageProps would be used.
   */
  image = 1
}

export interface IOfficeIconStyleProps {
  className?: string;
  iconClassName?: string;
  isPlaceholder: boolean;
  isImage: boolean;
  styles?: Partial<IOfficeIconStyles>;
}

export interface IOfficeIconStyles {
  root?: IStyle;
}
