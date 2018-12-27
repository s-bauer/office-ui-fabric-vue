<template>
    <div :class="classNames.root">
        <div :class="classNames.wrapper">
            <OfficeLabel :for="id" v-if="hasLabel" :required="required">
                {{label}}
            </OfficeLabel>
            <div :class="classNames.fieldGroup">
                <input
                        v-if="!multiline"
                        type="text"
                        @focus="focused = true"
                        @blur="focused = false"
                        @input="$emit('input', $event.target.value)"
                        :id="id"
                        :value="text"
                        :class="classNames.field"/>
                <textarea
                        v-else
                        value={this.state.value}
                        @input="$emit('input', $event.target.value)"
                        @focus="focused = true"
                        @blur="focused = false"
                        :id="id"
                        :value="text"
                        :class="classNames.field"></textarea>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Model, Prop} from "vue-property-decorator";
    import OfficeLabel from "@/components/Label/OfficeLabel.vue";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {getStyles} from "@/components/TextField/OfficeTextField.style";
    import {createTheme} from "@/styling";

    @Component({
        components: {OfficeLabel}
    })
    export default class OfficeTextField extends Vue {
        get hasLabel(): boolean {
            return this.label != null;
        }

        @Model("input", {type: String}) private text!: string;

        @Prop({type: Boolean, default: false}) private disabled!: boolean;
        @Prop({type: Boolean, default: false}) private multiline!: boolean;
        @Prop({type: Boolean, default: false}) private borderless!: boolean;
        @Prop({type: String, default: ""}) private inputClassName!: string;
        @Prop({type: String, default: ""}) private label!: string;
        @Prop({type: Boolean, default: false}) private required!: boolean;
        @Prop({type: Boolean, default: false}) private resizable!: boolean;
        @Prop({type: Boolean, default: false}) private underlined!: boolean;

        private focused: boolean = false;
        private id: number = (Math.random() * 100000) + 1;

        private get classNames() {
            return mergeStyleSets(getStyles({
                focused: this.focused,
                disabled: this.disabled,
                multiline: this.multiline,
                borderless: this.borderless,
                className: '',
                hasLabel: this.hasLabel,
                inputClassName: this.inputClassName,
                required: this.required,
                resizable: this.resizable,
                underlined: this.underlined,
                theme: createTheme({})
            }));
        }
    }
</script>
