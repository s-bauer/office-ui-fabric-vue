<template>
    <div id="sidebar">
        <div id="sidebar-inner">
            <ul id="menu-root">
                <li v-for="category of categories">
                    <h3> {{category.name}} </h3>
                    <ul>
                        <li v-for="route of category.routes">
                            <router-link :to="`/${route.link}`" :style="getStyle(route.link)">{{ route.name }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import {Routes}         from "@/router";
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Sidebar extends Vue {

        private get categories() {
            const categories = [];
            for (const category of Object.keys(Routes)) {
                const routes = Object.keys(Routes[category]).map(key => ({
                    name: key,
                    link: `components/${key.toLowerCase()}`,
                }));
                categories.push({
                    name: category,
                    routes
                });
            }
            return categories;
        }


        private getStyle(routeName: string) {
            if (this.$route.name && this.$route.name.startsWith(routeName)) {
                return {
                    borderBottom: "3px solid #42b983",
                };
            }
            return {};
        }
    }
</script>

<style scoped>
    #sidebar {
        position: fixed;
        z-index: 10;
        top: 61px;
        left: 0;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: auto;
        border-right: 1px solid #eaecef;
    }

    #sidebar-inner {
        width: 260px;
        padding: 40px 20px 60px 60px;
    }

    #sidebar ul {
        list-style-type: none;
        margin: 0;
        line-height: 1.5em;
        padding-left: 0;
    }

    #sidebar li {
        margin-top: 0.5em;
    }

    #sidebar a {
        text-decoration: none;
        color: #34495e;
        padding-bottom: 3px;
        white-space: nowrap;
        cursor: pointer;
    }
</style>
