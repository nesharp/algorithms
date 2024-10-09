function addBinary(a: string, b: string): string {
  let left = a.length - 1;
  let right = b.length - 1;
  let carry = 0;
  let result = "";

  while (left >= 0 || right >= 0) {
    let leftCh = left < 0 ? 0 : parseInt(a[left]);
    let rightCh = right < 0 ? 0 : parseInt(b[right]);
    const sum = leftCh + rightCh + carry;
    const newDigit = sum % 2;
    result = newDigit + result;
    carry = Math.floor(sum / 2);
    left--;
    right--;
  }
  if (carry) {
    result = `1` + result;
  }

  return result;
}
