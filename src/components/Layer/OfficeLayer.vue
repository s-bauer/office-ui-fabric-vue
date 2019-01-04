<template>
    <span class="ms-Layer" ref="root">
    </span>
</template>

<script lang="ts">

    import OfficeFabric from "@/components/Fabric/OfficeFabric.vue";
    import {getStyles} from "@/components/Layer/OfficeLayer.styles";
    import {loadTheme} from "@/styling";
    import {getDocument} from "@/utility/dom";
    import {getId} from "@/utility/object";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {Component, Vue} from "vue-property-decorator";
    import VueNS from "vue";

    @Component
    export default class OfficeLayer extends Vue {
        private hasMounted: boolean = false;

        private layerId: string = getId("Layer");
        private layerVue?: VueNS;

        private mounted() {
            const classNames = mergeStyleSets(getStyles({
                theme: loadTheme({}),
                isNotHost: true,
                className: this.layerId
            }));

            const doc = getDocument();
            const layerDiv = doc!.createElement("div");
            layerDiv.setAttribute("id", this.layerId);
            doc!.body!.appendChild(layerDiv);

            const self = this;
            this.layerVue = new VueNS({
                render(createElement) {
                    const content = !self.$slots.default
                        ? createElement("OfficeFabric")
                        : createElement("OfficeFabric", {attrs: {class: classNames.content}}, self.$slots.default);

                    return createElement("div", {attrs: {class: classNames.root}}, [content]);

                },
                components: {OfficeFabric}
            });
            this.layerVue!.$mount(`#${this.layerId}`);
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
    }

</script>
