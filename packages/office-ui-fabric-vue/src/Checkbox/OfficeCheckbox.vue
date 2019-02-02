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
    import {getStyles}                          from "./OfficeCheckbox.style";
    import OfficeIcon                           from "../Icon/OfficeIcon.vue";
    import {loadTheme}                          from "@s-bauer/uifabric-styling";
    import {mergeStyleSets}                     from "@uifabric/merge-styles";
    import {Component, Prop, Model, Vue, Watch} from "vue-property-decorator";

    @Component({
        components: {OfficeIcon}
    })

    export default class OfficeCheckbox extends Vue {
        // @formatter:off
        @Model("change", {type: Boolean, default: false}) private checked:  boolean;
        @Prop({type: Boolean, default: false})            private disabled: boolean;
        @Prop({type: String, default: ""})                private label!:   string;
        // @formatter:on

        private isChecked: boolean = this.checked;
        private id: number = (Math.random() * 100000) + 1;

        private onClick() {
            if (!this.disabled) {
                this.isChecked = !this.isChecked;
                this.$emit("change", this.isChecked);
            }
        }

        @Watch("checked")
        private watchChecked(newVal) {
            if(newVal != this.isChecked)
                this.isChecked = newVal;
        }

        private get classNames() {
            return mergeStyleSets(getStyles({
                checked:                  this.isChecked,
                disabled:                 this.disabled,
                className:                "",
                isUsingCustomLabelRender: false,
                theme:                    loadTheme({})
            }));
        }
    }
</script>
