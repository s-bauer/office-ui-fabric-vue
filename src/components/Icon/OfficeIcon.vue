<template>
    <component :is="rootType" :class="classNames.root">{{ isImage ? null : children}}</component>
</template>

<script lang="ts">
    import {getStyles} from "@/components/Icon/OfficeIcon.styles";
    import {IconType} from "@/components/Icon/OfficeIcon.types";
    import OfficeImage from "@/components/Image/OfficeImage.vue";
    import {getIcon} from "@/styling/utilities/icons";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {Component, Prop, Vue} from "vue-property-decorator";
    @Component({
        components: {OfficeImage}
    })
    export default class OfficeIcon extends Vue {
        @Prop({type: Number, default: IconType.default}) private iconType!: IconType;
        @Prop({type: String, default: ""}) private iconName!: string;

        private children: string | null | undefined = null;

        private get rootType() {
            return this.isImage ? "div" : "i";
        }

        private get isImage() {
            return this.iconType === IconType.image;
        }

        private get classNames() {
            const {iconClassName, children} = this.getIconContent(this.iconName);
            this.children = children;
            return mergeStyleSets(getStyles({
                className: "",
                iconClassName,
                isImage: this.isImage,
                isPlaceholder: typeof this.iconName === "string" && this.iconName.length === 0,
                styles: {}
            }));
        }

        private getIconContent(name?: string) {
            const iconDefinition = getIcon(name) || {
                subset: {
                    className: undefined
                },
                code: undefined
            };

            return {
                children: iconDefinition.code,
                iconClassName: iconDefinition.subset.className
            };
        }
    }
</script>
