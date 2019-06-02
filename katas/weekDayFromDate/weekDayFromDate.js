module.exports = {
  weekDayFromDate: function(date) {
    const weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let parsedDate = new Date(date);
    return weekDayNames[parsedDate.getDay()];
  },
};
