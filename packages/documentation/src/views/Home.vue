<template>
    <div id="home">
        <h1>Office Vue Fabric</h1>
        <span id="short-description">A Vue.js implementation of <a
                href="https://developer.microsoft.com/en-us/fabric">Office UI Fabric</a></span>

        <h3>Information</h3>
        <p>
            The goal of this project is to build a fully functional Vue.js implementation of the
            <a href="https://developer.microsoft.com/en-us/fabric#/components">Office UI Fabric components</a>.
            It should behave just like the
            <a href="https://github.com/OfficeDev/office-ui-fabric-react">official Office Fabric for React</a> library,
            provided by Microsoft.
        </p>

        <p>
            In contrast to other <b>Office Fabric</b> implementations in Vue.js this library tries to use as many of the
            original unmodified source code from the Office Fabric React library as possible. This enables fast
            development times in addition to solid and bug free code.
        </p>


        <p>
            Moreover this library supports full <b>Tree-Shaking</b>, as office-vue-fabric is delivered as <b>EcmaScript Modules</b>.
            This enables webpack to only include the components you use, meaning your bundles will stay as small as possible.
        </p>

        <p>
            This Project is <b>Work in Progress</b>. Checkout the <a href="https://github.com/s-bauer/office-ui-fabric-vue">Github Project</a> for more information.
        </p>

        <h3>Installation</h3>

        with npm

        <highlight-code lang="shell" style="text-align: left">
            npm install --save office-vue-fabric
        </highlight-code>

        or with yarn

        <highlight-code lang="shell" style="text-align: left">
            yarn add office-vue-fabric
        </highlight-code>

        Then you can import and use the components you want.

        <highlight-code lang="vue" style="text-align: left">
            {{ exampleCode }}
        </highlight-code>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import exampleCode from "./code.example";

    @Component
    export default class Home extends Vue {
        private exampleCode = exampleCode;
    }
</script>

<style scoped>
    #home {
        text-align: center;
        max-width: 980px;
        margin: auto;
    }

    #short-description {
        color: rgba(0, 0, 0, 0.6);
    }

    a {
        color: rgb(66, 185, 131);
    }

    h1 {
        color: #2c3e50;
        margin-bottom: 0;
    }

    h3 {
        color: rgb(66, 185, 131);
        padding-bottom: 4px;
        padding-top: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
</style>
