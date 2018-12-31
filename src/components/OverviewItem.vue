<template>
    <div class="card">
        <div class="titlebar">
            <div class="icon">
            </div>
            <div class="title">
                <h5>{{title}}</h5>
            </div>
            <div class="icon">
                <OfficeIcon v-if="config != null" iconName="Settings"
                            @click.native="settingsOpen = !settingsOpen"></OfficeIcon>
            </div>
        </div>
        <div class="settings" v-if="settingsOpen">
            <template v-for="option in optionsActive">
                <div class="setting">
                    <OfficeToggle v-on:change="setProps" :label="option.label" v-model="option.active"></OfficeToggle>
                </div>
            </template>
        </div>
        <div class="content">
            <slot v-bind="currentProps"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";
    import OfficeIcon from "@/components/Icon/OfficeIcon.vue";
    import IOverviewItemConfig from "@/components/IOverviewItemConfig";
    import OfficeTextField from "@/components/TextField/OfficeTextField.vue";
    import OfficeToggle from "@/components/Toggle/OfficeToggle.vue";

    @Component({
        components: {
            OfficeToggle,
            OfficeIcon,
            OfficeTextField
        }
    })
    export default class OverviewItem extends Vue {
        @Prop() private title!: string;
        @Prop({type: Object, default: null}) private config!: IOverviewItemConfig;
        private currentProps = { };
        private optionsActive: object[] = this.config != null
            ? this.props.map(el => (
                {
                    active: false,
                    value: el.prop,
                    label: el.label
                }))
            : [];

        private settingsOpen: boolean = false;

        public setProps() {
            this.currentProps = this.activeOptionProps
        }
        get props() {
            return this.config.options;
        }

        get activeOptionProps() {
            let result = {};
            let props = this.optionsActive
                .filter(el => el.active)
                .map(el => el.value);
            for (let i = 0; i < props.length; i++) {
                result[Object.keys(props[i])[0]] = props[i][Object.keys(props[i])[0]];
            }
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
        justify-content: space-between;
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
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .card > .settings > .setting {
        padding: 10px;
        display: flex;
        width: 20%;
        margin-top: 10px;
        border: 1px black solid;
        justify-content: center;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
</style>
