module.exports = {
  findParityOutlier: function(integers) {
    let even = integers.filter(a => a % 2 === 0);
    let odd = integers.filter(a => a % 2);

    return (even.length > 1)? parseInt(odd) : parseInt(even);
  }
};
