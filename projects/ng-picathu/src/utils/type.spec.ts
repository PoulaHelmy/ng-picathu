import { isFunction, isNil } from './type';

describe('utils', () => {
  it('isFunction', () => {
    expect(isFunction(() => 'test')).toBe(true);
    expect(isFunction(1)).toBe(false);
    expect(isFunction('String')).toBe(false);
    expect(isFunction([1, 2, 3, 4, 'str'])).toBe(false);
  });

  it('isNil', () => {
    // eslint-disable-next-line no-undefined
    expect(isNil(undefined)).toBe(true);
    expect(isNil(null)).toBe(true);
    expect(isNil([])).toBe(false);
    expect(isNil(1)).toBe(false);
  });
});

describe('isNil', () => {
  it('should return true for null values', () => {
    expect(isNil(null)).toBeTrue();
  });

  it('should return true for undefined values', () => {
    expect(isNil(undefined)).toBeTrue();
  });

  it('should return false for non-null and non-undefined values', () => {
    expect(isNil(0)).toBeFalse();
    expect(isNil('')).toBeFalse();
    expect(isNil(false)).toBeFalse();
    expect(isNil({})).toBeFalse();
  });
});

describe('isFunction', () => {
  it('should return true for function values', () => {
    /* eslint-disable-next-line */
    expect(isFunction(() => {})).toBeTrue();
    /* eslint-disable-next-line */
    expect(isFunction(function () {})).toBeTrue();
    /* eslint-disable-next-line */
    expect(isFunction(async () => {})).toBeTrue();
    /* eslint-disable-next-line */
    expect(isFunction(class Test {})).toBeTrue();
  });

  it('should return false for non-function values', () => {
    expect(isFunction(null)).toBeFalse();
    expect(isFunction(undefined)).toBeFalse();
    expect(isFunction(0)).toBeFalse();
    expect(isFunction('')).toBeFalse();
    expect(isFunction(false)).toBeFalse();
    expect(isFunction({})).toBeFalse();
  });
});
