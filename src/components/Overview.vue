import {ImageFit} from "./Image/OfficeImage.types";
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>

        <div class="card">
            <h5>Modifiers</h5>
            <div>
                <OfficeCheckbox v-model="disabled" label="Disabled" style="margin: 5px; display: inline-block"/>
                <OfficeCheckbox v-model="required" label="Required" style="margin: 5px; display: inline-block"/>
                <OfficeCheckbox v-model="checked" label="Checked" style="margin: 5px; display: inline-block"/>
            </div>
        </div>

        <div class="card">
            <h5>Checkbox</h5>
            <div>
                <OfficeCheckbox v-model="checkboxChecked" :disabled="disabled" label="Checkbox"
                                style="display: inline-block"/>
                <OfficeLabel :disabled="disabled" style="display: inline-block; margin-left: 50px;">The checkbox is {{ checkboxChecked ? "checked" : "not checked"}}</OfficeLabel>
            </div>
        </div>

        <div class="card">
            <h5>Buttons</h5>
            <div>
                <OfficeButton label="Default Button" :disabled="disabled" :checked="checked" style="margin: 5px;"/>
                <OfficeButton label="Primary Button" :primary="true" :disabled="disabled" :checked="checked"
                              style="margin: 5px;"/>
            </div>
        </div>

        <div class="card">
            <h5>Label</h5>
            <div>
                <OfficeLabel :disabled="disabled" :required="required">TestLabel</OfficeLabel>
            </div>
        </div>

        <div class="card">
            <h5>Image</h5>
            <div>
                <OfficeImage src="http://placehold.it/350x150" alt="Example" maximizeFrame/>
            </div>
        </div>

        <div class="card">
            <h5>Icon</h5>
            <div>
                <OfficeIcon iconName="BingLogo"/>
                <OfficeIcon iconName="CheckMark"/>
            </div>
        </div>

        <div class="card">
            <h5>Text Fields</h5>
            <div>
                <OfficeTextField :disabled="disabled" label="Single Line with Icon" :iconProps="iProp"
                                 v-model="txt"></OfficeTextField>
                <OfficeTextField :disabled="disabled" label="Single Line Required and Underlined" underlined required
                                 v-model="txt"></OfficeTextField>
                <OfficeTextField :disabled="disabled" label="Single Line with Error" hasError
                                 errorMessage="example Alert"
                                 v-model="txt"></OfficeTextField>
            </div>
        </div>

        <div class="card">
            <h5>Choice Group</h5>
            <OfficeChoiceGroup :disabled="disabled"
                               :options="[{key: 'A', text: 'Option A'}, {key: 'B', text: 'Option B'}]"
                               defaultSelectedKey="A"></OfficeChoiceGroup>

        </div>

        <div class="card">
            <h5>Toggle</h5>
            <OfficeToggle :disabled="disabled" label="Normal Toggle" onText="on" offText="off" v-model="toggleChecked"></OfficeToggle>
            <OfficeLabel :disabled="disabled" :required="required">Toggle: {{ toggleChecked ? 'on' : 'off' }}</OfficeLabel>
        </div>
    </div>
</template>

<script lang="ts">
    import OfficeChoiceGroupOption from "@/components/ChoiceGroup/ChoiceGroupOption/OfficeChoiceGroupOption.vue";
    import OfficeChoiceGroup from "@/components/ChoiceGroup/OfficeChoiceGroup.vue";
    import OfficeIcon from "@/components/Icon/OfficeIcon.vue";
    import {ImageFit} from "@/components/Image/OfficeImage.types";
    import OfficeImage from "@/components/Image/OfficeImage.vue";
    import OfficeLabel from "@/components/Label/OfficeLabel.vue";
    import OfficeToggle from "@/components/Toggle/OfficeToggle.vue";

    import {Component, Prop, Vue} from "vue-property-decorator";
    import OfficeButton from "./Button/OfficeButton.vue";
    import OfficeCheckbox from "./Checkbox/OfficeCheckbox.vue";
    import OfficeTextField from "@/components/TextField/OfficeTextField.vue";

    @Component({
        components: {
            OfficeToggle,
            OfficeChoiceGroupOption,
            OfficeChoiceGroup,
            OfficeIcon,
            OfficeImage,
            OfficeLabel,
            OfficeCheckbox,
            OfficeButton,
            OfficeTextField
        },
    })
    export default class Overview extends Vue {
        @Prop() private msg!: string;
        private txt: string = "test";
        private iProp = {
            iconName: "edit"
        };

        private toggleChecked: boolean = true;

        private currentImageFit: ImageFit = ImageFit.contain;

        private checked: boolean = false;
        private disabled: boolean = false;
        private required: boolean = false;

        private checkboxChecked: boolean = false;
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        margin: 20px 5px;
        background-color: #f9f9f9;
    }

    .card > h5 {
        padding: 2px 0;
        background-color: #004578;
        color: white;
        margin: 0;
    }

    .card > div {
        padding: 10px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
</style>
