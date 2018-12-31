<template>
    <div :class="classNames.root">
        <OfficeLabel v-if="!!label" :for="id" :class="classNames.label">{{ label }}</OfficeLabel>
        <div :class="classNames.container">
            <button :class="classNames.pill"
                    :disabled="disabled"
                    :id="id"
                    @click="onClick"
                    role="switch"
                    type="button">
                <div :class="classNames.thumb"></div>
            </button>
            <OfficeLabel v-if="!!stateText" :class="classNames.text">{{ stateText }}</OfficeLabel>
        </div>
    </div>
</template>

<script lang="ts">
    import OfficeLabel from "@/components/Label/OfficeLabel.vue";
    import {getStyles} from "@/components/Toggle/OfficeToggle.styles";
    import {IOfficeToggleProps} from "@/components/Toggle/OfficeToggle.types";
    import {loadTheme} from "@/styling";
    import {getId} from "@/utility/object";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {Component, Model, Prop, Vue, Watch} from "vue-property-decorator";

    @Component({
        components: {
            OfficeLabel
        }
    })
    export default class OfficeToggle extends Vue implements IOfficeToggleProps {
        @Prop({type: Boolean, default: false}) public disabled!: boolean;
        @Model("change", {type: Boolean, default: false}) public checked!: boolean;
        @Prop({type: String}) public label?: string;
        @Prop({type: String}) public onText?: string;
        @Prop({type: String}) public offText?: string;

        private id = getId("Toggle");

        private get stateText() {
            return this.checked ? this.onText : this.offText;
        }

        private get classNames() {
            return mergeStyleSets(getStyles({
                theme: loadTheme({}),
                checked: this.checked,
                disabled: this.disabled
            }));
        }

        private onClick() {
            if (!this.disabled) {
                this.$emit("change", !this.checked);
                this.$emit("click");
            }
        }
    }
</script>
