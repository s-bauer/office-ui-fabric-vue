import { IOfficeFabricProps, IOfficeFabricStyleProps, IOfficeFabricStyles } from "./OfficeFabric.types";
import { IStyleFunctionOrObject } from "@uifabric/merge-styles";
import { Vue } from "vue-property-decorator";
export default class OfficeFabric extends Vue implements IOfficeFabricProps {
    styles?: IStyleFunctionOrObject<IOfficeFabricStyleProps, IOfficeFabricStyles>;
    private isFocusVisible;
    private mounted;
    private beforeDestroy;
    private readonly classNames;
    private onMouseDown;
    private onKeyDown;
}
