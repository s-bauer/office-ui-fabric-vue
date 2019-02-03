<template>
    <div :class="classNames.root">
        <OfficeLabel v-for="(h, i) of header" class="header" :key="h + '_' + i">{{ h }}</OfficeLabel>
        <template v-for="(row, rowI) of content">
            <OfficeLabel v-for="(cell, cellI) of row" :key="cellI + '_' + rowI">{{cell}}</OfficeLabel>
        </template>
    </div>
</template>

<script lang="ts">
    import Card                          from "@/components/Card.vue";
    import {mergeStyles, mergeStyleSets} from "@uifabric/merge-styles";
    import OfficeLabel                   from "office-vue-fabric/src/Label/OfficeLabel.vue";
    import {Vue, Component, Prop}        from "vue-property-decorator";

    @Component({
        components: {
            OfficeLabel,
            Card,
        },
    })
    export default class TechnicalDescription extends Vue {
        @Prop({type: Array, default: () => ["Name", "Type", "Description"]}) private header!: string[];
        @Prop({type: Array, required: true}) private content!: string[][];

        private headerCount = this.header.length;

        private get classNames() {
            const selectors: any                                                                                  = {};
            selectors[`> *:nth-child(-n+${this.headerCount})`]                                                    = {
                borderBottom: "1px solid rgba(0, 0, 0, 0.35)"
            };
            selectors[`> *:not(:nth-last-child(-n+${this.headerCount})):not(:nth-child(-n+${this.headerCount}))`] = {
                borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
            };
            selectors[`> *:not(:nth-child(${this.headerCount}n))`]                                                = {
                borderRight: "1px solid rgba(0, 0, 0, 0.2)"
            };
            selectors[`> *`]                                                                                      = {
                paddingLeft: "5px"
            };

            // noinspection TypeScriptValidateTypes
            return mergeStyleSets({
                root: [
                    "technical-description",
                    {
                        gridTemplateColumns: "200px ".repeat(this.headerCount - 1) + "auto",
                        display:             "grid",
                        selectors
                    },
                ]
            });
        }
    }
</script>

<style scoped>
    .header {
        font-weight: bold;
    }
</style>

<style>
    /*.technical-description {*/
    /*display: grid;*/
    /*grid-template-columns: 200px 150px auto;*/
    /*}*/

    /*!* HEADER - first 3 children *!*/
    /*.technical-description > *:nth-child(-n+3) {*/
    /*border-bottom: 1px solid rgba(0, 0, 0, 0.35);*/
    /*}*/

    /*!* CONTENT - anything but the first 3 and last 3 *!*/
    /*.technical-description > *:not(:nth-last-child(-n+3)):not(:nth-child(-n+3)) {*/
    /*border-bottom: 1px solid rgba(0, 0, 0, 0.2);*/
    /*}*/

    /*!* RIGHT BORDER - anything but the last in a row *!*/
    /*.technical-description > *:not(:nth-child(3n)) {*/
    /*border-right: 1px solid rgba(0, 0, 0, 0.2);*/
    /*}*/

    .technical-description > * {
        padding-left: 5px;
    }
</style>
