import { addBinary } from "./solution";

describe("addBinary", () => {
  test("should add two binary numbers", () => {
    expect(addBinary("11", "1")).toBe("100"); // 3 + 1 = 4
  });

  test("should handle carry over when adding one results in a 10", () => {
    expect(addBinary("1010", "1011")).toBe("10101"); // 10 + 11 = 21
  });

  test("should handle multiple carry overs", () => {
    expect(addBinary("111", "1")).toBe("1000"); // 7 + 1 = 8
  });

  test("should return '1' when input is '0'", () => {
    expect(addBinary("0", "0")).toBe("0"); // 0 + 0 = 0
  });

  test("should handle single digit numbers", () => {
    expect(addBinary("1", "1")).toBe("10"); // 1 + 1 = 2
  });

  test("should handle single digit carry over", () => {
    expect(addBinary("1", "1")).toBe("10"); // 1 + 1 = 2
  });
});
