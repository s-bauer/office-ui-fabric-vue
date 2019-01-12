import { ITheme } from "../../../styling";
import { IStyle, IStyleFunctionOrObject } from "@uifabric/merge-styles";
export interface IOfficeFabricProps {
    theme?: ITheme;
    styles?: IStyleFunctionOrObject<IOfficeFabricStyleProps, IOfficeFabricStyles>;
}
export interface IOfficeFabricStyleProps extends IOfficeFabricProps {
    theme: ITheme;
    isFocusVisible: boolean;
}
export interface IOfficeFabricStyles {
    root: IStyle;
}
