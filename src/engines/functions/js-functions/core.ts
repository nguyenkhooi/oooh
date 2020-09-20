import * as R from "ramda";

/**
 * Generate unique IDs for use as pseudo-private/protected names.
 * @see https://gist.github.com/gordonbrander/2230317
 */
export function ID() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}

/**
 * Assuming Date "zero" (aka ISOString == "1970-01-01T00") is default `null-date`.
 *
 * This function checks if given date is `"null-date"` or not
 */
export function isDateZero(date: Date) {
  return date.toISOString().includes(`1970-01-01T00`);
}

/**
 * Format Time from Date() to human readable format
 */
export function formatTime(date: Date, showSeconds: boolean) {
  const formattedTime = showSeconds
    ? [date.getHours(), date.getMinutes(), date.getSeconds()]
        .map((num) => `0${num}`.slice(-2))
        .join(":")
    : [date.getHours(), date.getMinutes()]
        .map((num) => `0${num}`.slice(-2))
        .join(":");

  return formattedTime;
}

/**
 * Capitalize string
 */
export const capitalize = R.compose(
  R.join(""),
  R.over(R.lensIndex(0), R.toUpper)
);
