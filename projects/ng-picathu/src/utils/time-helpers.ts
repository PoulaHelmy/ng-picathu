// Returns a string with a number padded with a leading zero if it's less than 10, and with no leading zero if it's 10 or more.
// If the number is less than 0 or greater than 99, it returns '00'.
// Arguments: number; Returns: string.
export function leadingZero(n: number): string {
  if (n < 0 || n > 99) {
    return '00';
  }
  if (n < 10) {
    return `0${n}`;
  } else {
    return `${n}`;
  }
}
