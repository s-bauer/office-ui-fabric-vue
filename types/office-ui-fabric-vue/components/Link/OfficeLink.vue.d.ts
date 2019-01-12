import { IOfficeLinkProps } from "./OfficeLink.types";
import { Vue } from "vue-property-decorator";
export default class OfficeLink extends Vue implements IOfficeLinkProps {
    disabled: boolean;
    href?: string;
    private readonly rootType;
    private readonly rootProps;
    private onClick;
    private readonly classNames;
}
