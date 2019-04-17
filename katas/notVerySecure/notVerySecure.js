module.exports = {
  notVerySecure: function(string) {
    return /^[a-z\d]+$/gi.test(string);
  }
};
