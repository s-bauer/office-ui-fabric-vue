<template>
    <div role="application" :class="classNames.applicationRole">
        <div :class="classNames.root" role="radiogroup">
            <OfficeLabel v-if="label" :class="classNames.label" :required="required" :id="id + '-label'">
                {{ label }}
            </OfficeLabel>

            <div :class="classNames.flexContainer">
                <OfficeChoiceGroupOption
                        v-for="option of options"
                        :key="option.key"
                        :focused="option.key === keyFocused"
                        :checked="option.key === keyChecked"
                        :data-is-focusable="option.key === keyChecked || option.key === keyDefaultFocusable"
                        :disabled="option.disabled || disabled"
                        :id="`${id}-${option.key}`"
                        :labelId="`${labelId}-${option.key}`"
                        :name="name || id"
                        :required="required"
                        :text="option.text"
                        @change="onChange(option.key)"></OfficeChoiceGroupOption>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import OfficeChoiceGroupOption from "./ChoiceGroupOption/OfficeChoiceGroupOption.vue";
    import {getStyles} from "./OfficeChoiceGroup.styles";
    import {IOfficeChoiceGroupOption, IOfficeChoiceGroupProps} from "./OfficeChoiceGroup.types";
    import OfficeLabel from "../Label/OfficeLabel.vue";
    import {loadTheme} from "@s-bauer/uifabric-styling"
    import {getId} from "@s-bauer/uifabric-utilities";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({
        components: {OfficeLabel, OfficeChoiceGroupOption}
    })
    export default class OfficeChoiceGroup extends Vue implements IOfficeChoiceGroupProps {
        @Prop({type: Array, default: []}) public options?: IOfficeChoiceGroupOption[];

        @Prop({type: Boolean, default: false}) public disabled!: boolean;
        @Prop({type: Boolean, default: false}) public required!: boolean;

        @Prop({type: String, default: null}) public label?: string;
        @Prop({type: String, default: null}) public name?: string;

        @Prop({type: [String, Number], default: null}) public defaultSelectedKey?: string | number;
        @Prop({type: [String, Number], default: null}) public selectedKey?: string | number;

        private keyFocused?: string | number | null = null;
        private keyChecked?: string | number | null = this.defaultSelectedKey ? this.defaultSelectedKey : this.getKeyChecked();

        private labelId?: string = getId("ChoiceGroupLabel");
        private id?: string = getId("ChoiceGroup");

        private onChange(key: string | number) {
            if (this.selectedKey === null)
                this.keyChecked = key;
        }

        private getKeyChecked(): string | number | null {
            if (this.selectedKey)
                return this.selectedKey;

            const optionsChecked = this.options!.filter((option: IOfficeChoiceGroupOption) => option.checked);

            return optionsChecked.length === 0
                ? null
                : optionsChecked[0].key;
        }

        private get keyDefaultFocusable() {
            const firstEnabledOption = this.disabled || this.options === undefined ? undefined : this.options!.find((option) => !option.disabled);
            return this.keyChecked === undefined && firstEnabledOption ? firstEnabledOption.key : undefined;
        }

        private get classNames() {
            return mergeStyleSets(getStyles({
                theme: loadTheme({}),
                optionsContainIconOrImage: this.options!.some((option: IOfficeChoiceGroupOption) => Boolean(option.iconProps || option.imageSrc)),
                className: ""
            }));
        }
    }
</script>
