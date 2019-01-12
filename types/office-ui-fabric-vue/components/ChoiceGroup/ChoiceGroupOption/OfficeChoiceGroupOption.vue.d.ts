import { Vue } from "vue-property-decorator";
export default class OfficeChoiceGroupOption extends Vue {
    private focused;
    private required;
    private disabled;
    private checked;
    private name;
    private text;
    private id;
    private labelId;
    private imageSrc?;
    private iconProps?;
    private imageSize?;
    private readonly classNames;
}
