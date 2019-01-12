import { IRawStyle } from "@uifabric/merge-styles";
import { ITheme } from "../interfaces";
export declare const IsFocusVisibleClassName = "ms-Fabric--isFocusVisible";
/**
 * Generates a focus style which can be used to define an :after focus border.
 *
 * @param theme - The theme object to use.
 * @param inset - The number of pixels to inset the border.
 * @param position - The positioning applied to the container. Must
 * be 'relative' or 'absolute' so that the focus border can live around it.
 * @param highContrastStyle - Style for high contrast mode.
 * @param borderColor - Color of the border.
 * @param outlineColor - Color of the outline.
 * @param isFocusedOnly - If the styles should apply on focus or not.
 * @returns The style object.
 */
export declare function getFocusStyle(theme: ITheme, inset?: number, position?: "relative" | "absolute", highContrastStyle?: IRawStyle | undefined, borderColor?: string, outlineColor?: string, isFocusedOnly?: boolean): IRawStyle;
/**
 * Generates style to clear browser specific focus styles.
 */
export declare function focusClear(): IRawStyle;