module.exports = {
  rot13: function(input) {
    let result = input.split('').map(function(char, index) {
      if (this.isSmallLetter(char)) {
        return String.fromCharCode((input.charCodeAt(index) + 13 - 65) % 26 + 65);
      }
      else if (this.isCapitalLetter(char)) {
        return String.fromCharCode((input.charCodeAt(index) + 13 - 97) % 26 + 97);
      }
      else {
        return char;
      };
    }, this);
    return result.join('');
  },
  isSmallLetter: function(char) {
    return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
  },
  isCapitalLetter: function(char) {
    return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
  }
};
