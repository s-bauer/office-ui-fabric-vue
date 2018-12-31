<template>
    <div :class="classNames.root">
        <div :class="classNames.wrapper">
            <OfficeLabel :for="id" v-if="hasLabel" :required="required">
                {{label}}
            </OfficeLabel>
            <div :class="classNames.fieldGroup">
                <div v-if="prefix !== undefined" :class="classNames.prefix">
                    <span style="padding-bottom: 1px">{{prefix}}</span>
                </div>
                <input
                        v-if="!multiline"
                        @input="onInputChange"
                        @focus="onInputFocus"
                        @blur="onInputBlur"
                        type="text"
                        ref="textElement"
                        :disabled="disabled"
                        :id="id"
                        :value="text"
                        :class="classNames.field"/>
                <textarea
                        v-else
                        @input="onInputChange"
                        @focus="onInputFocus"
                        @blur="onInputBlur"
                        ref="textElement"
                        :disabled="disabled"
                        :id="id"
                        :value="text"
                        :class="classNames.field"></textarea>
                <OfficeIcon :class="classNames.icon" v-bind="iconProps"></OfficeIcon>
                <div v-if="suffix !== undefined" :class="classNames.suffix">
                    <span style="padding-bottom: 1px">{{suffix}}</span>
                </div>
            </div>
        </div>
        <div role="alert">
            <p :class="classNames.errorMessage">
                <span data-automation-id="error-message">{{errorMessage}}</span>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Model, Prop, Watch} from "vue-property-decorator";
    import OfficeLabel from "@/components/Label/OfficeLabel.vue";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {getStyles} from "@/components/TextField/OfficeTextField.style";
    import {createTheme} from "@/styling";
    import {IOfficeIconStyleProps} from "@/components/Icon/OfficeIcon.types";
    import OfficeIcon from "@/components/Icon/OfficeIcon.vue";

    @Component({
        components: {OfficeLabel, OfficeIcon}
    })
    export default class OfficeTextField extends Vue {
        get hasLabel(): boolean {
            return this.label != null;
        }

        @Model("input", {type: String}) private text!: string;

        @Prop({type: Boolean, default: false}) private disabled!: boolean;
        @Prop({type: Boolean, default: false}) private autoAdjustHeight!: boolean;
        @Prop({type: Boolean, default: false}) private multiline!: boolean;
        @Prop({type: Object, default: null}) private iconProps!: IOfficeIconStyleProps;
        @Prop({type: Boolean, default: false}) private borderless!: boolean;
        @Prop({type: String, default: ""}) private inputClassName!: string;
        @Prop({type: String, default: null}) private iconClass!: string;
        @Prop({type: String, default: ""}) private label!: string;
        @Prop({type: String, default: undefined}) private prefix!: string;
        @Prop({type: String, default: undefined}) private suffix!: string;
        @Prop({type: String, default: null}) private errorMessage!: string;
        @Prop({type: Boolean, default: false}) private required!: boolean;
        @Prop({type: Boolean, default: false}) private resizable!: boolean;
        @Prop({type: Boolean, default: false}) private underlined!: boolean;

        @Watch("multiline")onAutoAdjustChange(){
            this.adjustInputHeight();
        }
        @Watch("autoAdjustHeight")onAutoAdjustChange(){
            this.adjustInputHeight();
        }


        private focused: boolean = false;
        private id: number = (Math.random() * 100000) + 1;
        public mounted() {
            this.adjustInputHeight();
        }
        private get classNames() {
            return mergeStyleSets(getStyles({
                focused: this.focused,
                disabled: this.disabled,
                multiline: this.multiline,
                borderless: this.borderless,
                className: "",
                hasLabel: this.hasLabel,
                inputClassName: this.inputClassName,
                required: this.required,
                resizable: this.resizable,
                underlined: this.underlined,
                theme: createTheme({}),
                hasErrorMessage: !!this.errorMessage,
                autoAdjustHeight: this.autoAdjustHeight,
                hasIcon: !!this.iconProps,
                iconClass: this.iconClass
            }));
        }

        private adjustInputHeight() {
            const ref = this.$refs.textElement as HTMLElement;

            if (ref && this.autoAdjustHeight && this.multiline) {
                ref.style.height = "";
                ref.style.height = ref.scrollHeight + "px";
            }
        }

        private onInputChange(event: any) {
            this.$emit("input", event.target.value);
            const element: HTMLInputElement = event.target as HTMLInputElement;
            const value: string = element.value;
            this.adjustInputHeight();
        }

        private onInputFocus(event: any) {
            this.$emit("focus", event);
            this.focused = true;
        }

        private onInputBlur(event: any) {
            this.$emit("blur", event);
            this.focused = false;
        }

    }
</script>
