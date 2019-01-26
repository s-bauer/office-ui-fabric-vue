
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
    import {loadTheme} from "@s-bauer/uifabric-styling"
    import {getBaseButtonClassNames} from "./OfficeButton.classNames";
    import {getStyles} from "./OfficeButton.style";
    import {Component, Model, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class OfficeButton extends Vue {
        @Model("change", {type: Boolean}) private checked: boolean = false;

        @Prop({type: Boolean}) private disabled!: boolean;
        @Prop({type: String}) private label!: string;
        @Prop({type: Boolean}) private primary!: boolean;

        private get classNames() {
            const theme = loadTheme({});
            const styles = getStyles(theme, {}, this.primary);
            return getBaseButtonClassNames(
                theme,
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
