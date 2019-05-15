/**
 * TODO
 * 0. get rid of any
 * 1. add type information string
 * 2. demonstrate that simple union type signature with null is not working well
 * 3. use overload signatures for string and null
 * 4. demonstrate that parameter with union type is not supported
 * 5. Show solution wih conditional types
 * 6. refactor conditional type (StringOrNull<T>)
 *
 * @param text characters being upper cased
 */
declare type StringOrNull<T> = T extends string ? string : null;

export function upperCase<T extends string | null>(text: T): StringOrNull<T>;
export function upperCase(text: string | null): string | null {
  if (text) {
    return text.toUpperCase();
  }

  return null;
}

// String
upperCase('').toLocaleLowerCase();

// Null
upperCase(null);

// Union
let maybe: string | null = null as any;
const result = upperCase(maybe);