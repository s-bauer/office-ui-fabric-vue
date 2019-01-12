import { Vue } from "vue-property-decorator";
export default class FocusTrapZone extends Vue {
    private static focusStack;
    private elementToFocusOnDismiss?;
    private isClickableOutsideFocusTrap;
    private forceFocusInsideTrap;
    private ignoreExternalFocusing;
    private disableFirstFocus?;
    private focusPreviouslyFocusedInnerElement?;
    private firstFocusableSelector?;
    private previouslyFocusedElementInTrapZone?;
    private previouslyFocusedElementOutsideTrapZone?;
    private hasFocusHandler?;
    private hasClickHandler?;
    focus(): void;
    private beforeMount;
    private mounted;
    private watchElementToFocusOnDismiss;
    private beforeDestroy;
    private updateEventHandlers;
    private onFocusCapture;
    private onKeyDown;
    private forceFocusInTrap;
    private forceClickInTrap;
}
