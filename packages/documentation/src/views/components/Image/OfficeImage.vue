<template>
    <div>
        <OverviewItem title="CheckBox" :options="options">
            <template slot-scope="props">
                <OfficeImage v-bind="props"></OfficeImage>
            </template>
        </OverviewItem>
    </div>
</template>

<script lang="ts">
    import {DemoInputTypes}             from "@/components/DemoInputs/DemoInputTypes";
    import OverviewItem, {IItemOptions} from "@/components/OverviewItem.vue";
    import {Component, Vue}             from "vue-property-decorator";
    import {OfficeImage}                from "office-vue-fabric";

    @Component({
        components: {
            OfficeImage,
            OverviewItem,
        },
    })
    export default class extends Vue {
        private options: IItemOptions = {
            maximizeFrame:      {type: DemoInputTypes.BooleanToggle},
            shouldFadeIn:       {type: DemoInputTypes.BooleanToggle},
            shouldStartVisible: {type: DemoInputTypes.BooleanToggle},
            src:                {
                type:    DemoInputTypes.StringInput,
                value:   "http://placehold.it/350x150",
                options: {width: "250px"}
            },
            alt:                {type: DemoInputTypes.StringInput, value: "Some Image", options: {width: "150px"}},
            width:              {type: DemoInputTypes.StringInput, value: "400"},
            height:             {type: DemoInputTypes.StringInput, value: ""},
        };
    }
</script>
