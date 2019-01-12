import { IRectangle } from './IRectangle';
export declare const DATA_PORTAL_ATTRIBUTE = "data-portal-element";
/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 *
 * @public
 */
export declare function setVirtualParent(child: HTMLElement, parent: HTMLElement): void;
/**
 * Gets the virtual parent given the child element, if it exists.
 *
 * @public
 */
export declare function getVirtualParent(child: HTMLElement): HTMLElement | undefined;
/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 *
 * @public
 */
export declare function getParent(child: HTMLElement, allowVirtualParents?: boolean): HTMLElement | null;
/**
 * Gets the elements which are child elements of the given element.
 * If `allowVirtualChildren` is `true`, this method enumerates virtual child elements
 * after the original children.
 * @param parent - The element to get the children of.
 * @param allowVirtualChildren - true if the method should enumerate virtual child elements.
 */
export declare function getChildren(parent: HTMLElement, allowVirtualChildren?: boolean): HTMLElement[];
/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 *
 * @public
 */
export declare function elementContains(parent: HTMLElement | null, child: HTMLElement | null, allowVirtualParents?: boolean): boolean;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
export declare function setSSR(isEnabled: boolean): void;
/**
 * Helper to get the window object.
 *
 * @public
 */
export declare function getWindow(rootElement?: Element | null): Window | undefined;
/**
 * Helper to get the document object.
 *
 * @public
 */
export declare function getDocument(rootElement?: HTMLElement | null): Document | undefined;
/**
 * Helper to get bounding client rect, works with window.
 *
 * @public
 */
export declare function getRect(element: HTMLElement | Window | null): IRectangle | undefined;
/**
 * Identify element as a portal by setting an attribute.
 * @param element - Element to mark as a portal.
 */
export declare function setPortalAttribute(element: HTMLElement): void;
/**
 * Determine whether a target is within a portal from perspective of root or optional parent.
 * This function only works against portal components that use the setPortalAttribute function.
 * If both parent and child are within the same portal this function will return false.
 * @param target - Element to query portal containment status of.
 * @param parent - Optional parent perspective. Search for containing portal stops at parent (or root if parent is undefined or invalid.)
 */
export declare function portalContainsElement(target: HTMLElement, parent?: HTMLElement): boolean;
/**
 * Finds the first parent element where the matchFunction returns true
 * @param element - element to start searching at
 * @param matchFunction - the function that determines if the element is a match
 * @returns the matched element or null no match was found
 */
export declare function findElementRecursive(element: HTMLElement | null, matchFunction: (element: HTMLElement) => boolean): HTMLElement | null;
/**
 * Determines if an element, or any of its ancestors, contain the given attribute
 * @param element - element to start searching at
 * @param attribute - the attribute to search for
 * @returns the value of the first instance found
 */
export declare function elementContainsAttribute(element: HTMLElement, attribute: string): string | null;
