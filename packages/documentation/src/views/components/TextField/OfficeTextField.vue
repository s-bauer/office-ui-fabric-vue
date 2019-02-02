<template>
    <div>
        <OverviewItem title="Text Field" :options="options">
            <template slot-scope="props">
                <OfficeTextField v-bind="props"></OfficeTextField>
            </template>
        </OverviewItem>
    </div>
</template>

<script lang="ts">
    import {DemoInputTypes} from "@/components/DemoInputs/DemoInputTypes";
    import OverviewItem, {IItemOptions} from "@/components/OverviewItem.vue";
    import {Component, Vue} from "vue-property-decorator";
    import {OfficeTextField} from "office-vue-fabric";

    @Component({
        components: {
            OfficeTextField,
            OverviewItem,
        },
    })
    export default class extends Vue {
        private options: IItemOptions = {
            disabled: {type: DemoInputTypes.BooleanToggle},
            multiline: {type: DemoInputTypes.BooleanToggle},
            required: {type: DemoInputTypes.BooleanToggle},
            resizable: {type: DemoInputTypes.BooleanToggle},
            underlined: {type: DemoInputTypes.BooleanToggle},
            borderless: {type: DemoInputTypes.BooleanToggle},
            autoAdjustHeight: {type: DemoInputTypes.BooleanToggle},
            iconProps: {type: DemoInputTypes.BooleanToggle, options: {value: {iconName: "edit"}}},
            label: {type: DemoInputTypes.StringInput, value: "Example Input", options: {width: "250px"}},
            errorMessage: {type: DemoInputTypes.StringInput, value: "This input is invalid!", options: {width: "250px"}},
            prefix: {type: DemoInputTypes.StringInput, value: ""},
            suffix: {type: DemoInputTypes.StringInput, value: ""},
        };
    }
</script>
