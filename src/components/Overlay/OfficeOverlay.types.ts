import {IStyle, IStyleFunctionOrObject} from "@uifabric/merge-styles";
import {ITheme} from "@/styling";

export interface IOfficeOverlayProps {
    /**
     * Gets the component ref.
     */
    componentRef?: object;

    /**
     * Call to provide customized styling that will layer on top of the variant rules
     */
    styles?: IStyleFunctionOrObject<IOfficeOverlayStyleProps, IOfficeOverlayStyles>;

    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;

    /**
     * Additional css class to apply to the Overlay
     * @defaultvalue undefined
     */
    className?: string;

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
     * Accept custom classNames
     */
    className?: string;

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
