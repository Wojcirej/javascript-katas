module.exports = {
  greedIsGood: function(dice) {
    let score = 0;
    let ones = dice.filter(function(item) { return item == 1 }).length;
    let twos = dice.filter(function(item) { return item == 2 }).length;
    let threes = dice.filter(function(item) { return item == 3}).length;
    let fours = dice.filter(function(item) { return item == 4}).length;
    let fives = dice.filter(function(item) { return item == 5}).length;
    let sixs = dice.filter(function(item) { return item == 6}).length;

    if (ones > 2) score += 1000;
    if (ones > 3) score += 100 * (ones % 3);
    if (ones < 3) score += 100 * ones;
    if (twos > 2) score += 200;
    if (threes > 2) score += 300;
    if (fours > 2) score += 400;
    if (fives > 2) score += 500;
    if (fives > 3) score += 50 * (fives % 3);
    if (fives < 3) score += 50 * fives;
    if (sixs > 2) score += 600;
    return score;
  }
};
