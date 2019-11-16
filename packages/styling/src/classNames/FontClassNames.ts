import {IFontStyles} from "..";
import {buildClassMap} from "../utilities/buildClassMap";
import {DefaultFontStyles} from "../styles";

export const FontClassNames: { [key in keyof IFontStyles]?: string } = buildClassMap(DefaultFontStyles);
