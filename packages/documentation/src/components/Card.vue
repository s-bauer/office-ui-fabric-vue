<template>
    <div class="card">
        <div v-if="title" id="card-titlebar">
            <h5>{{title}}</h5>
        </div>
        <div id="card-content">
            <slot/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component({
        components: {},
    })
    export default class Card extends Vue {
        @Prop(String) private title?: string;
    }
</script>

<style scoped>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        margin: 20px 5px;
        background-color: #fbfbfb;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    #card-content {
        padding: 20px 10px 10px 10px;
    }

    #card-titlebar {
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        background-color: #004578;
        color: white;
    }

    h5 {
        padding: 2px 0;
        margin: 0;
    }
</style>
