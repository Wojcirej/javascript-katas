module.exports = {
  sumNumbers: function(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }
};
