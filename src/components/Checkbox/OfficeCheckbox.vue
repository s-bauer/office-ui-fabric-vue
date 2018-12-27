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
                    <i :class="classNames.checkmark" class="ms-Icon ms-Icon--CheckMark"></i>
                </div>
                <span :class="classNames.text" v-if="label !== undefined">{{ label }}</span>
            </label>
        </button>
    </div>
</template>

<script lang="ts">
    import {getStyles} from "@/components/Checkbox/OfficeCheckbox.style";
    import {loadTheme} from "@/styling";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {Component, Prop, Model, Vue} from "vue-property-decorator";

    @Component
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
