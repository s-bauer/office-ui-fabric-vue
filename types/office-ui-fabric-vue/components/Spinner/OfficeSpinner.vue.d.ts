import { SpinnerLabelPosition, SpinnerSize } from "./OfficeSpinner.types";
import { Vue } from "vue-property-decorator";
export default class OfficeSpinner extends Vue {
    labelPosition?: SpinnerLabelPosition;
    label?: string;
    size?: SpinnerSize;
    private readonly classNames;
}
