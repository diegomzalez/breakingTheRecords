function breakingRecords(scores: number[]): number[] {
  let hs: number = 0;
  let ls: number = 0;
  let current_value: number = 0;
  let highest_value: number = 0;
  let lowest_value: number = 0;
  for (let i = 0; i < scores.length; i++) {
    current_value = scores[i];
    if (i === 0) lowest_value = current_value;
    if (current_value < scores[i + 1]) {
      highest_value = scores[i + 1];
      hs++;
    }
    if (scores[i + 1] < lowest_value) {
      lowest_value = scores[i + 1];
      ls++;
    }
  }
  return [hs - 1, ls];
}

console.log(breakingRecords([12, 24, 10, 24]));
