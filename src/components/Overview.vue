import {ImageFit} from "./Image/OfficeImage.types";
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>

        <div class="card">
            Modifiers
            <OfficeCheckbox v-model="disabled" label="Disabled" style="margin: 5px 0"/>
            <OfficeCheckbox v-model="required" label="Required" style="margin: 5px 0"/>
            <OfficeCheckbox v-model="checked" label="Checked" style="margin: 5px 0"/>
        </div>

        <div class="card">
            Checkbox
            <OfficeCheckbox v-model="checkboxChecked" :disabled="disabled" label="Checkbox" style="display: inline-block"/>
            <OfficeLabel :disabled="disabled" style="display: inline-block">The checkbox is {{ checkboxChecked ? "checked" : "not checked"}}</OfficeLabel>
        </div>

        <hr>

        <hr>
        <OfficeButton label="TestButton" :disabled="disabled" :checked="checked" style="margin: 5px;"/>
        <OfficeButton label="TestButton" :primary="true" :disabled="disabled" :checked="checked" style="margin: 5px;"/>
        <hr>
        <OfficeLabel :disabled="disabled" :required="required">TestLabel</OfficeLabel>
        <hr>
        <OfficeImage src="http://placehold.it/350x150" alt="Example" maximizeFrame/>
        <hr>
        <OfficeIcon iconName="BingLogo"/>
        <hr>
        <OfficeTextField :disabled="disabled" label="Single Line with Icon" :iconProps="iProp"
                         v-model="txt"></OfficeTextField>
        <OfficeTextField :disabled="disabled" label="Single Line Required and Underlined" underlined required
                         v-model="txt"></OfficeTextField>
        <OfficeTextField :disabled="disabled" label="Single Line with Error" hasError errorMessage="example Alert"
                         v-model="txt"></OfficeTextField>
        <hr>
        <OfficeChoiceGroup :disabled="disabled" :options="[{key: 'A', text: 'Option A'}, {key: 'B', text: 'Option B'}]"
                           defaultSelectedKey="A"></OfficeChoiceGroup>
    </div>
</template>

<script lang="ts">
    import OfficeChoiceGroupOption from "@/components/ChoiceGroup/ChoiceGroupOption/OfficeChoiceGroupOption.vue";
    import OfficeChoiceGroup from "@/components/ChoiceGroup/OfficeChoiceGroup.vue";
    import OfficeIcon from "@/components/Icon/OfficeIcon.vue";
    import {ImageFit} from "@/components/Image/OfficeImage.types";
    import OfficeImage from "@/components/Image/OfficeImage.vue";
    import OfficeLabel from "@/components/Label/OfficeLabel.vue";

    import {Component, Prop, Vue} from "vue-property-decorator";
    import OfficeButton from "./Button/OfficeButton.vue";
    import OfficeCheckbox from "./Checkbox/OfficeCheckbox.vue";
    import OfficeTextField from "@/components/TextField/OfficeTextField.vue";

    @Component({
        components: {
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
        padding: 5px;
        margin: 10px 20px;
        background-color: #f9f9f9;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
</style>
