module.exports = {
  removeDuplicates: function(list) {
    return list.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  }
};