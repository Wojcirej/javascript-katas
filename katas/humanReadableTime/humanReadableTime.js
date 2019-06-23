module.exports = {
  humanReadableTime: function(seconds) {
    const minutes = seconds / 60;
    const realSeconds = Math.floor(seconds % 60);
    const realMinutes = Math.floor(minutes % 60);
    const realHour = Math.floor(minutes / 60);

    const readableHour = String(realHour).length === 1 ? String(realHour).padStart(2, '0') : realHour;

    const readableMinutes = String(realMinutes).length === 1 ? String(realMinutes).padStart(2, '0') : realMinutes;

    const readableSeconds = String(realSeconds).length === 1 ? String(realSeconds).padStart(2, '0') : realSeconds;

    return `${readableHour}:${readableMinutes}:${readableSeconds}`;
  }
};
