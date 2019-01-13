<template>
    <div class="ms-LayerHost" :id="`LayerHost-${hostId}`"></div>
</template>

<script lang="ts">

    import {Component, Prop, Vue} from "vue-property-decorator";
    import {notifyHostChanged} from "./OfficeLayer.notification";

    @Component
    export default class OfficeLayerHost extends Vue {
        @Prop({type: String, default: ""}) public hostId!: string;

        public mounted() {
            notifyHostChanged(this.hostId);
        }

        public beforeDestroy() {
            notifyHostChanged(this.hostId);
        }
    }

</script>
