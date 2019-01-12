import { IconType, IOfficeIconProps } from "./OfficeIcon.types";
import { Vue } from "vue-property-decorator";
export default class OfficeIcon extends Vue implements IOfficeIconProps {
    iconType: IconType;
    iconName: string;
    private children?;
    private readonly rootType;
    private readonly isImage;
    private readonly classNames;
    private getIconContent;
}
