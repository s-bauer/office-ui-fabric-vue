<template>
    <div>
        <OverviewItem title="Text Field" :options="options">
            <template slot-scope="props">
                <OfficeButton v-bind="props"></OfficeButton>
            </template>
        </OverviewItem>
    </div>
</template>

<script lang="ts">
    import {DemoInputTypes} from "@/components/DemoInputs/DemoInputTypes";
    import OverviewItem, {IItemOptions} from "@/components/OverviewItem.vue";
    import {Component, Vue} from "vue-property-decorator";
    import {OfficeButton} from "office-vue-fabric";

    @Component({
        components: {
            OverviewItem,
            OfficeButton,
        },
    })
    export default class Home extends Vue {
        private options: IItemOptions = {
            disabled: {type: DemoInputTypes.BooleanToggle},
            primary: {type: DemoInputTypes.BooleanToggle, value: true},
            checked: {type: DemoInputTypes.BooleanToggle},
            label: {type: DemoInputTypes.StringInput, value: "Default Button", options: {width: "150px"}},
        };
    }
</script>
