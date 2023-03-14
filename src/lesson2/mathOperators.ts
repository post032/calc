export type ScalarOperationType = (first: number, second: number) => number;
export type OnlyOperationType = (first: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const square: OnlyOperationType = (first: number): number => first ** 2;

export const degree: ScalarOperationType = (
  first: number,
  second: number
): number => first ** second;

export const factorial: OnlyOperationType = (first: number): number =>
  first <= 1 ? 1 : first * factorial(first - 1);

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "**": square,
  "^": degree,
  "!": factorial,
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "!": FIRST,
  "**": FIRST,
  "^": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
};
