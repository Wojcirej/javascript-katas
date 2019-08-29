module.exports = {
  sumOnlyNumbers: function(object) {
    let total = 0;
    for (let key in object) {
      if (typeof(object[key]) === "number" && object.hasOwnProperty(key)) {
        total += object[key];
      };
    };
    return total;
  }
};