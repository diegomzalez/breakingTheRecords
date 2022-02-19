function b(scores) {
    var hs = 0;
    var ls = 0;
    var highest_value = scores[0];
    var lowest_value = scores[0];
    scores.forEach(function (current_value) {
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
