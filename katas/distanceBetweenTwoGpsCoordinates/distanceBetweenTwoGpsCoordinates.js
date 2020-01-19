module.exports = {
  distanceBetweenTwoGpsCoordinates: function(
    latitude1Geo,
    longitude1Geo,
    latitude2Geo,
    longitude2Geo
  ) {
    const earthRadiusKm = 6371;

    const latitudeDeltaRadians = this.degreesToRadians(
      latitude2Geo - latitude1Geo
    );
    const longitudeDeltaRadians = this.degreesToRadians(
      longitude2Geo - longitude1Geo
    );
    const latitude1Radians = this.degreesToRadians(latitude1Geo);
    const latitude2Radians = this.degreesToRadians(latitude2Geo);

    const a =
      Math.pow(Math.sin(latitudeDeltaRadians / 2), 2) +
      Math.pow(Math.sin(longitudeDeltaRadians / 2), 2) *
        Math.cos(latitude1Radians) *
        Math.cos(latitude2Radians);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(earthRadiusKm * c);
  },
  degreesToRadians: function(degrees) {
    return (degrees * Math.PI) / 180;
  }
};
