import { IOfficeToggleProps } from "./OfficeToggle.types";
import { Vue } from "vue-property-decorator";
export default class OfficeToggle extends Vue implements IOfficeToggleProps {
    disabled: boolean;
    checked: boolean;
    label?: string;
    onText?: string;
    offText?: string;
    private id;
    private readonly stateText;
    private readonly classNames;
    private onClick;
}
