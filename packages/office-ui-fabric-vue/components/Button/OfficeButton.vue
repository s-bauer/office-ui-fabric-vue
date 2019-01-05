import OfficeDefaultButton from "@components/Button/OfficeButton.vue";
<template>
    <button :class="classNames.root" @click="$emit('click', $event)" data-is-focusable="false">
        <div :class="classNames.flexContainer">
            <div :class="classNames.textContainer">
                <div :class="classNames.label">
                    {{ label }}
                </div>
            </div>
        </div>
    </button>
</template>

<script lang="ts">
    import {ITheme} from "@styling/interfaces";
    import {loadTheme} from "@styling/styles";
    import {getBaseButtonClassNames} from "./OfficeButton.classNames";
    import {getStyles} from "./OfficeButton.style";
    import {Component, Model, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class OfficeButton extends Vue {
        private static readonly theme: ITheme = loadTheme({});

        @Model("change", {type: Boolean}) private checked: boolean = false;

        @Prop({type: Boolean}) private disabled!: boolean;
        @Prop({type: String}) private label!: string;
        @Prop({type: Boolean}) private primary!: boolean;

        private get classNames() {
            const styles = getStyles(OfficeButton.theme, {}, this.primary);
            return getBaseButtonClassNames(
                OfficeButton.theme,
                styles,
                "",
                "",
                undefined,
                undefined,
                this.disabled,
                this.checked,
                false,
                undefined);
        }
    }
</script>
