<template>
    <div id="app">
        <Header></Header>
        <div style="padding: 60px 0;">
            <router-view/>
        </div>
    </div>
</template>

<style>
    #app {
        font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    a {
        text-decoration: none;
        color: rgb(66, 185, 131);
        padding-bottom: 3px;
        white-space: nowrap;
        cursor: pointer;
    }

    body {
        margin: 0;
        min-width: 680px;
    }
</style>
<script>
    import {Component, Vue} from "vue-property-decorator";
    import Header from "./components/Header";

    @Component({
        components: {
            Header,
        },
    })
    export default class App extends Vue {
    }
</script>
