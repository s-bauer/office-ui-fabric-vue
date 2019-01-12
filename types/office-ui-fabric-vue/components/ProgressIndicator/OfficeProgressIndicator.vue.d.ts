import { Vue } from "vue-property-decorator";
export default class OfficeProgressIndicator extends Vue {
    indeterminate: boolean;
    progressHidden: boolean;
    barHeight: number;
    percentageComplete?: number;
    private readonly internalPercentage;
    private readonly progressBarStyle;
    private readonly classNames;
}
