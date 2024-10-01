function searchInsert(nums: number[], target: number): number {
  let index = 0;

  nums.map((item, idx) => {
    if (target > item) {
      index = idx + 1;
    }
    if (item === target) {
      index == idx;
    }
  });

  return index;
}
