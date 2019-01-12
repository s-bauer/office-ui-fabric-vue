import { ITheme } from "@styling/interfaces";
import { IStyle } from "@uifabric/merge-styles";
export interface IProgressIndicatorProps {
    /**
     * Percentage of the operation's completeness. If this is not set, the indeterminate progress animation will be shown instead.
     */
    percentComplete?: number;
    /**
     * Whether or not to hide the progress state.
     */
    progressHidden?: boolean;
    /**
     * Height of the ProgressIndicator
     * @defaultvalue 2
     */
    barHeight?: number;
}
export interface IProgressIndicatorStyleProps {
    /**
     * Theme provided by High-Order Component.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
    indeterminate?: boolean;
    barHeight?: number;
}
export interface IProgressIndicatorStyles {
    /**
     * Style for the root element.
     */
    root: IStyle;
    itemName: IStyle;
    itemDescription: IStyle;
    itemProgress: IStyle;
    progressTrack: IStyle;
    progressBar: IStyle;
}
