import {ITheme} from "@/styling";
import {IStyle} from "@uifabric/merge-styles";

export interface IOfficeLayerProps {
  /**
   * The optional id property provided on a LayerHost that this Layer should render within. The LayerHost does
   * not need to be immediately available but once has been rendered, and if missing, we'll avoid trying
   * to render the Layer content until the host is available. If an id is not provided, we will render the Layer
   * content in a fixed position element rendered at the end of the document.
   */
  hostId?: string;

  /**
   * When enabled, Layer allows events to bubble up from Layer content.
   * Traditionally Layer has not had this behavior. This prop preserves backwards compatibility by
   * default while allowing users to opt in to the new event bubbling functionality.
   */
  eventBubblingEnabled?: boolean;
}

export interface IOfficeLayerStyleProps {
  /**
   * Accept theme prop.
   */
  theme: ITheme;

  /**
   * Accept custom classNames
   */
  className?: string;

  /**
   * Check if Host
   */
  isNotHost?: boolean;
}

export interface IOfficeLayerStyles {
  /**
   * Style for the root element when fixed.
   */
  root?: IStyle;
  /**
   * Style for the Fabric component.
   */
  content?: IStyle;
}
