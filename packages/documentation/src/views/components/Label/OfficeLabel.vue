<template>
    <div>
        <OverviewItem title="CheckBox" :options="options">
            <template slot-scope="props">
                <OfficeLabel v-bind="props">{{ props.content }}</OfficeLabel>
            </template>
        </OverviewItem>
    </div>
</template>

<script lang="ts">
    import {DemoInputTypes}             from "@/components/DemoInputs/DemoInputTypes";
    import OverviewItem, {IItemOptions} from "@/components/OverviewItem.vue";
    import {Component, Vue}             from "vue-property-decorator";
    import {OfficeLabel}                from "office-vue-fabric";

    @Component({
        components: {
            OfficeLabel,
            OverviewItem,
        },
    })
    export default class extends Vue {
        private options: IItemOptions = {
            disabled: {type: DemoInputTypes.BooleanToggle},
            required: {type: DemoInputTypes.BooleanToggle},
            content:  {type: DemoInputTypes.StringInput, value: "I'm a label!", options: {width: "250px"}},
        };
    }
</script>
