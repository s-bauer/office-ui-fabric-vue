import { IOfficeChoiceGroupOption, IOfficeChoiceGroupProps } from "./OfficeChoiceGroup.types";
import { Vue } from "vue-property-decorator";
export default class OfficeChoiceGroup extends Vue implements IOfficeChoiceGroupProps {
    options?: IOfficeChoiceGroupOption[];
    disabled: boolean;
    required: boolean;
    label?: string;
    name?: string;
    defaultSelectedKey?: string | number;
    selectedKey?: string | number;
    private keyFocused?;
    private keyChecked?;
    private labelId?;
    private id?;
    private onChange;
    private getKeyChecked;
    private readonly keyDefaultFocusable;
    private readonly classNames;
}
