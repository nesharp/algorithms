// const input = [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ];
const input = [
  [1, 4],
  [0, 4],
];
const merge = (
  intervals: number[][],
  isSorted: boolean = false
): number[][] => {
  if (!isSorted) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
  }
  for (let i = 0; i < intervals.length; i++) {
    const current = intervals[i];
    const next = intervals[i + 1];
    if (!next) break;
    if (current[1] >= next[0]) {
      const min = Math.min(...current, ...next);
      const max = Math.max(...current, ...next);
      return merge([[min, max], ...intervals.splice(i + 2)], true);
    }
  }
  return intervals;
};
merge(input);
