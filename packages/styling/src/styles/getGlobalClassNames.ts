import {memoizeFunction} from "@s-bauer/uifabric-utilities";
import { ITheme } from "../interfaces";
import { Stylesheet } from "@uifabric/merge-styles";

export type GlobalClassNames<IStyles> = Record<keyof IStyles, string>;

/**
 * Internal memoized function which simply takes in the class map and the
 * disable boolean. These immutable values can be memoized.
 */
const _getGlobalClassNames = memoizeFunction(
  <T>(classNames: GlobalClassNames<T> | any, disableGlobalClassNames?: boolean): Partial<GlobalClassNames<T>> => {
    const styleSheet = Stylesheet.getInstance();

    if (disableGlobalClassNames) {
      // disable global classnames
      return Object.keys(classNames).reduce((acc: any, className: string) => {
        acc[className] = styleSheet.getClassName(classNames[className]);
        return acc;
      }, {});
    }

    // use global classnames
    return classNames;
  }
);

/**
 * Checks for the `disableGlobalClassNames` property on the `theme` to determine if it should return `classNames`
 * Note that calls to this function are memoized.
 *
 * @param classNames - The collection of global class names that apply when the flag is false. Make sure to pass in
 * the same instance on each call to benefit from memoization.
 * @param theme - The theme to check the flag on
 * @param disableGlobalClassNames - Optional. Explicitly opt in/out of disabling global classnames. Defaults to false.
 */
export function getGlobalClassNames<T>(
  classNames: GlobalClassNames<T>,
  theme: ITheme,
  disableGlobalClassNames?: boolean
): Partial<GlobalClassNames<T>> {
  return _getGlobalClassNames(classNames, disableGlobalClassNames !== undefined ? disableGlobalClassNames : theme.disableGlobalClassNames);
}
