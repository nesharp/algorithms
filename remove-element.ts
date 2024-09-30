import { assert } from "console";
let nums: number[] = [3, 2, 2, 3];
let val: number = 3;
let expectedNums: number[] = [2, 2];
var result = removeElement(nums, val);
assert(result === expectedNums.length);
console.log(result);

// right answer
// console.time("runtime");
// function removeElement(nums: number[], val: number): number {
//   let i = 0;
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[j] != val) {
//       nums[i] = nums[j];
//       i++;
//     }
//   }
//   return i;
// }
// console.timeEnd("runtime");
//my code
console.time("runtime");
function removeElement(nums: number[], val: number): number {
  while (nums.indexOf(val) !== -1) {
    nums.splice(nums.indexOf(val), 1);
  }
  return nums.length;
}
console.timeEnd("runtime");