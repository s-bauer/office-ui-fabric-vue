<template>
    <div :class="classNames.root">
        <slot/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";
    import OfficeLabel from "@/components/Label/OfficeLabel.vue";
    import OfficeIcon from "@/components/Icon/OfficeIcon.vue";
    import {IStyleFunctionOrObject, mergeStyles, mergeStyleSets} from "@uifabric/merge-styles";
    import {getStyles} from "@/components/Overlay/OfficeOverlay.style";
    import {createTheme} from "@/styling";
    import {IOfficeOverlayStyleProps, IOfficeOverlayStyles} from "@/components/Overlay/OfficeOverlay.types";
    import {getDocument} from "@/utility/dom";


    @Component({
        components: {OfficeLabel, OfficeIcon}
    })
    export default class OfficeOverlay extends Vue {
        @Prop({type: Object}) private styles?: IStyleFunctionOrObject<IOfficeOverlayStyleProps, IOfficeOverlayStyles>;
        @Prop({type: Boolean, default: undefined}) private className!: string;
        @Prop({type: Boolean, default: false}) private isDarkThemed!: boolean;
        @Prop({type: Boolean, default: false}) private isVisible!: boolean;

        private disabledScrollClassName = mergeStyles({
            overflow: "hidden !important" as "hidden"
        });


        public get classNames() {
            return mergeStyleSets(getStyles({
                className: this.className,
                isDark: this.isDarkThemed,
                isNone: this.isVisible,
                theme: createTheme({}),
            }));
        }

        public mounted() {
            this.disableBodyScroll();
        }

        public beforeDestroy() {
            this.enableBodyScroll();
        }

        // noinspection UnterminatedStatementJS
        private disableIosBodyScroll = (event: TouchEvent) => {
            event.preventDefault();
        }

        private disableBodyScroll(): void {
            const doc = getDocument();
            if (doc && doc.body) {
                doc.body.classList.add(this.disabledScrollClassName);
                doc.body.addEventListener("touchmove", this.disableIosBodyScroll, {passive: false, capture: false});
            }
        }

        private enableBodyScroll() {
            const doc = getDocument();
            if (doc && doc.body) {
                doc.body.classList.remove(this.disabledScrollClassName);
                doc.body.removeEventListener("touchmove", this.disableIosBodyScroll);
            }
        }
    }
</script>
