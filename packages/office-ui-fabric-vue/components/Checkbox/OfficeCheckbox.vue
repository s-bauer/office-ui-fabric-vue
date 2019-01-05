<template>
    <div>
        <button
                role="checkbox"
                type="button"
                title="TestTitle"
                :id="id"
                :class="classNames.root"
                @click.prevent.stop="onClick"
        >
            <label :class="classNames.label" :for="id">
                <div :class="classNames.checkbox">
                    <OfficeIcon :class="classNames.checkmark" iconName="CheckMark"></OfficeIcon>
                </div>
                <span :class="classNames.text" v-if="label !== undefined">{{ label }}</span>
            </label>
        </button>
    </div>
</template>

<script lang="ts">
    import {getStyles} from "./OfficeCheckbox.style";
    import OfficeIcon from "../Icon/OfficeIcon.vue";
    import {loadTheme} from "@styling/styles";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {Component, Prop, Model, Vue} from "vue-property-decorator";
    @Component({
        components: {OfficeIcon}
    })
    export default class OfficeCheckbox extends Vue {
        @Model("change", {type: Boolean}) private checked: boolean = false;
        @Prop({type: Boolean}) private disabled = false;
        @Prop({type: String}) private label!: string;

        private id: number = (Math.random() * 100000) + 1;

        private onClick() {
            if (!this.disabled) this.$emit("change", !this.checked);
        }

        private get classNames() {
            return mergeStyleSets(getStyles({
                checked: this.checked,
                disabled: this.disabled,
                className: "",
                isUsingCustomLabelRender: false,
                theme: loadTheme({})
            }));
        }
    }
</script>
