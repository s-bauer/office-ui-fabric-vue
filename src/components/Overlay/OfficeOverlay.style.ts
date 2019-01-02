import { HighContrastSelector } from "@/styling";
import {getGlobalClassNames} from "@/styling/styles/getGlobalClassNames";
import {IOfficeOverlayStyleProps, IOfficeOverlayStyles} from "@/components/Overlay/OfficeOverlay.types";

const GlobalClassNames = {
    root: "ms-Overlay",
    rootDark: "ms-Overlay--dark"
};

export const getStyles = (props: IOfficeOverlayStyleProps): IOfficeOverlayStyles => {
    const { className, theme, isNone, isDark } = props;

    const { palette } = theme;

    const classNames = getGlobalClassNames(GlobalClassNames, theme);

    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                backgroundColor: palette.whiteTranslucent40,
                position: "inherit",

                selectors: {
                    [HighContrastSelector]: {
                        border: "1px solid WindowText"
                    }
                }
            },

            isNone && {
                visibility: "hidden"
            },

            isDark && [
                classNames.rootDark,
                {
                    backgroundColor: palette.blackTranslucent40
                }
            ],
            className
        ]
    };
};
