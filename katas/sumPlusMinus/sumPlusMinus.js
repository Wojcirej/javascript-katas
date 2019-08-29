module.exports = {
  sumPlusMinus: function(numbers) {
    return numbers.reduce((currentResult, number) => ({
        plus: number > 0 ? currentResult.plus += number : currentResult.plus,
        minus: number < 0 ? currentResult.minus += number : currentResult.minus
    }), { plus: 0, minus: 0 });
  }
};