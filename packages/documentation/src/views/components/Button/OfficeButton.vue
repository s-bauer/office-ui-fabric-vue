<template>
    <div>
        <OverviewItem title="Playground" :options="options">
            <template slot-scope="props">
                <OfficeButton v-bind="props"></OfficeButton>
            </template>
        </OverviewItem>

        <CodeExample :code="exampleCode">
            <OfficeButton label="Default Button"></OfficeButton>
            <OfficeButton primary label="Primary Button"></OfficeButton>
            <OfficeButton checked label="Checked Button"></OfficeButton>
            <OfficeButton primary checked label="Primary Checked Button"></OfficeButton>
            <OfficeButton disabled label="Disabled Button"></OfficeButton>
        </CodeExample>

        <Card title="Technical Information">
            <TechnicalDescription :content="propDetails" :header="['PropertyName', 'Type', 'description']">
            </TechnicalDescription>

            <TechnicalDescription :content="eventDetails" :header="['EventName', 'Description']">
            </TechnicalDescription>

            <span></span>
        </Card>

    </div>
</template>

<script lang="ts">
    import Card                         from "@/components/Card.vue";
    import CodeExample                  from "@/components/CodeExample.vue";
    import {DemoInputTypes}             from "@/components/DemoInputs/DemoInputTypes";
    import OverviewItem, {IItemOptions} from "@/components/OverviewItem.vue";
    import TechnicalDescription         from "@/components/TechnicalDescription.vue";
    import {Component, Vue}             from "vue-property-decorator";
    import {OfficeButton, OfficeLabel}  from "office-vue-fabric";
    import exampleCode                  from "./buttons.example";

    @Component({
        components: {
            TechnicalDescription,
            CodeExample,
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

        private propDetails = [
            ["label", "string", "The label to display"],
            ["primary", "boolean", "Displays a primary button"],
            ["checked", "boolean", "Marks the button as checked"],
            ["disabled", "boolean", "Disables the button"],
        ];

        private eventDetails = [
            ["click", "The button click event"],
        ];
    }
</script>

<style scoped>
    .technical-description {
        margin-bottom: 25px;
    }

    #example-container .ms-Button {
        width: 250px;
        display: inline-block;
        margin-right: 15px;
        margin-bottom: 15px;
    }
</style>
