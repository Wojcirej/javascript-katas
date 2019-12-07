module.exports = {
  uniqueValuesOfKey: function(objectsList, key) {
    return [...new Set(
      objectsList.map(element => {
        return element[key];
      })
    )];
  }
};