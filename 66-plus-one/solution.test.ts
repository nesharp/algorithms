import { plusOne } from "./solution";

describe("plusOne", () => {
  test("should add one to a number represented as an array of digits", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]); // 123 + 1 = 124
  });

  test("should handle carry over when adding one results in a 10", () => {
    expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]); // 129 + 1 = 130
  });

  test("should handle multiple carry overs", () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]); // 999 + 1 = 1000
  });

  test("should return [1] when input is [0]", () => {
    expect(plusOne([0])).toEqual([1]); // 0 + 1 = 1
  });

  test("should handle single digit numbers", () => {
    expect(plusOne([5])).toEqual([6]); // 5 + 1 = 6
  });

  test("should handle single digit carry over", () => {
    expect(plusOne([9])).toEqual([1, 0]); // 9 + 1 = 10
  });
});
