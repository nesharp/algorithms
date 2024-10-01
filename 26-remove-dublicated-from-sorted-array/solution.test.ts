import { removeDuplicates } from "./solution"; // Adjust the import path accordingly

describe("removeDuplicates", () => {
  it("should remove duplicate numbers and return the new length", () => {
    const nums = [1, 1, 2];
    const length = removeDuplicates(nums);
    expect(length).toBe(2);
    expect(nums.slice(0, length)).toEqual([1, 2]);
  });

  it("should handle an empty array", () => {
    const nums: number[] = [];
    const length = removeDuplicates(nums);
    expect(length).toBe(0);
    expect(nums).toEqual([]);
  });

  it("should handle an array with no duplicates", () => {
    const nums = [1, 2, 3];
    const length = removeDuplicates(nums);
    expect(length).toBe(3);
    expect(nums.slice(0, length)).toEqual([1, 2, 3]);
  });

  it("should handle an array with all duplicates", () => {
    const nums = [2, 2, 2, 2];
    const length = removeDuplicates(nums);
    expect(length).toBe(1);
    expect(nums.slice(0, length)).toEqual([2]);
  });

  it("should handle an array with mixed duplicates", () => {
    const nums = [0, 0, 1, 1, 2, 2, 3, 4, 4];
    const length = removeDuplicates(nums);
    expect(length).toBe(5);
    expect(nums.slice(0, length)).toEqual([0, 1, 2, 3, 4]);
  });
});
