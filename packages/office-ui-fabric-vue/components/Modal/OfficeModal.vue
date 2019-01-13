<template>
    <OfficeLayer ref="self" v-if="state.isOpen && state.isVisible" v-bind="layerProps">
        <OfficePopup>
            <div :class="classNames.root">
                <OfficeOverlay @click.native="emitDismiss()" :visible="state.isOpen" :isDarkThemed="isDarkOverlay"/>
                <FocusTrapZone
                        :class="classNames.main"
                        :elementToFocusOnDismiss="elementToFocusOnDismiss"
                        :isClickableOutsideFocusTrap="!isBlocking"
                        :ignoreExternalFocusing="ignoreExternalFocusing"
                        :forceFocusInsideTrap="forceFocusInsideTrap"
                        :firstFocusableSelector="firstFocusableSelector"
                >
                    <div :class="classNames.scrollableContent">
                        <slot/>
                    </div>
                </FocusTrapZone>
            </div>
        </OfficePopup>
    </OfficeLayer>
</template>

<script lang="ts">
    import {Component, Vue, Prop, Emit} from "vue-property-decorator";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {getStyles} from "./OfficeModal.style";
    import {createTheme} from "@styling/styles";
    import {getId} from "@utilities/object";
    import {IOfficeLayerProps} from "@components/Layer/OfficeLayer.types";
    import OfficeOverlay from "@components/Overlay/OfficeOverlay.vue";
    import FocusTrapZone from "@components/FocusTrapZone/FocusTrapZone.vue";
    import OfficeLayer from "@components/Layer/OfficeLayer.vue";
    import OfficePopup from "@components/Popup/OfficePopup.vue";

    @Component({
        components: {OfficePopup, OfficeLayer, OfficeOverlay, FocusTrapZone}
    })
    export default class OfficeModal extends Vue {
        @Prop({type: Boolean, default: false}) private isOpen!: boolean;
        @Prop({type: Boolean, default: true}) private isDarkOverlay!: boolean;
        @Prop({type: Boolean, default: true}) private isBlocking!: boolean;
        @Prop({type: String, default: ""}) private containerClassName!: string;
        @Prop({type: String, default: ""}) private scrollableContentClassName!: string;
        @Prop({type: String, default: ""}) private className!: string;
        @Prop({type: Boolean, default: false}) private topOffsetFixed!: boolean;
        @Prop({type: Object, default: null}) private layerProps!: IOfficeLayerProps;

        @Prop({type: Object}) private elementToFocusOnDismiss?: HTMLElement;
        @Prop({type: [String, Function]}) private firstFocusableSelector?: string | (() => string);
        @Prop({type: Boolean, default: true}) private forceFocusInsideTrap!: boolean;
        @Prop({type: Boolean, default: false}) private ignoreExternalFocusing!: boolean;
        @Prop({type: Boolean, default: false}) private isClickableOutsideFocusTrap!: boolean;


        public emitDismiss() {
            if (!this.isBlocking) {
                this.$emit("onDismiss");
            }
        }

        private get state() {
            let modalRectangleTop: number | undefined;
            if (this.topOffsetFixed) {
                const dialogMain = document.getElementsByClassName("ms-Dialog-main");
                if (dialogMain.length > 0) {
                    modalRectangleTop = dialogMain[0].getBoundingClientRect().top;
                }
            }
            const root = this.$refs.self as HTMLDivElement;
            return {
                id: getId("OfficeModal"),
                isOpen: this.isOpen,
                isVisible: root && root.style && root.style.display === "none" ? false : this.isOpen,
                hasBeenOpened: this.isOpen,
                modalRectangleTop,
                topOffsetFixed: this.topOffsetFixed
            };
        }

        private get classNames() {
            return mergeStyleSets(getStyles({
                isVisible: this.state.isVisible,
                isOpen: this.state.isOpen,
                hasBeenOpened: this.state.hasBeenOpened,
                modalRectangleTop: this.state.modalRectangleTop,
                topOffsetFixed: this.state.topOffsetFixed,
                theme: createTheme({}),
                containerClassName: this.containerClassName,
                scrollableContentClassName: this.scrollableContentClassName,
                className: this.className
            }));
        }


    }
</script>
