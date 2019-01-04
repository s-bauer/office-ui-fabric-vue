<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <OverviewItem title="Modifiers">
            <OfficeCheckbox v-model="disabled" label="Disabled" style="margin: 5px; display: inline-block"/>
            <OfficeCheckbox v-model="required" label="Required" style="margin: 5px; display: inline-block"/>
            <OfficeCheckbox v-model="checked" label="Checked" style="margin: 5px; display: inline-block"/>
        </OverviewItem>

        <OverviewItem title="Checkbox">
            <OfficeCheckbox v-model="checkboxChecked" :disabled="disabled" label="Checkbox"
                            style="display: inline-block"/>
            <OfficeLabel :disabled="disabled" style="display: inline-block; margin-left: 50px;">The checkbox is
                {{ checkboxChecked ? "checked" : "not checked"}}
            </OfficeLabel>
        </OverviewItem>

        <OverviewItem title="Buttons">
            <OfficeButton @click="clicked" label="Default Button" :disabled="disabled" :checked="checked"
                          style="margin: 5px;"/>
            <OfficeButton @click="clicked" label="Primary Button" :primary="true" :disabled="disabled"
                          :checked="checked"
                          style="margin: 5px;"/>
        </OverviewItem>

        <OverviewItem title="Label">
            <OfficeLabel :disabled="disabled" :required="required">TestLabel</OfficeLabel>
        </OverviewItem>

        <OverviewItem title="Image">
            <OfficeImage src="http://placehold.it/350x150" alt="Example" maximizeFrame/>
        </OverviewItem>

        <OverviewItem title="Icon" :options="iconOptions">
            <template slot-scope="props">
                <OfficeIcon v-bind="props" style="font-size: 50px;"/>
            </template>
        </OverviewItem>

        <OverviewItem title="Text Field" :options="textFieldOptions">
            <template slot-scope="props">
                <OfficeTextField v-bind="props"/>
            </template>
        </OverviewItem>

        <OverviewItem title="Choice Group" :options="choiceGroupOptions">
            <template slot-scope="props">
                <OfficeChoiceGroup
                        v-bind="props"
                        :options="[{key: 'A', text: 'Option A'}, {key: 'B', text: 'Option B'}]"
                        defaultSelectedKey="A"></OfficeChoiceGroup>
            </template>
        </OverviewItem>

        <OverviewItem title="Toggle">
            <OfficeToggle :disabled="disabled" label="Normal Toggle" onText="on" offText="off"
                          v-model="toggleChecked"></OfficeToggle>
            <OfficeLabel :disabled="disabled" :required="required">Toggle: {{ toggleChecked ? 'on' : 'off' }}
            </OfficeLabel>
        </OverviewItem>

        <OverviewItem title="Links">
            A Link to
            <OfficeLink href="https://google.com">Google</OfficeLink>
            <br>
            Another link without href
            <OfficeLink @click="clicked">IS HERE</OfficeLink>
            <br>
            And a
            <OfficeLink disabled>Disabled Link!</OfficeLink>
        </OverviewItem>

        <OverviewItem title="Slider">
            <OfficeSlider :min="0" :max="10" v-model="sliderValue"></OfficeSlider>
            <OfficeSlider :min="0" :max="10" v-model="sliderValue" showValue></OfficeSlider>
            <OfficeSlider :min="0" :max="10" v-model="sliderValue" showValue disabled></OfficeSlider>
            <OfficeSlider :min="0" :max="10" v-model="sliderValue" vertical showValue
                          class="vertical-slider"></OfficeSlider>
            <OfficeSlider :min="0" :max="10" v-model="sliderValue" vertical showValue disabled
                          class="vertical-slider"></OfficeSlider>
            <OfficeLabel>Value: {{sliderValue}}</OfficeLabel>
        </OverviewItem>

        <OverviewItem title="FocusTrapZone">
            <FocusTrapZoneExample/>
        </OverviewItem>

        <OverviewItem title="Layer" >
            <OfficeCheckbox label="showLayer" v-model="showLayer"/>

            <OfficeLayer v-if="showLayer" @click="alert('test')" filterEvents>
                <OfficeButton label="LayerButton" primary></OfficeButton>
                <OfficeLabel>Test Layer!</OfficeLabel>
            </OfficeLayer>
        </OverviewItem>

        <OfficeLabel style="margin-top: 30px">This is the demo page for
            <OfficeLink href="https://github.com/s-bauer/office-ui-fabric-vue">office-ui-fabric-vue</OfficeLink>
        </OfficeLabel>
    </div>
</template>

<script lang="ts">
    import OfficeLayer from "@/components/Layer/OfficeLayer.vue";
    import BooleanToggle from "@/showcase/BooleanToggle.vue";
    import FocusTrapZoneExample from "@/showcase/FocusTrapZoneExample.vue";
    import {ItemTypes} from "@/showcase/ItemTypes";
    import {IItemOptions} from "@/showcase/OverviewItem.vue";
    import StringInput from "@/showcase/StringInput.vue";
    import OfficeChoiceGroupOption from "../components/ChoiceGroup/ChoiceGroupOption/OfficeChoiceGroupOption.vue";
    import OfficeChoiceGroup from "../components/ChoiceGroup/OfficeChoiceGroup.vue";
    import OfficeIcon from "../components/Icon/OfficeIcon.vue";
    import {ImageFit} from "../components/Image/OfficeImage.types";
    import OfficeImage from "../components/Image/OfficeImage.vue";
    import OfficeLabel from "../components/Label/OfficeLabel.vue";
    import OfficeLink from "../components/Link/OfficeLink.vue";
    import OfficeSlider from "../components/Slider/OfficeSlider.vue";
    import OfficeToggle from "../components/Toggle/OfficeToggle.vue";

    import {Component, Prop, Vue} from "vue-property-decorator";
    import OfficeButton from "../components/Button/OfficeButton.vue";
    import OfficeCheckbox from "../components/Checkbox/OfficeCheckbox.vue";
    import OfficeTextField from "../components/TextField/OfficeTextField.vue";
    import OverviewItem from "./OverviewItem.vue";

    @Component({
        components: {
            OfficeLayer,
            FocusTrapZoneExample,
            OfficeSlider,
            OfficeLink,
            OfficeToggle,
            OfficeChoiceGroupOption,
            OfficeChoiceGroup,
            OfficeIcon,
            OfficeImage,
            OfficeLabel,
            OfficeCheckbox,
            OfficeButton,
            OfficeTextField,
            OverviewItem
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
        private showLayer: boolean = false;

        private checkboxChecked: boolean = false;

        private sliderValue: number = 5;

        private clicked() {
            alert("clicked!");
        }

        private mounted() {
            window.addEventListener("click", () => {alert("Click!");});
        }

        get textFieldOptions(): IItemOptions {
            return {
                disabled: {type: ItemTypes.BooleanToggle},
                multiline: {type: ItemTypes.BooleanToggle},
                required: {type: ItemTypes.BooleanToggle},
                resizable: {type: ItemTypes.BooleanToggle},
                underlined: {type: ItemTypes.BooleanToggle},
                borderless: {type: ItemTypes.BooleanToggle},
                autoAdjustHeight: {type: ItemTypes.BooleanToggle},
                iconProps: {type: ItemTypes.BooleanToggle, options: {value: this.iProp}},
                label: {type: ItemTypes.StringInput, value: "Example Input", options: {width: "250px"}},
                errorMessage: {type: ItemTypes.StringInput, value: "This input is invalid!", options: {width: "250px"}},
                prefix: {type: ItemTypes.StringInput, value: ""},
                suffix: {type: ItemTypes.StringInput, value: ""},
            };
        }

        get choiceGroupOptions(): IItemOptions {
            return {
                disabled: {type: ItemTypes.BooleanToggle},
            };
        }

        get iconOptions(): IItemOptions {
            return {
                iconName: {type: ItemTypes.StringInput, value: "BingLogo"},
            };
        }
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .vertical-slider {
        height: 150px;
        display: inline-block;
        width: 50px;
    }
</style>
