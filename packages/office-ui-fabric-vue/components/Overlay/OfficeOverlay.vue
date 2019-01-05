<template>
    <div :class="classNames.root">
        <slot/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop, Watch} from "vue-property-decorator";
    import OfficeLabel from "@components/Label/OfficeLabel.vue";
    import OfficeIcon from "@components/Icon/OfficeIcon.vue";
    import {mergeStyles, mergeStyleSets} from "@uifabric/merge-styles";
    import {getStyles} from "./OfficeOverlay.style";
    import {createTheme} from "@styling/styles";
    import {getDocument} from "@utilities/dom";

    @Component({
        components: {OfficeLabel, OfficeIcon}
    })
    export default class OfficeOverlay extends Vue {
        @Prop({type: Boolean, default: false}) private isDarkThemed!: boolean;
        @Prop({type: Boolean, default: false}) private visible!: boolean;

        private disabledScrollClassName = mergeStyles({
            overflow: "hidden !important" as "hidden"
        });

        public get classNames() {
            return mergeStyleSets(getStyles({
                isDark: this.isDarkThemed,
                isNone: !this.visible,
                theme: createTheme({}),
            }));
        }

        @Watch("visible", {immediate: true})
        private watchVisible(newValue: boolean) {
            newValue
                ? this.disableBodyScroll()
                : this.enableBodyScroll();
        }

        private disableIosBodyScroll(event: TouchEvent) {
            event.preventDefault();
        }

        private disableBodyScroll() {
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
