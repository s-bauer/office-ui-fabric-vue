<template>
    <div class="boolean-toggle overview-input-box">
        <OfficeLabel class="label">{{ propName }}</OfficeLabel>
        <OfficeToggle :checked="!!propValue" @change="onChange"></OfficeToggle>
    </div>
</template>

<script lang="ts">
    import OfficeLabel from "@/components/Label/OfficeLabel.vue";
    import OfficeToggle from "@/components/Toggle/OfficeToggle.vue";
    import {Component, Vue, Prop, Model, Watch} from "vue-property-decorator";

    @Component({components: {OfficeLabel, OfficeToggle}})
    export default class BooleanToggle extends Vue {
        @Prop({required: true, type: String}) private propName!: string;
        @Prop({type: Object}) private options?: { value?: any, falseValue?: any };
        @Model("change") private propValue?: any;

        private onChange(newValue: boolean) {
            let trueValue = true;
            let falseValue = false;

            if (this.options && this.options.value) {
                trueValue = this.options.value;
                falseValue = this.options.falseValue || undefined;
            }

            this.$emit("change", newValue ? trueValue : falseValue);
        }
    }
</script>

<style scoped>
    .boolean-toggle {
    }

    .label {
        margin-right: 10px;
        margin-bottom: 4px;
    }
</style>
