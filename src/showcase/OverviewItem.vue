<template>
    <div class="card">
        <div class="titlebar">
            <div class="title">
                <h5>{{title}}</h5>
            </div>
        </div>
        <div class="settings" v-if="availableOptions.length > 0">
            <component v-for="option of availableOptions"
                       v-model="option.value"
                       :options="option.options"
                       :propName="option.name"
                       :is="option.type"
                       :key="option.name"></component>
        </div>
        <div class="content" :style="contentStyle">
            <slot v-bind="currentProps"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import BooleanToggle from "@/showcase/BooleanToggle.vue";
    import StringInput from "@/showcase/StringInput.vue";
    import {Component, Vue, Prop} from "vue-property-decorator";
    import OfficeIcon from "../components/Icon/OfficeIcon.vue";
    import OfficeTextField from "../components/TextField/OfficeTextField.vue";
    import OfficeToggle from "../components/Toggle/OfficeToggle.vue";
    import OfficeLabel from "../components/Label/OfficeLabel.vue";

    interface IItemOption {
        type: string;
        value?: any;
        options?: any;
    }

    export interface IItemOptions {
        [key: string]: IItemOption;
    }

    export interface IAvailableOptions {
        type: string;
        name: string;
        value?: any;
        options?: any;
    }

    @Component({
        components: {
            OfficeToggle,
            OfficeIcon,
            OfficeTextField,
            OfficeLabel,
            BooleanToggle,
            StringInput
        }
    })
    export default class OverviewItem extends Vue {
        @Prop({type: String, default: ""}) private title!: string;
        @Prop({type: Object, default: null}) private options?: any;
        @Prop({type: Object, default: null}) private contentStyle?: any;

        private availableOptions: IAvailableOptions[] = this.options
            ? Object.keys(this.options).map((key) => this.mapOption(key, this.options[key])) as any
            : [];

        private mapOption(key: string, option: IItemOption): IAvailableOptions {
            return {
                name: key,
                value: option.value,
                type: option.type,
                options: option.options
            };
        }

        private get currentProps() {
            const result: { [key: string]: any } = {};

            this.availableOptions
                .forEach((s) => result[s.name] = s.value);

            return result;
        }
    }
</script>

<style scoped>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        margin: 20px 5px;
        background-color: #f9f9f9;
    }

    .card > .titlebar > .title > h5 {
        padding: 2px 0;
        margin: 0;
    }

    .card > .titlebar > .icon > i {
        padding: 2px 0;
        margin: 2px;
        cursor: pointer;
    }

    .card > .titlebar > .icon {
        width: 33.3%;
        display: flex;
        justify-content: flex-end;

    }

    .card > .titlebar > .title {
        width: 33.3%;

    }

    .titlebar {
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        background-color: #004578;
        color: white;
    }

    .card > .content {
        padding: 10px;
    }

    .card > .settings {
        padding: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
</style>

<style>
    .overview-input-box {
        display: flex;
        align-items: center;

        margin-top: 5px;
        margin-right: 5px;
        margin-bottom: 0;

        padding: 5px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        background-color: #fff;
        border-radius: 2px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
</style>
