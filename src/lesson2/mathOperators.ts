export type ScalarOperationType = (first: number, second: number) => number;
export type UnaryOperationType = (first: number) => number;

export type MathOperatorType = ScalarOperationType | UnaryOperationType;

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

export const square: UnaryOperationType = (
    first: number
): number => first ** 2;

export const degree: ScalarOperationType = (
    first: number,
    second: number
): number => first ** second;

export const factorial: UnaryOperationType = (
    first: number
): number => first <= 1 ? 1 : first * factorial(first - 1);

export const mathOperators: { [key: string]: MathOperatorType } = {
    "*": mul,
    "/": div,
    "+": add,
    "-": minus,
    "^": degree,
    "**": square,
    "!": factorial,
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
    "*": FIRST,
    "/": FIRST,
    "+": SECOND,
    "-": SECOND,
    "^": FIRST,
    "**": FIRST,
    "!": FIRST,
};
