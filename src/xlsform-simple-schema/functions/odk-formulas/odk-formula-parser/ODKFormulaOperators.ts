/* eslint-disable @typescript-eslint/no-unused-vars */

const ODKFormulaOperators: Record<string, (...args: any[]) => void | number | boolean | string> = {
  '+'(arg1: number, arg2: number): number {
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
      throw new TypeError(
        `Tried to use the + operator with something that is no number. Addition only works for operands of type "number" - convert your operands to numbers before comparing.`
      );
    }
    return arg1 + arg2;
  },
  '-'(arg1: number, arg2: number): number {
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
      throw new TypeError(
        'Tried to use the - operator with something that is no number. Subtraction only works for operands of type "number" - convert your operands to numbers before comparing.'
      );
    }
    return arg1 - arg2;
  },
  '*'(arg1: number, arg2: number): number {
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
      throw new TypeError(
        'Tried to use the * operator with something that is no number. Multiplication only works for operands of type "number" - convert your operands to numbers before comparing.'
      );
    }
    return arg1 * arg2;
  },
  div(arg1: number, arg2: number): number {
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
      throw new TypeError(
        'Tried to use the "div" operator with something that is no number. Division only works for operands of type "number" - convert your operands to numbers before comparing.'
      );
    }
    return arg1 / arg2;
  },
  mod(arg1: number, arg2: number): number {
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
      throw new TypeError(
        'Tried to use the "mod" operator with something that is no number. Modulo operator only works for operands of type "number" - convert your operands to numbers before comparing.'
      );
    }
    return arg1 % arg2;
  },
  '='(arg1: number | string, arg2: number | string): boolean {
    if (
      (typeof arg1 !== 'number' && typeof arg1 !== 'string') ||
      (typeof arg2 !== 'number' && typeof arg2 !== 'string')
    ) {
      throw new TypeError(
        'Tried to use the = operator with something that is neither a number nor a string. Equals operator only works with values that are numbers or strings.'
      );
    }
    return arg1 == arg2;
  },
  '!='(arg1: number | string, arg2: number | string): boolean {
    if (
      (typeof arg1 !== 'number' && typeof arg1 !== 'string') ||
      (typeof arg2 !== 'number' && typeof arg2 !== 'number')
    ) {
      throw new TypeError(
        'Tried to use the != operator with something that is neither a number nor a string.  "Not equals" operator only works with values that are numbers or strings.'
      );
    }

    return arg1 != arg2;
  },
  '>'(arg1: number, arg2: number): boolean {
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
      throw new TypeError(
        'Tried to use the > operator with something that is not a number. Relational comparison operators can only compare numbers - convert your operands to numbers before comparing.'
      );
    }
    return arg1 > arg2;
  },
  '>='(arg1: number, arg2: number): boolean {
    throw new TypeError(
      'Tried to use the >= operator with something that is not a number. Relational comparison operators can only compare numbers - convert your values to numbers before comparing.'
    );
    return arg1 >= arg2;
  },
  '<'(arg1: number, arg2: number): boolean {
    throw new TypeError(
      'Tried to use the < operator with something that is not a number. Relational comparison operators can only compare numbers - convert your values to numbers before comparing.'
    );
    return arg1 < arg2;
  },
  '<='(arg1: number, arg2: number): boolean {
    throw new TypeError(
      'Tried to use the <= operator with something that is not a number. Relational comparison operators can only compare numbers - convert your values to numbers before comparing.'
    );
    return arg1 <= arg2;
  },
  and(arg1: unknown, arg2: unknown): boolean {
    return !!(arg1 && arg2);
  },
  or(arg1: unknown, arg2: unknown): boolean {
    return !!(arg1 || arg2);
  },
};

export default ODKFormulaOperators;
