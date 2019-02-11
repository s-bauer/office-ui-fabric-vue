<template>
    <div>
        <OverviewItem title="Playground" :options="options">
            <template slot-scope="props">
                <OfficeChoiceGroup v-bind="props" :options="choiceGroupOptions"></OfficeChoiceGroup>
            </template>
        </OverviewItem>

        <CodeExample :code="exampleCode">
        </CodeExample>

        <Card title="Technical Information">
            <TechnicalDescription :content="propDetails" :header="['PropertyName', 'Type', 'description']">
            </TechnicalDescription>

            <TechnicalDescription :content="eventDetails" :header="['EventName', 'Description']">
            </TechnicalDescription>

            <p>The <span class="code">v-model</span> binding consists of the property <span class="code">selectedKey</span>
                and the event <span class="code">change</span>.</p>
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
    import {OfficeChoiceGroup}          from "office-vue-fabric";

    import exampleCode from "./choicegroup.example";

    @Component({
        components: {
            TechnicalDescription,
            CodeExample,
            OverviewItem,
            OfficeChoiceGroup,
            Card
        },
    })
    export default class extends Vue {
        private exampleCode = exampleCode;

        private choiceGroupOptions = [
            {key: "A", text: "Option A"},
            {key: "B", text: "Option B"},
            {key: "C", text: "Option C"},
        ];

        private options: IItemOptions = {
            disabled:    {type: DemoInputTypes.BooleanToggle},
            required:    {type: DemoInputTypes.BooleanToggle},
            label:       {type: DemoInputTypes.StringInput, value: "Some Choice", options: {width: "150px"}},
            name:        {type: DemoInputTypes.StringInput, value: "some_choice", options: {width: "150px"}},
            selectedKey: {type: DemoInputTypes.StringInput, value: "A", options: {width: "50px"}},
        };

        private propDetails = [
            ["options", "IOfficeChoiceGroupOption[]", "The options available to select"],
            ["disabled", "boolean", "Disables the ChoiceGroup"],
            ["required", "boolean", "Marks the ChoiceGroup as required"],
            ["label", "string", "Shows a label above the ChoiceGroup"],
            ["name", "string", "The internal name of the choice box"],
            ["selectedKey", "string | number", "The selected key"],
        ];

        private eventDetails = [
            ["change", "Fired when the selected key changes"],
        ];
    }
</script>

<style scoped>
    .code {
        background-color: #F0F0F0;
        color: #444;
        padding: 3px;
    }

    .technical-description {
        margin-bottom: 25px;
    }
</style>
