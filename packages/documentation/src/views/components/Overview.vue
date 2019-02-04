<template>
    <div id="component-overview">
        <h1>Components</h1>
        <p>
            Office Vue Fabric tries to include all available <a
                href="https://developer.microsoft.com/en-us/fabric#/components"
                target="_blank">Office UI Fabric Components</a> provided by Microsoft. While this goal is not yet
            reached we do our best to continuously add components until we are finished. This is a long, but interesting
            journey! Take a look at the <a href="https://github.com/s-bauer/office-ui-fabric-vue/issues/17"
                                           target="_blank">Component Progress</a> on GitHub to see which components are
            prioritised and currently being worked on.
        </p>

        <p>
            Go check out some of the components by selecting them in the left sidebar. They all contain a little
            playground where you can test them out!
        </p>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component({
        components: {},
    })
    export default class Overview extends Vue {

    }
</script>

<style scoped>
    h1 {
        color: #2c3e50;
        padding-bottom: 4px;
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    a {

    }

    #component-overview {
        max-width: 780px;
        margin: auto;
    }
</style>
