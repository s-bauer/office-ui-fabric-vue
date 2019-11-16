<template>
    <div>
        <OverviewItem title="Playground" :options="options">
            <template slot-scope="props">
                <OfficeCheckbox v-bind="props"></OfficeCheckbox>
            </template>
        </OverviewItem>

        <CodeExample :code="exampleCode">
            <OfficeCheckbox label="Default Checkbox"></OfficeCheckbox>
            <OfficeCheckbox disabled label="Disabled Checkbox"></OfficeCheckbox>
        </CodeExample>

        <Card title="Technical Information">
            <TechnicalDescription :content="propDetails" :header="['PropertyName', 'Type', 'description']">
            </TechnicalDescription>

            <TechnicalDescription :content="eventDetails" :header="['EventName', 'Description']">
            </TechnicalDescription>

            <p>The <span class="code">v-model</span> binding consists of the property <span class="code">checked</span>
                and the event <span class="code">change</span>.</p>
        </Card>
    </div>
</template>

<script lang="ts">
    import Card                              from "@/components/Card.vue";
    import CodeExample                       from "@/components/CodeExample.vue";
    import {DemoInputTypes}                  from "@/components/DemoInputs/DemoInputTypes";
    import OverviewItem, {IItemOptions}      from "@/components/OverviewItem.vue";
    import TechnicalDescription              from "@/components/TechnicalDescription.vue";
    import {Component, Vue}                  from "vue-property-decorator";
    import {OfficeTextField, OfficeCheckbox} from "office-vue-fabric";
    import exampleCode                       from "./checkbox.example";


    @Component({
        components: {
            OfficeCheckbox,
            OfficeTextField,
            OverviewItem,
            CodeExample,
            Card,
            TechnicalDescription,
        },
    })
    export default class extends Vue {
        private exampleCode = exampleCode;

        private options: IItemOptions = {
            disabled: {type: DemoInputTypes.BooleanToggle},
            label:    {type: DemoInputTypes.StringInput, value: "Checkbox"},
        };

        private propDetails = [
            ["label", "string", "The label to display"],
            ["disabled", "boolean", "Disables the CheckBox"],
            ["checked", "boolean", "The checked value"],
        ];

        private eventDetails = [
            ["click", "The CheckBox click event"],
            ["change", "Occurs when the value changes"],
        ];
    }
</script>

<style scoped>
    #example-container .ms-Checkbox {
        margin-bottom: 10px;
    }

    .code {
        background-color: #F0F0F0;
        color: #444;
        padding: 3px;
    }

</style>
