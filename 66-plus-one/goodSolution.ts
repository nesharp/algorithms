function plusOne(digits: number[]): number[] {
  const plusOne = BigInt(digits.join("")) + BigInt(1);
  return plusOne.toString().split("").map(Number);
}
