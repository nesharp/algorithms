export function removeDublicates(nums: number[]): number {
  let z = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[z]) {
      nums[++z] = nums[i];
    }
    console.log(nums);
  }
  return z + 1;
}
