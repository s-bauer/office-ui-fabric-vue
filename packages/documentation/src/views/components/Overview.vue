<template>
    <div id="main">
        <Sidebar id="sidebar"></Sidebar>
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Sidebar from "@/components/Sidebar.vue";

    @Component({
        components: {
            Sidebar,
        },
    })
    export default class Overview extends Vue {

    }
</script>

<style scoped>
    #content {
        position: relative;
        padding: 2em;
        margin-left: 340px;
    }
</style>
