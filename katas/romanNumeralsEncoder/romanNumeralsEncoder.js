module.exports = {
  romanNumeralsEncoder: function(number) {
    let roman = "";
    let numbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    let romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]
    for (let i = 0; i < numbers.length; ++i) {
      while (number >= numbers[i]) {
        roman = roman + romanNumeral[i];
        number = number - numbers[i];
      };
    };
    return roman;
  }
};
