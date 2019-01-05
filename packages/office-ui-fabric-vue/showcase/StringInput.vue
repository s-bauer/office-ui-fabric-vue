<template>
    <div class="overview-input-box">
        <OfficeLabel class="label">{{ propName }}</OfficeLabel>
        <OfficeTextField :text="propValue" @input="$emit('change', $event)" :style="textFieldStyle"></OfficeTextField>
    </div>
</template>

<script lang="ts">
    import OfficeLabel from "@components/Label/OfficeLabel.vue";
    import OfficeTextField from "@components/TextField/OfficeTextField.vue";
    import OfficeToggle from "@components/Toggle/OfficeToggle.vue";
    import {Component, Vue, Prop, Model} from "vue-property-decorator";

    @Component({components: {OfficeLabel, OfficeToggle, OfficeTextField}})
    export default class StringInput extends Vue {
        @Prop({required: true, type: String}) private propName!: string;
        @Model("change", {default: undefined}) private propValue?: string;
        @Prop({type: Object}) private options?: { width?: number };

        private get textFieldStyle() {
            const {width = "100px"} = (this.options || {});

            return {
                width,
                minWidth: "100px"
            };
        }
    }
</script>

<style scoped>
    .label {
        margin-right: 10px;
    }
</style>
