<template>
    <div>
        <OverviewItem title="Playground" :options="options">
            <template slot-scope="props">
                <OfficeTextField v-bind="props"></OfficeTextField>
            </template>
        </OverviewItem>

        <CodeExample :code="exampleCode">
            <OfficeTextField label="Sample Input"></OfficeTextField>
            <OfficeTextField label="Disabled Input" disabled></OfficeTextField>
            <OfficeTextField label="Sample Input with Icon" :iconProps="{iconName: 'edit'}"></OfficeTextField>
            <OfficeTextField label="Sample Input with Prefix and Suffix" prefix="http://" suffix=".com"></OfficeTextField>
            <OfficeTextField label="Borderless Input" borderless></OfficeTextField>
            <OfficeTextField label="Underlined Input" underlined></OfficeTextField>
            <OfficeTextField label="Error Input" errorMessage="Invalid Input"></OfficeTextField>
            <OfficeTextField label="Multiline Input with auto height" multiline autoAdjustHeight></OfficeTextField>

        </CodeExample>

        <Card title="Technical Information">
            <TechnicalDescription :content="propDetails" :header="['PropertyName', 'Type', 'description']">
            </TechnicalDescription>

            <TechnicalDescription :content="eventDetails" :header="['EventName', 'Description']">
            </TechnicalDescription>

            <p>The <span class="code">v-model</span> binding consists of the property <span class="code">text</span>
                and the event <span class="code">input</span>.</p>
        </Card>
    </div>
</template>

<script lang="ts">
    import Card                           from "@/components/Card.vue";
    import CodeExample                    from "@/components/CodeExample.vue";
    import {DemoInputTypes}               from "@/components/DemoInputs/DemoInputTypes";
    import OverviewItem, {IItemOptions}   from "@/components/OverviewItem.vue";
    import TechnicalDescription           from "@/components/TechnicalDescription.vue";
    import {Component, Vue}               from "vue-property-decorator";
    import {OfficeTextField, OfficeLabel} from "office-vue-fabric";
    import exampleCode                    from "./textfields.example";


    @Component({
        components: {
            OfficeTextField,
            OverviewItem,
            Card,
            OfficeLabel,
            CodeExample,
            TechnicalDescription,
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

        private propDetails = [
            ["disabled", "boolean", "Disables the TextField"],
            ["multiline", "boolean", "Displays a multiline textbox"],
            ["autoAdjustHeight", "boolean", "Only in combination with \"multiline\". The height of the TextField will be adjusted automatically as the user types."],
            ["borderless", "boolean", "Displays no border"],
            ["underlined", "boolean", "Displays an underline"],
            ["required", "boolean", "Marks the TextField as required"],
            ["resizable", "boolean", "Only in combination with \"multiline\". Allows the user to resize the TextField"],
            ["label", "string", "Displays a label besides the TextField. The position depends on the mode (underlined, borderless)"],
            ["prefix", "string", "Displays a prefix in front of the TextField"],
            ["suffix", "string", "Displays a prefix behind the TextField"],
            ["errorMessage", "string", "Marks the TextField as invalid and shows an error message"],
            ["iconProps", "IOfficeIconStyleProps", "The props of an icon that shall be displayed"],
            ["iconClass", "string", "An additional css class name that will be applied to the icon"],
            ["inputClassName", "string", "An additional css class name that will be applied to the text input field"],
            ["tabIndex", "number", "The tab index of the input field"],
        ];

        private eventDetails = [
            ["input", "Fired when the input text changes"],
            ["focus", "Fired when the input field gets focus"],
            ["blur", "Fired when the input field loses focus"],
            ["click", "Fired when the user clicks on the input field"],
            ["keydown", "Fired when the users presses a key"],
            ["keyup", "Fired when the user releases a key"],
        ];
    }
</script>

<style scoped>
    .technical-description {
        margin-bottom: 25px;
    }

    .code {
        background-color: #F0F0F0;
        color: #444;
        padding: 3px;
    }

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
