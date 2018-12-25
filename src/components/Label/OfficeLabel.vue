<template>
    <label class="ms-Label">
        <slot/>
    </label>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class OfficeLabel extends Vue {
        @Prop({type: Boolean}) private disabled!: boolean;
        @Prop({type: Boolean}) private required!: boolean;
    }
</script>

<style>
    .ms-Label {
        font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, "Roboto", "Helvetica Neue", sans-serif;
        font-size: 14px;
        font-weight: 400;

        color: #333333;

        box-sizing: border-box;
        box-shadow: none;
        margin: 0;
        display: block;
        padding: 5px 0;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }
</style>