module.exports = {
  validBraces: function(braces) {
    const bracesMap = {
      '(': ')',
      '[': ']',
      '{': '}',
      ')': '(',
      ']': '[',
      '}': '{'
    };
    for (let i = 0; i < braces.length / 2; i++) {
      braces = braces.replace(/(\(\)|{}|\[\])/g, '')
    };
    return braces.split('').map(leftBrace => bracesMap[leftBrace]).reverse().join('') === braces
  }
};
