<template>
    <div id="header">
        <router-link to="/">
            <div id="name">
                <img alt="Vue logo" src="../assets/logo.png">
                <span>Office-Vue-Fabric</span>
            </div>
        </router-link>
        <ul id="nav">
            <li>
                <router-link to="/" :style="isHome ? activeLinkStyle : null">Home</router-link>
            </li>
            <li>
                <router-link to="/components" :style="isComponent ? activeLinkStyle : null">Components</router-link>
            </li>
            <li>
                <a href="https://github.com/s-bauer/office-ui-fabric-vue">GitHub</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";


    @Component({
        components: {},
    })
    export default class Header extends Vue {
        private get isHome() {
            return this.$route.name === "home";
        }

        private get isComponent() {
            return this.$route.name && this.$route.name.startsWith("components");
        }

        private get isAbout() {
            return this.$route.name === "about";
        }

        private get activeLinkStyle() {
            return {
                borderBottom: "3px solid #42b983",
            };
        }
    }
</script>

<style scoped>

    #header {
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
        transition: background-color 0.3s ease-in-out;
        background-color: #fff;
        height: 40px;
        padding: 10px 20px;
        z-index: 100;
        position: fixed;
        width: 100%;
        top: 0;
    }

    #name {
        display: inline-block;
    }

    #name > span {
        line-height: 40px;
        margin-left: 10px;
    }

    #name > img {
        margin-bottom: 3px;
        height: 30px;
        vertical-align: middle;
    }

    #nav {
        position: fixed;
        list-style-type: none;
        margin: 0;
        padding: 0;
        right: 30px;
        top: 10px;
        height: 40px;
        line-height: 40px;
    }

    #nav li {
        display: inline-block;
        position: relative;
        margin: 0 0.6em;
    }

    #nav a {
        text-decoration: none;
        color: #34495e;
        padding-bottom: 3px;
        white-space: nowrap;
        cursor: pointer;
    }

</style>
