module.exports = {
  factorialToDecimal: function(factorial) {
    return Array.from(factorial).reverse().map((number, index) => {
      return parseInt(number) * this.calculateFactorial(index);
    }).reduce((sum, number) => {
      return sum + number;
    }, 0);
  },
  calculateFactorial: function(number) {
    let result = 1;
    for (let i = 2; i <= number; i++)
        result *= i;
    return result;
  }
};