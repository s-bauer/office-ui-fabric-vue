<template>
    <span class="ms-Layer" ref="root">
    </span>
</template>

<script lang="ts">
    import OfficeFabric from "@components/Fabric/OfficeFabric.vue";
    import {registerLayer, unregisterLayer} from "./OfficeLayer.notification";
    import {getStyles} from "./OfficeLayer.styles";
    import {loadTheme} from "@styling/styles";
    import {getDocument, setPortalAttribute} from "@utilities/dom";
    import {getId} from "@utilities/object";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {Component, Prop, Vue} from "vue-property-decorator";
    import VueNS from "vue";

    @Component
    export default class OfficeLayer extends Vue {
        @Prop({type: Boolean, default: false}) private filterEvents!: boolean;
        @Prop({type: String, default: undefined}) private hostId?: string;

        private layerId: string = getId("Layer");
        private layerVue?: VueNS;
        private layerElement?: Element | null;
        private currentHost?: HTMLElement | null;

        private beforeMount() {
            if (this.hostId)
                registerLayer(this.hostId, this);
        }

        private mounted() {
            this.createBodyVue();
        }

        private beforeDestroy() {
            if (this.hostId)
                unregisterLayer(this.hostId, this);

            if (this.layerVue)
                this.layerVue!.$destroy();

            const doc = getDocument();
            if (doc) {
                const element = doc!.querySelector(`.${this.layerId}`);
                if (element)
                    element!.remove();
            }
        }

        private get classNames() {
            return mergeStyleSets(getStyles({
                theme: loadTheme({}),
                isNotHost: !this.hostId,
                className: this.layerId
            }));
        }

        private filterEvent(ev: Event) {
            if (!this.filterEvents)
                return;

            if (ev.eventPhase === Event.BUBBLING_PHASE && ev.type !== "mouseenter" && ev.type !== "mouseleave") {
                ev.stopPropagation();
            }
        }

        private createLayerElement() {
            const document = getDocument();
            if (!document)
                return;

            const host = this.getHost();
            if (!host)
                return;

            if (this.currentHost !== host && this.layerElement) {
                if (this.layerVue)
                    this.layerVue!.$destroy();

                const element = document!.querySelector(`.${this.layerId}`);
                if (element)
                    element!.remove();
            }

            if (!this.layerElement) {
                const layerDiv = document!.createElement("div");
                layerDiv.setAttribute("id", this.layerId);
                setPortalAttribute(layerDiv);
                host!.appendChild(layerDiv);

                this.layerElement = layerDiv;
            }

            return this.layerElement;
        }

        private getHost(): HTMLElement | null {
            const document = getDocument();
            if (!document)
                return null;

            return this.hostId
                ? document.getElementById(`LayerHost-${this.hostId}`)
                : document.body;
        }

        private createBodyVue() {
            this.createLayerElement();
            const self = this;
            this.layerVue = new VueNS({
                render(createElement) {
                    const fabricOptions = {
                        attrs: {class: self.classNames.content}
                    };

                    const rootOptions = {
                        on: {
                            click: self.filterEvent,
                            contextmenu: self.filterEvent,
                            doubleclick: self.filterEvent,
                            drag: self.filterEvent,
                            dragend: self.filterEvent,
                            dragenter: self.filterEvent,
                            dragexit: self.filterEvent,
                            dragleave: self.filterEvent,
                            dragover: self.filterEvent,
                            dragstart: self.filterEvent,
                            drop: self.filterEvent,
                            mousedown: self.filterEvent,
                            mouseenter: self.filterEvent,
                            mouseleave: self.filterEvent,
                            mousemove: self.filterEvent,
                            mouseover: self.filterEvent,
                            mouseout: self.filterEvent,
                            mouseup: self.filterEvent,
                            keydown: self.filterEvent,
                            keypress: self.filterEvent,
                            keyup: self.filterEvent,
                            focus: self.filterEvent,
                            blur: self.filterEvent,
                            change: self.filterEvent,
                            input: self.filterEvent,
                            invalid: self.filterEvent,
                            submit: self.filterEvent
                        },
                        attrs: {class: self.classNames.root}
                    };

                    const content = !self.$slots.default
                        ? createElement("OfficeFabric")
                        : createElement("OfficeFabric", fabricOptions, self.$slots.default);

                    return createElement("div", rootOptions, [content]);
                },
                components: {OfficeFabric}
            });
            this.layerVue!.$mount(`#${this.layerId}`);
        }
    }

</script>
