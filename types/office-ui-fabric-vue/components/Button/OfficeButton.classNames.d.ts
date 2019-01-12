import { ITheme } from "@styling/interfaces";
import { IOfficeButtonStyles } from "./OfficeButton.types";
export interface IButtonClassNames {
    root?: string;
    flexContainer?: string;
    textContainer?: string;
    icon?: string;
    label?: string;
    menuIcon?: string;
    description?: string;
    screenReaderText?: string;
}
export declare const getBaseButtonClassNames: (theme: ITheme, styles: IOfficeButtonStyles, className: string, variantClassName: string, iconClassName: string | undefined, menuIconClassName: string | undefined, disabled: boolean, checked: boolean, expanded: boolean, isSplit: boolean | undefined) => IButtonClassNames;
