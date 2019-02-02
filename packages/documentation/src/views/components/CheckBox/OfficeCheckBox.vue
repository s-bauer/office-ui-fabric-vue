<template>
    <div>
        <OverviewItem title="CheckBox" :options="options">
            <template slot-scope="props">
                <OfficeCheckbox v-bind="props"></OfficeCheckbox>
            </template>
        </OverviewItem>
    </div>
</template>

<script lang="ts">
    import {DemoInputTypes}                  from "@/components/DemoInputs/DemoInputTypes";
    import OverviewItem, {IItemOptions}      from "@/components/OverviewItem.vue";
    import {Component, Vue}                  from "vue-property-decorator";
    import {OfficeTextField, OfficeCheckbox} from "office-vue-fabric";

    @Component({
        components: {
            OfficeCheckbox,
            OfficeTextField,
            OverviewItem,
        },
    })
    export default class extends Vue {
        private options: IItemOptions = {
            disabled:         {type: DemoInputTypes.BooleanToggle},
            label:            {type: DemoInputTypes.StringInput, value: "Checkbox"},
        };
    }
</script>
