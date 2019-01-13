<template>
    <div ref="self">
        <OfficeLayer v-if="state.isOpen && state.isVisible" v-bind="layerProps">
            <OfficePopup :onDismiss="onDismiss">
                <!--  Todo: make OfficePopup with: -->
                <div :class="classNames.root">
                    <OfficeOverlay :isDarkThemed="isDarkOverlay" @click="isBlocking ? undefined : onDismiss"/>
                    <FocusTrapZone
                            :elementToFocusOnDismiss="elementToFocusOnDismiss"
                            :isClickableOutsideFocusTrap="isClickableOutsideFocusTrap ? isClickableOutsideFocusTrap : !isBlocking"
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
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";
    import OfficeLabel from "@components/Label/OfficeLabel.vue";
    import OfficeIcon from "@components/Icon/OfficeIcon.vue";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {getStyles} from "./OfficeModal.style";
    import {createTheme} from "@styling/styles";
    import {getId} from "@utilities/object";
    import {IOfficeLayerProps} from "@components/Layer/OfficeLayer.types";
    import OfficeOverlay from "@components/Overlay/OfficeOverlay.vue";
    import FocusTrapZone from "@components/FocusTrapZone/FocusTrapZone.vue";
    import OfficeLayer from "@components/Layer/OfficeLayer.vue";
    import OfficePopup from "@components/Popup/OfficePopup.vue";

    export interface IOfficeModalState {
        isOpen?: boolean;
        isVisible?: boolean;
        isVisibleClose?: boolean;
        id?: string;
        hasBeenOpened?: boolean;
        modalRectangleTop?: number;
        topOffsetFixed?: boolean;
    }

    @Component({
        components: {OfficePopup, OfficeLayer, OfficeOverlay, FocusTrapZone}
    })
    export default class OfficeModal extends Vue {
        @Prop({type: Boolean, default: false}) private isOpen!: boolean;
        @Prop({type: Boolean, default: true}) private isDarkOverlay!: boolean;
        @Prop({type: Boolean, default: false}) private isBlocking!: boolean;
        @Prop({type: Boolean, default: false}) private topOffsetFixed!: boolean;
        @Prop({type: Function}) private onDismiss?: () => any;
        @Prop({type: Object, default: null}) private layerProps!: IOfficeLayerProps;

        @Prop({type: Object}) private elementToFocusOnDismiss?: HTMLElement;
        @Prop({type: [String, Function]}) private firstFocusableSelector?: string | (() => string);
        @Prop({type: Boolean, default: true}) private forceFocusInsideTrap!: boolean;
        @Prop({type: Boolean, default: false}) private ignoreExternalFocusing!: boolean;
        @Prop({type: Boolean, default: false}) private isClickableOutsideFocusTrap!: boolean;


        private get state(): IOfficeModalState {
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
            }));
        }


    }
</script>
