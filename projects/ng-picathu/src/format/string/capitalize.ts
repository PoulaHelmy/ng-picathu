export function capitalize(value: string): string {
  return value.toLowerCase().replace(/(?:^|\s)\S/g, char => char.toUpperCase());
}
