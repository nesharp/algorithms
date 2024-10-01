export function removeDuplicates(nums: number[]): number {
  let i = 0;
  while (i < nums.length) {
    if (nums[i + 1] === nums[i]) {
      nums.splice(i, 1);
      continue;
    }
    i++;
  }
  return nums.length;
}
