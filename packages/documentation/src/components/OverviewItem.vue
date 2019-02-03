<template>
    <Card :title="title">
        <div id="settings" v-if="availableOptions.length > 0">
            <component v-for="option of availableOptions"
                       v-model="option.value"
                       :options="option.options"
                       :propName="option.name"
                       :is="option.type"
                       :key="option.name"></component>
        </div>
        <div id="content" :style="contentStyle">
            <slot v-bind="currentProps"></slot>
        </div>
    </Card>
</template>

<script lang="ts">
    import Card                   from "@/components/Card.vue";
    import BooleanToggle          from "./DemoInputs/ToggleInput.vue";
    import StringInput            from "./DemoInputs/StringInput.vue";
    import {Component, Vue, Prop} from "vue-property-decorator";

    import {OfficeIcon, OfficeTextField, OfficeToggle, OfficeLabel} from "office-vue-fabric";

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
            Card,
            OfficeToggle,
            OfficeIcon,
            OfficeTextField,
            OfficeLabel,
            BooleanToggle,
            StringInput,
        },
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
                name:    key,
                value:   option.value,
                type:    option.type,
                options: option.options,
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
    #content {
        margin-top: 15px;
    }

    #settings {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        padding-bottom: 15px;
    }
</style>

<style>
    .overview-input-box {
        display: flex;
        align-items: center;

        margin-top: 5px;
        margin-right: 5px;
        padding: 5px;

        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
        background-color: white;
        border-radius: 3px;
    }
</style>
