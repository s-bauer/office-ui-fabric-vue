<template>
    <div :class="classNames.root">
        <div :class="classNames.wrapper">
            <OfficeLabel v-if="!!label">
                {{label}}
            </OfficeLabel>
            <div :class="classNames.fieldGroup">
                <input

                        @focus="focused = true"
                        @blur="focused = false"
                        @input="$emit('input', $event.target.value)"
                        type="text"
                        id="TextField"
                        :class="classNames.field"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Model, Prop} from "vue-property-decorator";
    import OfficeLabel from "@/components/Label/OfficeLabel.vue";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {getStyles} from "@/components/TextField/OfficeTextField.style";
    @Component({
        components: {OfficeLabel}
    })
    export default class OfficeTextField extends Vue {
        @Model("input", {type: String}) private text!: string;

        @Prop({type: Boolean}) private disabled!: boolean;
        @Prop({type: String}) private label!: string;
        private focused: boolean = false;
        private get classNames() {
            return mergeStyleSets(getStyles({focused: this.focused, disabled: this.disabled}));
        }
    }
</script>
