<template>
    <component :is="rootType" :class="classNames.root">{{ isImage ? null : children}}</component>
</template>

<script lang="ts">
    import {getIcon}                              from "@s-bauer/uifabric-styling";
    import {areIconsInitialized, initializeIcons} from "@s-bauer/uifabric-icons";
    import {mergeStyleSets}                       from "@uifabric/merge-styles";
    import {Component, Prop, Vue}                 from "vue-property-decorator";
    import {getStyles}                            from "./OfficeIcon.styles";
    import {IconType, IOfficeIconProps}           from "./OfficeIcon.types";
    import OfficeImage                            from "../Image/OfficeImage.vue";

    if (!areIconsInitialized())
        initializeIcons();

    @Component({
        components: {OfficeImage}
    })
    export default class OfficeIcon extends Vue implements IOfficeIconProps {
        @Prop({type: Number, default: IconType.default}) public iconType!: IconType;
        @Prop({type: String, default: ""}) public iconName!: string;

        private children?: string | null = null;

        private get rootType() {
            return this.isImage ? "div" : "i";
        }

        private get isImage() {
            return this.iconType === IconType.image;
        }

        private get classNames() {
            const {iconClassName, children} = this.getIconContent(this.iconName);
            this.children                   = children;
            return mergeStyleSets(getStyles({
                iconClassName,
                className:     "",
                isImage:       this.isImage,
                isPlaceholder: typeof this.iconName === "string" && this.iconName.length === 0,
                styles:        {}
            }));
        }

        private getIconContent(name?: string) {
            const iconDefinition = getIcon(name) || {
                subset: {
                    className: undefined
                },
                code:   undefined
            };

            return {
                children:      iconDefinition.code,
                iconClassName: iconDefinition.subset.className
            };
        }
    }
</script>
