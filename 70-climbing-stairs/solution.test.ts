import { climbStairs } from "./solution";

describe("climbStairs", () => {
  test("should return 1 when n = 1", () => {
    expect(climbStairs(1)).toBe(1);
  });

  test("should return 2 when n = 2", () => {
    expect(climbStairs(2)).toBe(2);
  });

  test("should return 3 when n = 3", () => {
    expect(climbStairs(3)).toBe(3);
  });

  test("should return 5 when n = 4", () => {
    expect(climbStairs(4)).toBe(5);
  });

  test("should return 8 when n = 5", () => {
    expect(climbStairs(5)).toBe(8);
  });

  test("should return 13 when n = 6", () => {
    expect(climbStairs(6)).toBe(13);
  });

  test("should handle large inputs", () => {
    expect(climbStairs(10)).toBe(89); // Known result for n = 10
    expect(climbStairs(20)).toBe(10946); // Known result for n = 20
  });
});
