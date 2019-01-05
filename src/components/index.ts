import OfficeButton from "@/components/Button/OfficeButton.vue";
import OfficeCheckbox from "@/components/Checkbox/OfficeCheckbox.vue";
import OfficeChoiceGroup from "@/components/ChoiceGroup/OfficeChoiceGroup.vue";
import FocusTrapZone from "@/components/FocusTrapZone/FocusTrapZone.vue";
import OfficeIcon from "@/components/Icon/OfficeIcon.vue";
import OfficeImage from "@/components/Image/OfficeImage.vue";
import OfficeLabel from "@/components/Label/OfficeLabel.vue";
import OfficeLayer from "@/components/Layer/OfficeLayer.vue";
import OfficeLink from "@/components/Link/OfficeLink.vue";
import OfficeOverlay from "@/components/Overlay/OfficeOverlay.vue";
import OfficeSlider from "@/components/Slider/OfficeSlider.vue";
import OfficeTextField from "@/components/TextField/OfficeTextField.vue";
import OfficeToggle from "@/components/Toggle/OfficeToggle.vue";
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
};

Object.keys(components).forEach((name) => {
    Vue.component(name, components[name]);
});

// Based on Commit 98cf89fcc7fbe6ece43055738409c390231ab5b4 (2018-12-29) from office-ui-fabric-react
