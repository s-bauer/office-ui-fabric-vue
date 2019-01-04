import {IOfficeFabricStyleProps, IOfficeFabricStyles} from "@/components/Fabric/OfficeFabric.types";
import {getGlobalClassNames} from "@/styling/styles/getGlobalClassNames";

const inheritFont = { fontFamily: "inherit" };

const GlobalClassNames = {
  root: "ms-Fabric"
};

export const getStyles = (props: IOfficeFabricStyleProps): IOfficeFabricStyles => {
  const { theme, isFocusVisible } = props;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      classNames.root,
      isFocusVisible && "is-focusVisible",
      theme.fonts.medium,
      {
        color: theme.palette.neutralPrimary,
        selectors: {
          "& button": inheritFont,
          "& input": inheritFont,
          "& textarea": inheritFont,
          ":global(button)": {
            overflow: "visible",
            margin: 0
          }
        }
      },
    ]
  };
};
