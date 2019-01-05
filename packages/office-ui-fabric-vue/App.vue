<template>
    <div id="app" class="ms-Fabric">
        <Overview msg="Welcome to office-ui-fabric-vue"/>
    </div>
</template>

<script lang="ts">
    import {initializeIcons} from "@icons/index";
    import {Component, Vue} from "vue-property-decorator";
    import Overview from "./showcase/Overview.vue";

    initializeIcons();

    @Component({
        components: {
            Overview,
        },
    })
    export default class App extends Vue {
    }

</script>
<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
