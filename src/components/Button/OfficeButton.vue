import OfficeDefaultButton from "@/components/Button/OfficeButton.vue";
<template>
    <button :class="classNames.root">
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
    import {getBaseButtonClassNames} from "@/components/Button/OfficeButton.classNames";
    import {getStyles} from "@/components/Button/OfficeButton.style";
    import {createTheme, ITheme} from "@/styling";
    import {Component, Model, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class OfficeDefaultButton extends Vue {
        private static readonly theme: ITheme = createTheme({});

        @Model("change", {type: Boolean}) private checked: boolean = false;

        @Prop({type: Boolean}) private disabled!: boolean;
        @Prop({type: Boolean}) private checked!: boolean;

        @Prop({type: String}) private label!: string;
        @Prop({type: Boolean}) private primary!: boolean;

        private get classNames() {
            const styles = getStyles(OfficeDefaultButton.theme, {}, this.primary);
            return getBaseButtonClassNames(
                OfficeDefaultButton.theme,
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