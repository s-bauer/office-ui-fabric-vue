import {IFontStyles} from "@/styling";
import {buildClassMap} from "@/styling/utilities/buildClassMap";
import {DefaultFontStyles} from "../styles";

export const FontClassNames: { [key in keyof IFontStyles]?: string } = buildClassMap(DefaultFontStyles);
