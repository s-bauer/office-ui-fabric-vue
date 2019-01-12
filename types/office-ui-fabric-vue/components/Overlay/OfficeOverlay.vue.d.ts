import { Vue } from "vue-property-decorator";
export default class OfficeOverlay extends Vue {
    private isDarkThemed;
    private visible;
    private disabledScrollClassName;
    readonly classNames: import("@uifabric/merge-styles").IProcessedStyleSet<import("./OfficeOverlay.types").IOfficeOverlayStyles>;
    private watchVisible;
    private disableIosBodyScroll;
    private disableBodyScroll;
    private enableBodyScroll;
}
