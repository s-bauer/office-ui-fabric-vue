<template>
    <div>
        <OverviewItem title="Playground" :options="options">
            <template slot-scope="props">
                <OfficeButton v-bind="props"></OfficeButton>
            </template>
        </OverviewItem>

        <Card title="Examples" id="example-card">
            <div id="example-button-container">
                <OfficeButton label="Default Button"></OfficeButton>
                <OfficeButton primary label="Primary Button"></OfficeButton>
                <OfficeButton checked label="Checked Button"></OfficeButton>
                <OfficeButton primary checked label="Primary Checked Button"></OfficeButton>
                <OfficeButton disabled label="Disabled Button"></OfficeButton>
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
    import Card                         from "@/components/Card.vue";
    import {DemoInputTypes}             from "@/components/DemoInputs/DemoInputTypes";
    import OverviewItem, {IItemOptions} from "@/components/OverviewItem.vue";
    import OfficeLabel                  from "office-vue-fabric/src/Label/OfficeLabel.vue";
    import {Component, Vue}             from "vue-property-decorator";
    import {OfficeButton}               from "office-vue-fabric";
    import exampleCode                  from "./buttons.example";

    @Component({
        components: {
            OfficeLabel,
            OverviewItem,
            OfficeButton,
            Card
        },
    })
    export default class extends Vue {
        private exampleCode = exampleCode;

        private options: IItemOptions = {
            disabled: {type: DemoInputTypes.BooleanToggle},
            primary:  {type: DemoInputTypes.BooleanToggle, value: true},
            checked:  {type: DemoInputTypes.BooleanToggle},
            label:    {type: DemoInputTypes.StringInput, value: "Default Button", options: {width: "150px"}},
        };
    }
</script>

<style scoped>
    #example-code {
        border-top: 1px solid rgba(0,0,0,0.2);
        margin-top: 25px;
        padding-top: 25px;
    }

    #example-code .ms-Label {
        margin-left: 5px;
    }

    #example-button-container .ms-Button {
        width: 250px;
        display: inline-block;
        margin-right: 15px;
        margin-bottom: 15px;
    }
</style>
