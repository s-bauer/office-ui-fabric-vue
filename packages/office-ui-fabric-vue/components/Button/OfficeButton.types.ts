import {IStyle} from "@uifabric/merge-styles";

export interface IOfficeButtonStyles {
  /**
   * Style for the root element in the default enabled, non-toggled state.
   */
  root?: IStyle;

  /**
   * Style override for the root element in a checked state, layered on top of the root style.
   */
  rootChecked?: IStyle;

  /**
   * Style override for the root element in a disabled state, layered on top of the root style.
   */
  rootDisabled?: IStyle;

  /**
   * Style override applied to the root on hover in the default, enabled, non-toggled state.
   */
  rootHovered?: IStyle;

  /**
   * Style override applied to the root on focus in the default, enabled, non-toggled state.
   */
  rootFocused?: IStyle;

  /**
   * Style override applied to the root on pressed in the default, enabled, non-toggled state.
   */
  rootPressed?: IStyle;

  /**
   * Style override applied to the root on when menu is expanded in the default, enabled, non-toggled state.
   */
  rootExpanded?: IStyle;

  /**
   * Style override applied to the root on hover in a checked, enabled state
   */
  rootCheckedHovered?: IStyle;

  /**
   * Style override applied to the root on pressed in a checked, enabled state
   */
  rootCheckedPressed?: IStyle;

  /**
   * Style override applied to the root on hover in a checked, disabled state
   */
  rootCheckedDisabled?: IStyle;

  /**
   * Style override applied to the root on hover in a expanded state on hover
   */
  rootExpandedHovered?: IStyle;

  /**
   * Style for the flexbox container within the root element.
   */
  flexContainer?: IStyle;

  /**
   * Style for the text container within the flexbox container element (and contains the text and description).
   */
  textContainer?: IStyle;

  /**
   * Style for the icon on the near side of the label.
   */
  icon?: IStyle;

  /**
   * Style for the icon on the near side of the label on hover.
   */
  iconHovered?: IStyle;

  /**
   * Style for the icon on the near side of the label when pressed.
   */
  iconPressed?: IStyle;

  /**
   * Style for the icon on the near side of the label when expanded.
   */
  iconExpanded?: IStyle;

  /**
   * Style for the icon on the near side of the label when expanded and hovered.
   */
  iconExpandedHovered?: IStyle;

  /**
   * Style override for the icon when the button is disabled.
   */
  iconDisabled?: IStyle;

  /**
   * Style override for the icon when the button is checked.
   */
  iconChecked?: IStyle;

  /**
   * Style for the text content of the button.
   */
  label?: IStyle;

  /**
   * Style override for the text content when the button is hovered.
   */
  labelHovered?: IStyle;

  /**
   * Style override for the text content when the button is disabled.
   */
  labelDisabled?: IStyle;

  /**
   * Style override for the text content when the button is checked.
   */
  labelChecked?: IStyle;

  /**
   * Style for the menu chevron.
   */
  menuIcon?: IStyle;

  /**
   * Style for the menu chevron on hover.
   */
  menuIconHovered?: IStyle;

  /**
   * Style for the menu chevron when pressed.
   */
  menuIconPressed?: IStyle;

  /**
   * Style for the menu chevron when expanded.
   */
  menuIconExpanded?: IStyle;

  /**
   * Style for the menu chevron when expanded and hovered.
   */
  menuIconExpandedHovered?: IStyle;

  /**
   * Style override for the menu chevron when the button is disabled.
   */
  menuIconDisabled?: IStyle;

  /**
   * Style override for the menu chevron when the button is checked.
   */
  menuIconChecked?: IStyle;

  /**
   * Style for the description text if applicable (for compound buttons.)
   */
  description?: IStyle;

  /**
   * Style for the description text if applicable (for compound buttons.)
   */
  secondaryText?: IStyle;

  /**
   * Style override for the description text when the button is hovered.
   */
  descriptionHovered?: IStyle;

  /**
   * Style for the description text when the button is pressed.
   */
  descriptionPressed?: IStyle;

  /**
   * Style override for the description text when the button is disabled.
   */
  descriptionDisabled?: IStyle;

  /**
   * Style override for the description text when the button is checked.
   */
  descriptionChecked?: IStyle;

  /**
   * Style override for the screen reader text.
   */
  screenReaderText?: IStyle;

  /**
   * Style override for the container div around a SplitButton element
   */
  splitButtonContainer?: IStyle;

  /**
   * Style for container div around a SplitButton element when the button is hovered.
   */
  splitButtonContainerHovered?: IStyle;

  /**
   * Style for container div around a SplitButton element when the button is focused.
   */
  splitButtonContainerFocused?: IStyle;

  /**
   * Style for container div around a SplitButton element when the button is checked.
   */
  splitButtonContainerChecked?: IStyle;

  /**
   * Style for container div around a SplitButton element when the button is checked and hovered.
   */
  splitButtonContainerCheckedHovered?: IStyle;

  /**
   * Style override for the container div around a SplitButton element in a disabled state
   */
  splitButtonContainerDisabled?: IStyle;

  /**
   * Style override for the divider element that appears between the button and menu button
   * for a split button.
   */
  splitButtonDivider?: IStyle;

  /**
   * Style override for the SplitButton menu button
   */
  splitButtonMenuButton?: IStyle;

  /**
   * Style override for the SplitButton menu button element in a disabled state.
   */
  splitButtonMenuButtonDisabled?: IStyle;

  /**
   * Style override for the SplitButton menu button element in a checked state
   */
  splitButtonMenuButtonChecked?: IStyle;

  /**
   * Style override for the SplitButton menu button element in an expanded state
   */
  splitButtonMenuButtonExpanded?: IStyle;

  /**
   * Style override for the SplitButton menu icon element
   */
  splitButtonMenuIcon?: IStyle;

  /**
   * Style override for the SplitButton menu icon element in a disabled state
   */
  splitButtonMenuIconDisabled?: IStyle;

  /**
   * Style override for the SplitButton FlexContainer.
   */
  splitButtonFlexContainer?: IStyle;
}
