<template>
    <div :class="classNames.root" >
        <div :class="classNames.choiceFieldWrapper" >
            <input :id="id"
                    :class="classNames.input"
                    :name="name"
                    :disabled="disabled"
                    :checked="checked"
                    :required="required"
                    type="radio"
                    @change="$emit('change', $event)"/>
            <label :for="id" :class="classNames.field" >
                <span :id="labelId" class="ms-ChoiceFieldLabel">
                    {{text}}
                </span>
            </label>
        </div>
    </div>
</template>

<script lang="ts">
    import {getStyles} from "@/components/ChoiceGroup/ChoiceGroupOption/OfficeChoiceGroupOption.styles";
    import {IOfficeIconProps} from "@/components/Icon/OfficeIcon.types";
    import {loadTheme} from "@/styling";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class OfficeChoiceGroupOption extends Vue {
        @Prop({type: Boolean, default: false}) private focused!: boolean;
        @Prop({type: Boolean, default: false}) private required!: boolean;
        @Prop({type: Boolean, default: false}) private disabled!: boolean;
        @Prop({type: Boolean, default: false}) private checked!: boolean;

        @Prop({type: String, default: ""}) private name!: string;
        @Prop({type: String, default: ""}) private text!: string;

        @Prop({type: String, default: ""}) private id!: string;
        @Prop({type: String, default: ""}) private labelId!: string;

        @Prop({type: String, default: null}) private imageSrc?: string;
        @Prop({type: Object, default: null}) private iconProps?: IOfficeIconProps;
        @Prop({type: Object, default: null}) private imageSize?: { width: number, height: number };

        private get classNames() {
            return mergeStyleSets(getStyles({
                theme: loadTheme({}),
                checked: this.checked,
                disabled: this.disabled,
                focused: this.focused,
                hasIcon: !!this.iconProps,
                imageIsLarge: !!this.imageSrc && !!this.imageSize && (this.imageSize.width > 71 || this.imageSize.height > 71)
            }));
        }
    }
</script>

<style scoped>

</style>