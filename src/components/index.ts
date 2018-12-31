import OfficeButton from "@/components/Button/OfficeButton.vue";
import OfficeCheckbox from "@/components/Checkbox/OfficeCheckbox.vue";
import OfficeChoiceGroup from "@/components/ChoiceGroup/OfficeChoiceGroup.vue";
import OfficeIcon from "@/components/Icon/OfficeIcon.vue";
import OfficeImage from "@/components/Image/OfficeImage.vue";
import OfficeLabel from "@/components/Label/OfficeLabel.vue";
import OfficeTextField from "@/components/TextField/OfficeTextField.vue";
import OfficeToggle from "@/components/Toggle/OfficeToggle.vue";

const components: { [id: string]: any } = {
    OfficeButton,
    OfficeCheckbox,
    OfficeChoiceGroup,
    OfficeIcon,
    OfficeImage,
    OfficeLabel,
    OfficeTextField,
    OfficeToggle
};

export const OfficeFabric = {
    install(vue: any) {
        Object.keys(components).forEach((name) => {
            vue.component(name, components[name]);
        });
    }
};
