<template>
    <div :class="classNames.root" :style="{width: width + 'px', height: height + 'px'}" ref="div">
        <img :class="classNames.image" :src="src" :alt="alt" ref="img" @load="onLoad" @onerror="onError"/>
    </div>
</template>

<script lang="ts">
    import {getStyles} from "./OfficeImage.styles";
    import {ImageCoverStyle, ImageFit, ImageLoadState} from "./OfficeImage.types";
    import {loadTheme} from "@s-bauer/uifabric-styling"
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";

    @Component
    export default class OfficeImage extends Vue {
        private static svgRegex = /\.svg$/i;

        private loadState: ImageLoadState = ImageLoadState.notLoaded;
        private internalCoverStyle: ImageCoverStyle = ImageCoverStyle.portrait;

        @Prop(Object) private coverStyle!: ImageCoverStyle;
        @Prop(Object) private imageFit!: ImageFit;
        @Prop([Number, String]) private width!: number;
        @Prop([Number, String]) private height!: number;
        @Prop(String) private src!: string;
        @Prop(String) private alt!: string;
        @Prop({type: Boolean, default: false}) private maximizeFrame!: boolean;
        @Prop({type: Boolean, default: false}) private shouldFadeIn!: boolean;
        @Prop({type: Boolean, default: false}) private shouldStartVisible!: boolean;

        private get classNames() {
            const coverStyle = this.coverStyle !== undefined ? this.coverStyle : this.internalCoverStyle;

            return mergeStyleSets(getStyles({
                theme: loadTheme({}),
                className: "",
                width: this.width,
                height: this.height,
                maximizeFrame: this.maximizeFrame,
                shouldFadeIn: this.shouldFadeIn,
                shouldStartVisible: this.shouldStartVisible,
                isLoaded: this.loadState === ImageLoadState.loaded || (this.loadState === ImageLoadState.notLoaded && this.shouldStartVisible),
                isLandscape: coverStyle === ImageCoverStyle.landscape,
                isCenter: this.imageFit === ImageFit.center,
                isCenterCover: this.imageFit === ImageFit.centerCover,
                isContain: this.imageFit === ImageFit.contain,
                isCover: this.imageFit === ImageFit.cover,
                isNone: this.imageFit === ImageFit.none,
                isError: this.loadState === ImageLoadState.error,
                isNotImageFit: this.imageFit === undefined
            }));
        }

        private onLoad(evnt: Event) {
            this.computeCoverStyle();

            if (this.src)
                this.loadState = ImageLoadState.loaded;
        }

        private onError(evnt: Event) {
            this.loadState = ImageLoadState.error;
        }


        private updated() {
            this.checkImageLoaded();
        }

        @Watch("src")
        private srcChange(newSrc: string) {
            if (newSrc !== this.src) {
                this.loadState = ImageLoadState.notLoaded;
            } else if (this.loadState === ImageLoadState.loaded) {
                this.computeCoverStyle();
            }
        }

        private computeCoverStyle() {
            const imgElement = this.$refs.img as HTMLImageElement;
            const divElement = this.$refs.div as HTMLDivElement;

            // Do not compute cover style if it was already specified in props
            if (
                (this.imageFit === ImageFit.cover || this.imageFit === ImageFit.contain || this.imageFit === ImageFit.centerCover) &&
                this.coverStyle === undefined &&
                imgElement &&
                divElement
            ) {
                // Determine the desired ratio using the width and height props.
                // If those props aren't available, measure measure the frame.
                let desiredRatio;
                if (!!this.width && !!this.height && this.imageFit !== ImageFit.centerCover) {
                    desiredRatio = (this.width as number) / (this.height as number);
                } else {
                    desiredRatio = divElement.clientWidth / divElement.clientHeight;
                }

                // Examine the source image to determine its original ratio.
                const naturalRatio = imgElement.naturalWidth / imgElement.naturalHeight;

                // Should we crop from the top or the sides?
                if (naturalRatio > desiredRatio) {
                    this.internalCoverStyle = ImageCoverStyle.landscape;
                } else {
                    this.internalCoverStyle = ImageCoverStyle.portrait;
                }
            }
        }

        private checkImageLoaded() {
            if (this.loadState === ImageLoadState.notLoaded) {
                const imgElement = this.$refs.img as HTMLImageElement;

                const isLoaded: boolean = imgElement
                    ? (this.src && (imgElement.naturalWidth > 0 && imgElement.naturalHeight > 0)) || (imgElement.complete && OfficeImage.svgRegex.test(this.src!))
                    : false;

                if (isLoaded) {
                    this.computeCoverStyle();
                    this.loadState = ImageLoadState.loaded;
                }
            }
        }
    }
</script>
