<template>
    <div id="main">
        <Sidebar></Sidebar>
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
        max-width: 600px;
        margin: 0 auto 0 290px;
        padding: 2.2em 0 2.2em 50px;
    }
</style>