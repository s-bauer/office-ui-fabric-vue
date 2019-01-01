<template>
    <div>
        <OfficeButton v-if="!isTrapZone" label="Go to Trap Zone" @click="onClick"/>
        <component :is="compType">
            <OfficeTextField tab-index="1"/>
            <OfficeTextField tab-index="2"/>
            <OfficeTextField tab-index="3"/>
        </component>
        <OfficeButton v-if="isTrapZone" label="Exit Trap Zone" @click="onClick"/>
    </div>
</template>

<script lang="ts">
    import OfficeButton from "@/components/Button/OfficeButton.vue";
    import OfficeTextField from "@/components/TextField/OfficeTextField.vue";
    import OfficeToggle from "@/components/Toggle/OfficeToggle.vue";
    import {Component, Vue} from "vue-property-decorator";
    import FocusTrapZone from "../components/FocusTrapZone/FocusTrapZone.vue";

    @Component({
        components: {
            FocusTrapZone,
            OfficeTextField,
            OfficeButton,
            OfficeToggle
        }
    })
    export default class FocusTrapZoneExample extends Vue {
        private isTrapZone: boolean = false;

        private get compType() {
            return this.isTrapZone ? "FocusTrapZone" : "div";
        }

        private onClick() {
            this.isTrapZone = !this.isTrapZone;
        }
    }

</script>
