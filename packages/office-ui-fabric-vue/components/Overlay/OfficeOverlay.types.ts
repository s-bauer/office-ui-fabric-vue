import {IStyle, IStyleFunctionOrObject} from "@uifabric/merge-styles";
import {ITheme} from "../../../styling";

export interface IOfficeOverlayProps {
    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;

    /**
     * Whether to use the dark-themed overlay.
     * @defaultvalue false
     */
    isDarkThemed?: boolean;

    onClick?: () => void;
}

export interface IOfficeOverlayStyleProps {
    /**
     * Accept theme prop.
     */
    theme: ITheme;

    /**
     * Is overlay visible
     */
    isNone?: boolean;

    /**
     * Is overlay dark themed
     */
    isDark?: boolean;
}

export interface IOfficeOverlayStyles {
    /**
     * Style for the root element.
     */
    root: IStyle;
}
