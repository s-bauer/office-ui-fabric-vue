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
    import {loadTheme}               from "@s-bauer/uifabric-styling";
    import {getBaseButtonClassNames} from "./OfficeButton.classNames";
    import {getStyles}               from "./OfficeButton.style";
    import {Component, Prop, Vue}    from "vue-property-decorator";

    @Component({})
    export default class OfficeButton extends Vue {
        // @formatter:off
        @Prop({type: Boolean})                 private disabled!: boolean;
        @Prop({type: Boolean, default: false}) private checked!: boolean;
        @Prop({type: String})                  private label!: string;
        @Prop({type: Boolean})                 private primary!: boolean;
        // @formatter:on

        private get classNames() {
            const theme  = loadTheme({});
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
