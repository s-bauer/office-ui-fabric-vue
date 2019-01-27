<template>
    <div id="app">
        <Header></Header>
        <div style="padding: 60px 20px;">
            <router-view/>
        </div>
    </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
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
