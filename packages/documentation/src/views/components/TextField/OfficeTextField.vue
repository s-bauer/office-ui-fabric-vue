<template>
    <div>
        <OverviewItem title="Playground" :options="options">
            <template slot-scope="props">
                <OfficeTextField v-bind="props"></OfficeTextField>
            </template>
        </OverviewItem>

        <Card title="Examples" id="example-card">
            <div id="example-container">
                <OfficeTextField label="Sample Input"></OfficeTextField>
                <OfficeTextField label="Disabled Input" disabled></OfficeTextField>
                <OfficeTextField label="Sample Input with Icon" :iconProps="{iconName: 'edit'}"></OfficeTextField>
                <OfficeTextField label="Sample Input with Prefix and Suffix" prefix="http://" suffix=".com"></OfficeTextField>
                <OfficeTextField label="Borderless Input" borderless></OfficeTextField>
                <OfficeTextField label="Underlined Input" underlined></OfficeTextField>
                <OfficeTextField label="Error Input" errorMessage="Invalid Input"></OfficeTextField>
                <OfficeTextField label="Multiline Input with auto height" multiline autoAdjustHeight></OfficeTextField>
            </div>
            <div id="example-code">
                <OfficeLabel>Code:</OfficeLabel>
                <highlight-code lang="vue" style="text-align: left">
                    {{ exampleCode }}
                </highlight-code>
            </div>
        </Card>
    </div>
</template>

<script lang="ts">
    import Card                           from "@/components/Card.vue";
    import {DemoInputTypes}               from "@/components/DemoInputs/DemoInputTypes";
    import OverviewItem, {IItemOptions}   from "@/components/OverviewItem.vue";
    import {Component, Vue}               from "vue-property-decorator";
    import {OfficeTextField, OfficeLabel} from "office-vue-fabric";
    import exampleCode                    from "./textfields.example";


    @Component({
        components: {
            OfficeTextField,
            OverviewItem,
            Card,
            OfficeLabel,
        },
    })
    export default class extends Vue {
        private exampleCode = exampleCode;

        private options: IItemOptions = {
            disabled:         {type: DemoInputTypes.BooleanToggle},
            multiline:        {type: DemoInputTypes.BooleanToggle},
            required:         {type: DemoInputTypes.BooleanToggle},
            resizable:        {type: DemoInputTypes.BooleanToggle},
            underlined:       {type: DemoInputTypes.BooleanToggle},
            borderless:       {type: DemoInputTypes.BooleanToggle},
            autoAdjustHeight: {type: DemoInputTypes.BooleanToggle},
            iconProps:        {type: DemoInputTypes.BooleanToggle, options: {value: {iconName: "edit"}}},
            label:            {type: DemoInputTypes.StringInput, value: "Example Input", options: {width: "250px"}},
            errorMessage:     {
                type:    DemoInputTypes.StringInput,
                value:   "This input is invalid!",
                options: {width: "250px"}
            },
            prefix:           {type: DemoInputTypes.StringInput, value: ""},
            suffix:           {type: DemoInputTypes.StringInput, value: ""},
        };
    }
</script>

<style scoped>
    #example-container .ms-TextField {
        margin-bottom: 5px;
    }

    #example-code {
        border-top: 1px solid rgba(0,0,0,0.2);
        margin-top: 25px;
        padding-top: 25px;
    }

    #example-code .ms-Label {
        margin-left: 5px;
    }
</style>
