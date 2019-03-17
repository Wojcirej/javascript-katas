module.exports = {
  meanSquareError: function(firstArray, secondArray) {
    var sum_of_power_differences = 0;
    for(var i = 0; i < firstArray.length; ++i) {
      var difference = Math.abs(firstArray[i] - secondArray[i]);
      var power = difference * difference;
      sum_of_power_differences = sum_of_power_differences + power;
    };
    return (sum_of_power_differences / firstArray.length);
  }
};
