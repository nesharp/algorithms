const testCase = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// my code
// function removeDuplicates(nums: number[]): number {
//   let i = 0;
//   while (i < nums.length) {
//     if (nums[i + 1] === nums[i]) {
//       nums.splice(i, 1);
//       continue;
//     }
//     i++;
//   }
//   return nums.length;
// }
// good code
function leetcodeRemoveDublicates(nums: number[]): number {
  let z = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[z]) {
      nums[++z] = nums[i];
    }
    console.log(nums)
  }
  return z + 1;
}
// console.log(removeDuplicates(testCase));
console.log(leetcodeRemoveDublicates(testCase));
