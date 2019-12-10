module.exports = {
  groupInThrees: function(list) {
    const numberOfGroups = Math.ceil(list.length / 3);
    const numberOfMissingElementsForFullGroups =
      numberOfGroups * 3 - list.length;
    if (numberOfMissingElementsForFullGroups > 0) {
      for (item of Array.from(Array(numberOfMissingElementsForFullGroups))) {
        list.push(undefined);
      }
    }
    const result = Array(Math.ceil(list.length / 3))
      .fill()
      .map((_, index) => {
        const beginning = index * 3;
        const end = beginning + 3;
        return list.slice(beginning, end);
      });
    return result;
  }
};
