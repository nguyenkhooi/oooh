import i18n from "i18n-js";

/**
 * Translates text based on keyword (== "en")
 * If no translation found yet, it'll return the keyword
 * @deprecated here since i18n is not supported yet
 * ---
 * @example
 * ```js
 * <Text>{tr("Hello")}</Text>
 * ```
 * ---
 * @version 0.10.19
 * - *(add enumKey)*
 * - *(reduce function name for cleaner code)*
 * @author nguyenkhooi
 */
export function tr(key: enumKey | string, options?: object) {
  return key;
}
// export function tr(key: enumKey | string, options?: object) {
//   return key ? i18n.t(key, options) : key;
// }

type enumKey =
  | `Your email`
  | `Welcome to`
  | `Kreme dashboard`
  | `Let's start with email`
  | `Email`
  | `Password`
  | `Access Code`;
