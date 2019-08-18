module.exports = {
  decimalToFactorial: function(number) {
    let result = "";
    let divider = 1;
    while(number > 0) {
      remaining = number % divider;
      result += remaining === 10 ? 'A' : remaining.toString();
      number = Math.floor(number / divider);
      divider++;
    };
    return result.split('').reverse().join('');
  }
};