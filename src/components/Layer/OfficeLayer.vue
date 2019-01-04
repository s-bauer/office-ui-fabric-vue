<template>
    <span class="ms-Layer" ref="root">
    </span>
</template>

<script lang="ts">

    import OfficeFabric from "@/components/Fabric/OfficeFabric.vue";
    import {getStyles} from "@/components/Layer/OfficeLayer.styles";
    import {loadTheme} from "@/styling";
    import {getDocument, setPortalAttribute} from "@/utility/dom";
    import {getId} from "@/utility/object";
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

        private mounted() {
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

        private get classNames() {
            return mergeStyleSets(getStyles({
                theme: loadTheme({}),
                isNotHost: true,
                className: this.layerId
            }));
        }

        private beforeDestroy() {
            this.layerVue!.$destroy();
            const doc = getDocument();
            if (!doc)
                return;

            const element = doc!.querySelector(`.${this.layerId}`);
            if (element)
                element!.remove();
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

            const host = document.body;
            if (!host)
                return;

            if (!this.layerElement) {
                const layerDiv = document!.createElement("div");
                layerDiv.setAttribute("id", this.layerId);
                setPortalAttribute(layerDiv);
                host!.appendChild(layerDiv);

                this.layerElement = layerDiv;
            }

            return this.layerElement;
        }


    }

</script>
