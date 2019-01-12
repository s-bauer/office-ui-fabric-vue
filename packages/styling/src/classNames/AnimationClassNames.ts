import {buildClassMap} from "../utilities/buildClassMap";
import {AnimationStyles} from "../styles";
import {IAnimationStyles} from "..";

export const AnimationClassNames: { [key in keyof IAnimationStyles]?: string } = buildClassMap(AnimationStyles);
