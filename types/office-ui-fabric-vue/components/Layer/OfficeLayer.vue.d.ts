import { Vue } from "vue-property-decorator";
export default class OfficeLayer extends Vue {
    private filterEvents;
    private hostId?;
    private layerId;
    private layerVue?;
    private layerElement?;
    private currentHost?;
    private beforeMount;
    private mounted;
    private beforeDestroy;
    private readonly classNames;
    private filterEvent;
    private createLayerElement;
    private getHost;
    private createBodyVue;
}
