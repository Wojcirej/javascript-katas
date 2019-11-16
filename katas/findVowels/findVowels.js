module.exports = {
  findVowels: function(word) {
    const vowels = 'aeiou';
    const split = word => word.split('');
    const filter = array => array.filter((letter) => vowels.includes(letter));
    const join = array => array.join('');
    const capitalize = text => text.toUpperCase();

    const pipe = (...functions) => (value) => functions.reduce((currentValue, currentFunction) => currentFunction(currentValue), value);

    return pipe(split, filter, join, capitalize)(word);
  }
};