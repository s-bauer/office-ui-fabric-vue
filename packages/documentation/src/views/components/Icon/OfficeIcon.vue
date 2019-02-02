<template>
    <div>
        <OverviewItem title="CheckBox" :options="options">
            <template slot-scope="props">
                <div style="display: flex; justify-content: center;">
                    <OfficeIcon v-bind="props" :style="{fontSize: '50px', color: props.color}"></OfficeIcon>
                </div>
            </template>
        </OverviewItem>
    </div>
</template>

<script lang="ts">
    import {DemoInputTypes}             from "@/components/DemoInputs/DemoInputTypes";
    import OverviewItem, {IItemOptions} from "@/components/OverviewItem.vue";
    import {Component, Vue}             from "vue-property-decorator";
    import {OfficeIcon}                 from "office-vue-fabric";

    @Component({
        components: {
            OfficeIcon,
            OverviewItem,
        },
    })
    export default class extends Vue {
        private options: IItemOptions = {
            iconName: {type: DemoInputTypes.StringInput, value: "BingLogo", options: {width: "150px"}},
            color:    {type: DemoInputTypes.StringInput, value: "#2c3e50"},
        };
    }
</script>
