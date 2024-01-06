import { cn } from './classNames';

describe('WHEN "cn()" helper is called', () => {
  test('AND args are not specified, MUST return undefined', () => {
    const result = cn();
    expect(result).toBe(undefined);
  });

  /** One arg */
  test.each([
    ['', undefined],
    [undefined, undefined],
    [null, undefined],
    ['foo', 'foo'],
    [{ foo: true }, 'foo'],
    [{ foo: false }, undefined],
  ])('AND arg is "%s", MUST return "%s"', (arg, expected) => {
    const result = cn(arg);
    expect(result).toBe(expected);
  });

  /** Two args */
  test.each([
    ['', '', undefined],
    ['', undefined, undefined],
    ['', null, undefined],
    ['', 'foo', 'foo'],
    ['', { foo: true }, 'foo'],
    ['', { foo: false }, undefined],
    [undefined, undefined, undefined],
    [undefined, null, undefined],
    [undefined, 'foo', 'foo'],
    [undefined, { foo: true }, 'foo'],
    [undefined, { foo: false }, undefined],
    [null, null, undefined],
    [null, 'foo', 'foo'],
    [null, { foo: true }, 'foo'],
    [null, { foo: false }, undefined],
    ['foo', 'bar', 'foo bar'],
    ['foo', { bar: true }, 'foo bar'],
    ['foo', { bar: false }, 'foo'],
    [{ foo: true }, { bar: true }, 'foo bar'],
    [{ foo: true }, { bar: false }, 'foo'],
    [{ foo: false }, { bar: true }, 'bar'],
    [{ foo: false }, { bar: false }, undefined],
  ])('AND args are "%s" and "%s", MUST return "%s"', (arg1, arg2, expected) => {
    const result = cn(arg1, arg2);
    expect(result).toBe(expected);
  });
});
