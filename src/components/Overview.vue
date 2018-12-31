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
            <OfficeLabel :disabled="disabled" style="display: inline-block; margin-left: 50px;">The checkbox is {{
                checkboxChecked ? "checked" : "not checked"}}
            </OfficeLabel>
        </OverviewItem>

        <OverviewItem title="Buttons">
            <OfficeButton @click="clicked" label="Default Button" :disabled="disabled" :checked="checked"
                          style="margin: 5px;"/>
            <OfficeButton @click="clicked" label="Primary Button" :primary="true" :disabled="disabled"
                          :checked="checked"
                          style="margin: 5px;"/>
        </OverviewItem>

        <OverviewItem title="Buttons">
            <OfficeLabel :disabled="disabled" :required="required">TestLabel</OfficeLabel>
        </OverviewItem>

        <OverviewItem title="Image">
            <OfficeImage src="http://placehold.it/350x150" alt="Example" maximizeFrame/>
        </OverviewItem>

        <OverviewItem title="Icon">
            <OfficeIcon iconName="BingLogo"/>
            <OfficeIcon iconName="CheckMark"/>
        </OverviewItem>

        <OverviewItem title="Text Field" :config="officeTextFieldOverviewConfig" >
            <template slot-scope="props">
                <OfficeTextField v-bind="props" :disabled="disabled" label="Example Input" v-model="txt"></OfficeTextField>
            </template>
        </OverviewItem>

        <OverviewItem title="Choice Group">
            <OfficeChoiceGroup :disabled="disabled"
                               :options="[{key: 'A', text: 'Option A'}, {key: 'B', text: 'Option B'}]"
                               defaultSelectedKey="A"></OfficeChoiceGroup>
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

        <OfficeLabel style="margin-top: 30px">This is the demo page for
            <OfficeLink href="https://github.com/s-bauer/office-ui-fabric-vue">office-ui-fabric-vue</OfficeLink>
        </OfficeLabel>
    </div>
</template>

<script lang="ts">
    import OfficeChoiceGroupOption from "@/components/ChoiceGroup/ChoiceGroupOption/OfficeChoiceGroupOption.vue";
    import OfficeChoiceGroup from "@/components/ChoiceGroup/OfficeChoiceGroup.vue";
    import OfficeIcon from "@/components/Icon/OfficeIcon.vue";
    import {ImageFit} from "@/components/Image/OfficeImage.types";
    import OfficeImage from "@/components/Image/OfficeImage.vue";
    import OfficeLabel from "@/components/Label/OfficeLabel.vue";
    import OfficeLink from "@/components/Link/OfficeLink.vue";
    import OfficeSlider from "@/components/Slider/OfficeSlider.vue";
    import OfficeToggle from "@/components/Toggle/OfficeToggle.vue";

    import {Component, Prop, Vue} from "vue-property-decorator";
    import OfficeButton from "./Button/OfficeButton.vue";
    import OfficeCheckbox from "./Checkbox/OfficeCheckbox.vue";
    import OfficeTextField from "@/components/TextField/OfficeTextField.vue";
    import IOverviewItemConfig from "@/components/IOverviewItemConfig";
    import OverviewItem from "@/components/OverviewItem.vue";

    @Component({
        components: {
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

        private checkboxChecked: boolean = false;

        private sliderValue: number = 50;

        private clicked() {
            alert("clicked!");
        }

        get officeTextFieldOverviewConfig(): IOverviewItemConfig {
            return {
                options: [
                    {
                        label: "Multiline",
                        prop: {
                            multiline: true
                        }
                    },
                    {
                        label: "Required",
                        prop: {
                            required: true
                        }
                    },
                    {
                        label: "Resizable",
                        prop: {
                            resizable: true
                        }
                    },
                    {
                        label: "Underlined",
                        prop: {
                            underlined: true
                        }
                    },
                    {
                        label: "Prefix",
                        prop: {
                            prefix: "http://"
                        }
                    },
                    {
                        label: "Suffix",
                        prop: {
                            suffix: ".com"
                        }
                    },
                    {
                        label: "Error Message",
                        prop: {
                            errorMessage: "example error happened"
                        }
                    },
                    {
                        label: "Borderless",
                        prop: {
                            borderless: true
                        }
                    },
                    {
                        label: "Icon",
                        prop: {
                            iconProps: this.iProp
                        }
                    },
                    {
                        label: "Auto Adjust Height",
                        prop: {
                            autoAdjustHeight: true
                        }
                    },
                ]
            };
        }
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

    .vertical-slider {
        height: 150px;
        display: inline-block;
        width: 50px;
    }
</style>
