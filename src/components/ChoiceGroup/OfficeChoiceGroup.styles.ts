import {IOfficeChoiceGroupStyleProps, IOfficeChoiceGroupStyles} from "@/components/ChoiceGroup/OfficeChoiceGroup.types";
import {getGlobalClassNames} from "@/styling/styles/getGlobalClassNames";

const GlobalClassNames = {
  root: "ms-ChoiceFieldGroup",
  flexContainer: "ms-ChoiceFieldGroup-flexContainer"
};

export const getStyles = (props: IOfficeChoiceGroupStyleProps): IOfficeChoiceGroupStyles => {
  const { className, optionsContainIconOrImage, theme } = props;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    applicationRole: className,
    root: [
      classNames.root,
      theme.fonts.medium,
      {
        display: "block"
      }
    ],
    flexContainer: [
      classNames.flexContainer,
      optionsContainIconOrImage && {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }
    ]
  };
};
