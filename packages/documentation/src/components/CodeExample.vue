<template>
    <Card title="Examples" class="example-card">
        <div id="example-container">
            <slot></slot>
        </div>
        <div class="example-code">
            <OfficeLabel class="example-code-label">Code:</OfficeLabel>
            <highlight-code lang="vue" style="text-align: left">
                {{ code }}
            </highlight-code>
        </div>
    </Card>
</template>

<script lang="ts">
    import Card                   from "@/components/Card.vue";
    import {Vue, Component, Prop} from "vue-property-decorator";
    import {OfficeLabel}          from "office-vue-fabric";

    @Component({
        components: {
            Card,
            OfficeLabel,
        },
    })
    export default class CodeExample extends Vue {
        @Prop(String) private code!: string;
    }
</script>

<style scoped>
    .example-code {
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        margin-top: 25px;
        padding-top: 25px;
    }

    .example-code-label {
        margin-left: 5px;
    }
</style>
