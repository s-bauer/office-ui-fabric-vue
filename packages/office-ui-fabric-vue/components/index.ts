import OfficeSpinner from "@components/Spinner/OfficeSpinner.vue";
import OfficeButton from "./Button/OfficeButton.vue";
import OfficeCheckbox from "./Checkbox/OfficeCheckbox.vue";
import OfficeChoiceGroup from "./ChoiceGroup/OfficeChoiceGroup.vue";
import FocusTrapZone from "./FocusTrapZone/FocusTrapZone.vue";
import OfficeIcon from "./Icon/OfficeIcon.vue";
import OfficeImage from "./Image/OfficeImage.vue";
import OfficeLabel from "./Label/OfficeLabel.vue";
import OfficeLayer from "./Layer/OfficeLayer.vue";
import OfficeLink from "./Link/OfficeLink.vue";
import OfficeOverlay from "./Overlay/OfficeOverlay.vue";
import OfficeSlider from "./Slider/OfficeSlider.vue";
import OfficeTextField from "./TextField/OfficeTextField.vue";
import OfficeToggle from "./Toggle/OfficeToggle.vue";
import Vue from "vue";

const components: { [id: string]: any } = {
    OfficeButton,
    OfficeCheckbox,
    OfficeChoiceGroup,
    FocusTrapZone,
    OfficeIcon,
    OfficeImage,
    OfficeLabel,
    OfficeLink,
    OfficeSlider,
    OfficeTextField,
    OfficeToggle,
    OfficeLayer,
    OfficeOverlay,
    OfficeSpinner,
};

Object.keys(components).forEach((name) => {
    Vue.component(name, components[name]);
});

// Based on Commit 98cf89fcc7fbe6ece43055738409c390231ab5b4 (2018-12-29) from office-ui-fabric-react
