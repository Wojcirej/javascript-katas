module.exports = {
  vowelCount: function(text) {
    return Array.from(text).filter(letter => 'aeiou'.includes(letter)).length;
  }
};