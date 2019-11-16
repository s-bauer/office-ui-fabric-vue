// Initialize global window id.
import {Stylesheet} from "@uifabric/merge-styles";

const CURRENT_ID_PROPERTY = "__currentId__";
const DEFAULT_ID_STRING = "id__";

declare const process: {};

// tslint:disable-next-line:no-any
const _global: any = (typeof window !== "undefined" && window) || process;

if (_global[CURRENT_ID_PROPERTY] === undefined) {
  _global[CURRENT_ID_PROPERTY] = 0;
}

// tslint:disable-next-line:no-any
function checkProperties(a: any, b: any): boolean {
  for (const propName in a) {
    if (a.hasOwnProperty(propName)) {
      if (!b.hasOwnProperty(propName) || b[propName] !== a[propName]) {
        return false;
      }
    }
  }

  return true;
}

/**
 * Compares a to b and b to a.
 *
 * @public
 */
export function shallowCompare<TA, TB>(a: TA, b: TB): boolean {
  return checkProperties(a, b) && checkProperties(b, a);
}

/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
export function assign(target: any, ...args: any[]): any {
  // @ts-ignore
  return filteredAssign.apply(this, [null, target].concat(args));
}

/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
export function filteredAssign(isAllowed: (propName: string) => boolean, target: any, ...args: any[]): any {
  target = target || {};

  for (const sourceObject of args) {
    if (sourceObject) {
      for (const propName in sourceObject) {
        if (sourceObject.hasOwnProperty(propName) && (!isAllowed || isAllowed(propName))) {
          target[propName] = sourceObject[propName];
        }
      }
    }
  }

  return target;
}

// Configure ids to reset on stylesheet resets.
const stylesheet = Stylesheet.getInstance();

if (stylesheet && stylesheet.onReset) {
  stylesheet.onReset(resetIds);
}

/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */
export function getId(prefix?: string): string {
  const index = _global[CURRENT_ID_PROPERTY]++;

  return (prefix || DEFAULT_ID_STRING) + index;
}

/**
 * Resets id counter to an (optional) number.
 *
 * @public
 */
export function resetIds(counter: number = 0): void {
  _global[CURRENT_ID_PROPERTY] = counter;
}

/* Takes an enum and iterates over each value of the enum (as a string), running the callback on each, returning a mapped array.
 * The callback takes as a first parameter the string that represents the name of the entry, and the second parameter is the
 * value of that entry, which is the value you'd normally use when using the enum (usually a number).
 * */
export function mapEnumByName<T>(
  // tslint:disable-next-line:no-any
  theEnum: any,
  callback: (name?: string, value?: string | number) => T | undefined
): Array<T | undefined> | undefined {
  // map<any> to satisfy compiler since it doesn't realize we strip out undefineds in the .filter() call
  return Object.keys(theEnum)
    .map<T | undefined>((p: string | number) => {
      // map on each property name as a string
      if (String(Number(p)) !== p) {
        // if the property is not just a number (because enums in TypeScript will map both ways)
        return callback(p as string, theEnum[p]);
      }
    })
    .filter((v: T | undefined) => !!v); // only return elements with values
}

/**
 * Get all values in an object dictionary
 *
 * @param obj - The dictionary to get values for
 */
// tslint:disable-next-line:no-any
export function values<T>(obj: any): T[] {
  return Object.keys(obj).reduce((arr: T[], key: string): T[] => {
    arr.push(obj[key]);
    return arr;
  }, []);
}
