import { Vue } from "vue-property-decorator";
export default class OfficeImage extends Vue {
    private static svgRegex;
    private loadState;
    private internalCoverStyle;
    private coverStyle;
    private imageFit;
    private width;
    private height;
    private src;
    private alt;
    private maximizeFrame;
    private shouldFadeIn;
    private shouldStartVisible;
    private readonly classNames;
    private onLoad;
    private onError;
    private updated;
    private srcChange;
    private computeCoverStyle;
    private checkImageLoaded;
}
