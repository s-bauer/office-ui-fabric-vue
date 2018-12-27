import {IOfficeIconStyleProps, IOfficeIconStyles} from "@/components/Icon/OfficeIcon.types";

export const getStyles = (props: IOfficeIconStyleProps): IOfficeIconStyles => {
  const { className, iconClassName, isPlaceholder, isImage, styles } = props;

  return {
    root: [
      iconClassName,
      className,
      isImage && "ms-Icon-imageContainer",
      isPlaceholder && "ms-Icon-placeHolder",
      {
        display: "inline-block"
      },
      isPlaceholder && {
        width: "1em"
      },
      isImage && {
        overflow: "hidden"
      },
      styles && styles.root
    ]
  };
};
