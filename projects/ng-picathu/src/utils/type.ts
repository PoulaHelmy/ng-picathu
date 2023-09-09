export function isUndefined(obj: unknown) {
  return obj === undefined;
}

export function isNil(value: unknown): value is null | undefined {
  return isUndefined(value) || value === null;
}

export function isPresent<T>(value: T | null | undefined): value is T {
  return !isNil(value);
}

/* eslint-disable-next-line */
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

/* eslint-disable-next-line */
export function isArray<T>(value: any): boolean {
  return isPresent(value) && Array.isArray(value);
}
