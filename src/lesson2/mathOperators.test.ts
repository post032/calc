import {mul, div, add, minus, square, degree, factorial} from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(add(4, 2)).toBe(6);
  });

  it("minus 4 - 2 to equal 2", () => {
    expect(minus(4, 2)).toBe(2);
  });

  it("square 16 ^ 2 to equal 256", () => {
    expect(square(16)).toBe(256);
  });

  it("degree 2 * 2 * 2 to equal 8", () => {
    expect(degree(2, 3)).toBe(8);
  });

  it("factorial 1 * 2 * 3 to equal 6", () => {
    expect(factorial(3)).toBe(6);
  });
});
