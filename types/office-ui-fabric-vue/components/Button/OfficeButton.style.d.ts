import { ITheme } from "@styling/interfaces";
import { IOfficeButtonStyles } from "./OfficeButton.types";
export declare const getStyles: (theme: ITheme, customStyles?: IOfficeButtonStyles | undefined, primary?: boolean | undefined) => IOfficeButtonStyles;
export declare const getBaseStyles: (theme: ITheme) => IOfficeButtonStyles;
export declare function standardStyles(theme: ITheme): IOfficeButtonStyles;
export declare function primaryStyles(theme: ITheme): IOfficeButtonStyles;
