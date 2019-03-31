module.exports = {
  moveZerosToTheEnd: function(arr) {
    let zeros = 0;
    let array = arr.filter(function(e) {
      if (e === 0) zeros++;
      return e !== 0;
    });

    for (let i = 0; i < zeros; i++) {
      array.push(0);
    }

    return array;
  }
};
