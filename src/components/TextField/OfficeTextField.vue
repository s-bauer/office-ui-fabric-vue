<template>
    <div :style="textFieldStyle" class="ms-TextField">
        <div class="ms-TextField-wrapper">
            <OfficeLabel>
                {{label}}
            </OfficeLabel>
            <div :style="textFieldFieldGroupStyle" class="ms-TextField-fieldGroup">
                <input
                        :style="textFieldFieldStyle"
                        @focus="focused = true"
                        @blur="focused = false"
                        @input="$emit('input', $event.target.value)"
                        type="text"
                        id="TextField"
                        class="ms-TextField-field"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Model, Prop} from "vue-property-decorator";
    import OfficeLabel from "@/components/Label/OfficeLabel.vue";
    @Component({
        components: {OfficeLabel}
    })
    export default class OfficeTextField extends Vue {
        @Model("input", {type: String}) private text!: string;

        @Prop({type: Boolean}) private disabled!: boolean;
        @Prop({type: String}) private label!: string;
        private focused: boolean = false;

        get textFieldStyle() {
            const styles: any = {};

            if (this.focused) {
                styles.borderColor = "#0078d4";
            }

            return styles;
        }

        get textFieldFieldGroupStyle() {
            const styles: any = {};

            if (this.focused) {
                styles.borderColor = "#0078d4";
            }
            if (this.disabled) {
                styles.backgroundColor = "#f4f4f4";
                styles.borderColor = "#f4f4f4";
            }

            return styles;
        }

        get textFieldFieldStyle() {
            const styles: any = {};

            if (this.disabled) {
                styles.backgroundColor = "transparent";
                styles.borderColor = "transparent";
            }

            return styles;
        }
    }
</script>

<style>
    .ms-TextField {
        position: relative;
    }

    /*
    Only depends on underlined flag prop
     */
    .ms-TextField-wrapper {
    }

    .ms-TextField-fieldGroup {
        border: 1px solid #a6a6a6;
        background: #ffffff;
        height: 32px;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        position: relative;
    }

    .ms-TextField-field {
        font-size: 14px;
        border-radius: 0;
        border: none;
        background: transparent none;
        color: #333333;
        padding: 0 12px;
        width: 100%;
        min-width: 0;
        text-overflow: ellipsis;
        outline: 0;
    }

</style>
