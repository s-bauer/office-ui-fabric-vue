import {buildClassMap} from "@/styling/utilities/buildClassMap";
import {AnimationStyles} from "../styles";
import {IAnimationStyles} from "@/styling";

export const AnimationClassNames: { [key in keyof IAnimationStyles]?: string } = buildClassMap(AnimationStyles);
