import {SpinnerSize} from "../office-ui-fabric-vue/components/Spinner/OfficeSpinner.types";
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

        <OverviewItem title="Overlay" :contentStyle="{ position: 'relative'}">
            <OfficeToggle onText="Hide the Overlay" offText="Show the Overlay" v-model="showOverlay">Test</OfficeToggle>
            <OfficeToggle onText="Hide Dark Overlay" offText="Show Dark Overlay" v-model="showDarkOverlay">Test
            </OfficeToggle>
            <OfficeOverlay :visible="showOverlay" @click.native="showOverlay = false"
                           style="display: flex; justify-content: left; align-items: center;">
                <span>Content inside the Overlay</span>
            </OfficeOverlay>
            <OfficeOverlay :visible="showDarkOverlay" @click.native="showDarkOverlay = false" isDarkThemed
                           style="display: flex; justify-content: left; align-items: center;">
                <span>Content inside the dark Overlay</span>
            </OfficeOverlay>
        </OverviewItem>

        <OverviewItem title="Layer">
            <OfficeCheckbox label="Show Layer" v-model="showLayer" style="margin: 5px 0"/>
            <OfficeCheckbox label="Show Layer Box" v-model="showLayerBox" style="margin: 5px 0"/>
            <OfficeCheckbox label="Show Layer in Box" v-model="showLayerInBox" style="margin: 5px 0"/>

            <OfficeLayer v-if="showLayer" @click="alert('test')" filterEvents>
                <OfficeButton label="LayerButton" primary></OfficeButton>
                <OfficeLabel>Test Layer!</OfficeLabel>
            </OfficeLayer>

            <OfficeLayerHost v-show="showLayerBox" hostId="testContainer"
                             style="border: 1px solid red; height: 100px; margin: 10px 0">
            </OfficeLayerHost>

            <OfficeLayer v-if="showLayerInBox" @click="alert('test')" filterEvents hostId="testContainer">
                <OfficeButton label="LayerButton" primary></OfficeButton>
                <OfficeLabel>Test Layer!</OfficeLabel>
            </OfficeLayer>
        </OverviewItem>

        <OverviewItem title="Spinner">
            <OfficeSpinner :size="0" labelPosition="bottom" label="Size 0" style="margin: 5px 0"></OfficeSpinner>
            <OfficeSpinner :size="1" labelPosition="bottom" label="Size 1" style="margin: 5px 0"></OfficeSpinner>
            <OfficeSpinner :size="2" labelPosition="bottom" label="Size 2" style="margin: 5px 0"></OfficeSpinner>
            <OfficeSpinner :size="3" labelPosition="bottom" label="Size 3" style="margin: 5px 0"></OfficeSpinner>
        </OverviewItem>


        <OverviewItem title="Progress Indicator">
            <OfficeLabel>Indeterminate</OfficeLabel>
            <OfficeProgressIndicator indeterminate></OfficeProgressIndicator>
            <OfficeLabel>Normal</OfficeLabel>
            <OfficeProgressIndicator :percentageComplete="progressValue"></OfficeProgressIndicator>
            <OfficeLabel>With Label and Description</OfficeLabel>
            <OfficeProgressIndicator :percentageComplete="progressValue">
                <template slot="label">I'm a label</template>
                <template slot="description">I'm a description</template>
            </OfficeProgressIndicator>
        </OverviewItem>

        <OverviewItem title="Modal" :options="modalOptions">
            <template slot-scope="props">
                <OfficeButton @click="openModal" label="Open Modal"></OfficeButton>
                <OfficeModal v-bind="props" :isBlocking="false" :isOpen="modalActive">
                    <div style="background-color: white; width: 80%; height: 80%;">
                        <h1>Lorem Ipsum</h1>
                        <OfficeButton @click="closeModal" label="Close Modal"></OfficeButton>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit
                            amet, vulputate in leo. Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis. Fusce tempor
                            sagittis nunc, ut interdum ipsum vestibulum non. Proin dolor elit, aliquam eget tincidunt non, vestibulum
                            ut turpis. In hac habitasse platea dictumst. In a odio eget enim porttitor maximus. Aliquam nulla nibh,
                            ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex lectus, maximus in mollis ac, luctus vel
                            eros. Vivamus ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit, et volutpat eros dui et
                            ante. Quisque ultricies mi nec leo ultricies mollis. Vivamus egestas volutpat lacinia. Quisque pharetra
                            eleifend efficitur.{' '}
                        </p>
                        <p>
                            Mauris at nunc eget lectus lobortis facilisis et eget magna. Vestibulum venenatis augue sapien, rhoncus
                            faucibus magna semper eget. Proin rutrum libero sagittis sapien aliquet auctor. Suspendisse tristique a
                            magna at facilisis. Duis rhoncus feugiat magna in rutrum. Suspendisse semper, dolor et vestibulum lacinia,
                            nunc felis malesuada ex, nec hendrerit justo ex et massa. Quisque quis mollis nulla. Nam commodo est
                            ornare, rhoncus odio eu, pharetra tellus. Nunc sed velit mi.{' '}
                        </p>
                        <p>
                            Sed condimentum ultricies turpis convallis pharetra. Sed sagittis quam pharetra luctus porttitor. Cras vel
                            consequat lectus. Sed nec fringilla urna, a aliquet libero. Aenean sed nisl purus. Vivamus vulputate felis
                            et odio efficitur suscipit. Ut volutpat dictum lectus, ac rutrum massa accumsan at. Sed pharetra auctor
                            finibus. In augue libero, commodo vitae nisi non, sagittis convallis ante. Phasellus malesuada eleifend
                            mollis. Curabitur ultricies leo ac metus venenatis elementum.{' '}
                        </p>
                        <p>
                            Aenean egestas quam ut erat commodo blandit. Mauris ante nisl, pellentesque sed venenatis nec, aliquet sit
                            amet enim. Praesent vitae diam non diam aliquet tristique non ut arcu. Pellentesque et ultrices eros.
                            Fusce diam metus, mattis eu luctus nec, facilisis vel erat. Nam a lacus quis tellus gravida euismod. Nulla
                            sed sem eget tortor cursus interdum. Sed vehicula tristique ultricies. Aenean libero purus, mollis quis
                            massa quis, eleifend dictum massa. Fusce eu sapien sit amet odio lacinia placerat. Mauris varius risus sed
                            aliquet cursus. Aenean lectus magna, tincidunt sit amet sodales a, volutpat ac leo. Morbi nisl sapien,
                            tincidunt sit amet mauris quis, sollicitudin auctor est.{' '}
                        </p>
                        <p>
                            Nam id mi justo. Nam vehicula vulputate augue, ac pretium enim rutrum ultricies. Sed aliquet accumsan
                            varius. Quisque ac auctor ligula. Fusce fringilla, odio et dignissim iaculis, est lacus ultrices risus,
                            vitae condimentum enim urna eu nunc. In risus est, mattis non suscipit at, mattis ut ante. Maecenas
                            consectetur urna vel erat maximus, non molestie massa consequat. Duis a feugiat nibh. Sed a hendrerit
                            diam, a mattis est. In augue dolor, faucibus vel metus at, convallis rhoncus dui.
                        </p>
                    </div>
                </OfficeModal>
            </template>
        </OverviewItem>

        <OfficeLabel style="margin-top: 30px">This is the demo page for
            <OfficeLink href="https://github.com/s-bauer/office-ui-fabric-vue">office-ui-fabric-vue</OfficeLink>
        </OfficeLabel>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import OfficeButton from "../office-ui-fabric-vue/components/Button/OfficeButton.vue";
    import OfficeCheckbox from "../office-ui-fabric-vue/components/Checkbox/OfficeCheckbox.vue";
    import OfficeChoiceGroup from "../office-ui-fabric-vue/components/ChoiceGroup/OfficeChoiceGroup.vue";
    import OfficeIcon from "../office-ui-fabric-vue/components/Icon/OfficeIcon.vue";
    import {ImageFit} from "../office-ui-fabric-vue/components/Image/OfficeImage.types";
    import OfficeImage from "../office-ui-fabric-vue/components/Image/OfficeImage.vue";
    import OfficeLabel from "../office-ui-fabric-vue/components/Label/OfficeLabel.vue";
    import OfficeLayer from "../office-ui-fabric-vue/components/Layer/OfficeLayer.vue";
    import OfficeLayerHost from "../office-ui-fabric-vue/components/Layer/OfficeLayerHost.vue";
    import OfficeLink from "../office-ui-fabric-vue/components/Link/OfficeLink.vue";
    import OfficeOverlay from "../office-ui-fabric-vue/components/Overlay/OfficeOverlay.vue";
    import OfficeProgressIndicator
        from "../office-ui-fabric-vue/components/ProgressIndicator/OfficeProgressIndicator.vue";
    import OfficeSlider from "../office-ui-fabric-vue/components/Slider/OfficeSlider.vue";
    import {SpinnerLabelPosition, SpinnerSize} from "../office-ui-fabric-vue/components/Spinner/OfficeSpinner.types";
    import OfficeSpinner from "../office-ui-fabric-vue/components/Spinner/OfficeSpinner.vue";
    import OfficeTextField from "../office-ui-fabric-vue/components/TextField/OfficeTextField.vue";
    import OfficeToggle from "../office-ui-fabric-vue/components/Toggle/OfficeToggle.vue";
    import FocusTrapZoneExample from "./FocusTrapZoneExample.vue";
    import {ItemTypes} from "./ItemTypes";
    import OverviewItem, {IItemOptions} from "./OverviewItem.vue";
    import OfficeChoiceGroupOption
        from "../office-ui-fabric-vue/components/ChoiceGroup/ChoiceGroupOption/OfficeChoiceGroupOption.vue";
    import OfficeModal from "../office-ui-fabric-vue/components/Modal/OfficeModal.vue";

    @Component({
        components: {
            OfficeSpinner,
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
            OverviewItem,
            OfficeOverlay,
            OfficeLayerHost,
            OfficeProgressIndicator,
            OfficeModal
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
        private showLayerBox: boolean = false;
        private showLayerInBox: boolean = false;

        private checkboxChecked: boolean = false;

        private sliderValue: number = 5;

        private showOverlay: boolean = false;
        private showDarkOverlay: boolean = false;

        private spinnerSize: SpinnerSize = SpinnerSize.medium;
        private spinnerLabelPosition: SpinnerLabelPosition = "left";

        private progressValue: number = 0;
        private interval: any = 0;

        private clicked() {
            window.alert("clicked!");
        }

        private modalActive = false;

        private openModal() {
            this.modalActive = true;
        }

        private closeModal() {
            this.modalActive = false;
        }

        private mounted() {
            this.interval = window.setInterval(() => {
                if (this.progressValue > 1)
                    return this.progressValue = 0;

                this.progressValue += 0.01;
            }, 100);
        }

        private beforeDestroy() {
            window.clearInterval(this.interval);
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
                placeholder: {type: ItemTypes.StringInput, value: ""},
            };
        }

        get modalOptions(): IItemOptions {
            return {
                isDarkOverlay: {type: ItemTypes.BooleanToggle},
                isBlocking: {type: ItemTypes.BooleanToggle},
                topOffsetFixed: {type: ItemTypes.BooleanToggle},
                flex: {type: ItemTypes.BooleanToggle, value: true},
                center: {type: ItemTypes.BooleanToggle, value: true},
                forceFocusInsideTrap: {type: ItemTypes.BooleanToggle, value: true},
                ignoreExternalFocusing: {type: ItemTypes.BooleanToggle},
                isClickableOutsideFocusTrap: {type: ItemTypes.BooleanToggle}
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
