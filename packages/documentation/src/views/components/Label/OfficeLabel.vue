<template>
    <div>
        <OverviewItem title="CheckBox" :options="options">
            <template slot-scope="props">
                <OfficeLabel v-bind="props">{{ props.content }}</OfficeLabel>
            </template>
        </OverviewItem>

        <CodeExample :code="exampleCode">
            <OfficeLabel>Default Label</OfficeLabel>
            <OfficeLabel required>Required Label</OfficeLabel>
            <OfficeLabel disabled>Disabled Label</OfficeLabel>
            <OfficeLabel disabled required>Disabled Required Label</OfficeLabel>
        </CodeExample>

        <Card title="Technical Information">
            <TechnicalDescription :content="propDetails" :header="['PropertyName', 'Type', 'description']">
            </TechnicalDescription>
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
    import {OfficeLabel}                from "office-vue-fabric";
    import exampleCode                  from "./label.example";


    @Component({
        components: {
            OfficeLabel,
            OverviewItem,
            CodeExample,
            TechnicalDescription,
            Card,
        },
    })
    export default class extends Vue {
        private exampleCode = exampleCode;

        private propDetails = [
            ["required", "boolean", "Marks the label as required"],
            ["disabled", "boolean", "Disables the label"],
        ];

        private options: IItemOptions = {
            disabled: {type: DemoInputTypes.BooleanToggle},
            required: {type: DemoInputTypes.BooleanToggle},
            content:  {type: DemoInputTypes.StringInput, value: "I'm a label!", options: {width: "250px"}},
        };
    }
</script>
