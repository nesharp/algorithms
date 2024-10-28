import { mySqrt } from "./solution";

describe("mySqrt", () => {
  it("should return the correct integer square root for perfect squares", () => {
    expect(mySqrt(4)).toBe(2); // √4 = 2
    expect(mySqrt(9)).toBe(3); // √9 = 3
    expect(mySqrt(16)).toBe(4); // √16 = 4
    expect(mySqrt(25)).toBe(5); // √25 = 5
  });

  it("should return the floor of the square root for non-perfect squares", () => {
    expect(mySqrt(8)).toBe(2); // √8 ≈ 2.83, so floor is 2
    expect(mySqrt(10)).toBe(3); // √10 ≈ 3.16, so floor is 3
    expect(mySqrt(20)).toBe(4); // √20 ≈ 4.47, so floor is 4
  });

  it("should handle edge cases", () => {
    expect(mySqrt(0)).toBe(0); // √0 = 0
    expect(mySqrt(1)).toBe(1); // √1 = 1
  });

  it("should handle large numbers", () => {
    expect(mySqrt(10000)).toBe(100); // √10000 = 100
    expect(mySqrt(123456789)).toBe(11111); // √123456789 ≈ 11111.111, so floor is 11111
  });
});
