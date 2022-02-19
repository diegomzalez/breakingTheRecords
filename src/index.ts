function b(scores: number[]): number[] {
  let hs = 0;
  let ls = 0;
  let highest_value = scores[0];
  let lowest_value = scores[0];
  scores.forEach((current_value) => {
    if (current_value > highest_value) {
      highest_value = current_value;
      hs++;
    }
    if (lowest_value > current_value) {
      lowest_value = current_value;
      ls++;
    }
  });
  return [hs, ls];
}
console.log(b([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
