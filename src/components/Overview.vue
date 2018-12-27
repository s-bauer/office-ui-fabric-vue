<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        Modifiers
        <OfficeCheckbox v-model="disabled" label="Disabled" style="margin: 5px 0"/>
        <OfficeCheckbox v-model="required" label="Required" style="margin: 5px 0"/>
        <OfficeCheckbox v-model="checked" label="Checked" style="margin: 5px 0"/>
        <hr>
        <OfficeCheckbox v-model="checkboxChecked" :disabled="disabled" label="Checkbox"/>
        <OfficeLabel :disabled="disabled">The checkbox is {{ checkboxChecked ? "checked" : "not checked"}}</OfficeLabel>
        <hr>
        <OfficeButton label="TestButton" :disabled="disabled" :checked="checked" style="margin: 5px;"/>
        <OfficeButton label="TestButton" :primary="true" :disabled="disabled" :checked="checked" style="margin: 5px;"/>
        <hr>
        <OfficeLabel :disabled="disabled" :required="required">TestLabel</OfficeLabel>
    </div>
</template>

<script lang="ts">
    import OfficeLabel from "@/components/Label/OfficeLabel.vue";
    import {Component, Prop, Vue} from "vue-property-decorator";
    import OfficeButton from "./Button/OfficeButton.vue";
    import OfficeCheckbox from "./Checkbox/OfficeCheckbox.vue";

    @Component({
        components: {
            OfficeLabel,
            OfficeCheckbox,
            OfficeButton
        },
    })
    export default class Overview extends Vue {
        @Prop() private msg!: string;

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

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
