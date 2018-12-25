<template>
    <button
            :class="buttonClasses"
            :style="buttonStyle">
        <div class="ms-Button-flexContainer">
            <div class="ms-Button-textContainer">
                <div class="ms-Button-label">
                    {{ label }}
                </div>
            </div>
        </div>
    </button>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Model} from "vue-property-decorator";

    @Component
    export default class OfficeDefaultButton extends Vue {
        @Model("change", {type: Boolean}) private checked: boolean = false;

        @Prop({type: Boolean}) private disabled!: boolean;
        @Prop({type: String}) private label!: string;
        @Prop({type: Boolean}) private primary!: boolean;


        get buttonClasses() {
            const classes = ["ms-Button"];
            if (!this.disabled)
                classes.push(this.primary ? "ms-Button--primary" : "ms-Button--default");

            return classes;
        }

        get buttonStyle() {
            const styles: any = {
                cursor: "pointer",
                pointerEvents: undefined
            };

            if (this.disabled) {
                styles.backgroundColor = "#f4f4f4";
                styles.color = "#a6a6a6";
                styles.cursor = "default";
                styles.pointerEvents = "none";
            }

            return styles;
        }
    }
</script>

<style scoped>
    .ms-Button {
        box-sizing: border-box;
        border: 1px solid transparent;
        user-select: none;
        display: inline-block;
        text-decoration: none;
        text-align: center;
        vertical-align: top;
        padding: 0 16px;
        border-radius: 0;

        cursor: pointer;

        height: 32px;
        min-width: 80px;

        font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, "Roboto", "Helvetica Neue", sans-serif;
        font-size: 14px;
        font-weight: 400;

        outline: transparent;
    }

    .ms-Button:active > * {
        position: relative;
        left: 0;
        top: 0;
    }


    .ms-Button--primary  {
        background-color: #0078d4;
        color: #ffffff;
    }

    .ms-Button--primary:hover {
        background-color: #106ebe;
        color: #ffffff;
    }

    .ms-Button--primary:active {
        background-color: #005a9e;
        color: #ffffff;
    }


    .ms-Button--default {
        background-color: #f4f4f4;
        color: #333333;
    }

    .ms-Button--default:hover {
        background-color: #eaeaea;
        color: #212121;
    }

    .ms-Button--default:active {
        background-color: #c8c8c8;
        color: #212121;
    }

    .ms-Button-flexContainer {
        display: flex;
        height: 100%;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }

    .ms-Button-textContainer {
        flex-grow: 1
    }

    .ms-Button-label {
        margin: 0 4px;
        lineHeight: 100%;
    }
</style>