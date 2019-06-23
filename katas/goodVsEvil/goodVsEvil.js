module.exports = {
  goodVsEvil: function(good, evil) {
    const goodMap = [1, 2, 3, 3, 4, 10];
    const evilMap = [1, 2, 2, 2, 3, 5, 10];

    const goodForces = good.split(' ').map((stat) => Number(stat));
    const evilForces = evil.split(' ').map((stat) => Number(stat));

    let goodWorth = 0;
    let evilWorth = 0;

    goodForces.forEach((army, index) => {
      goodWorth += army == 0 ? 0 : army * goodMap[index];
    });

    evilForces.forEach((army, index) => {
      evilWorth += army == 0 ? 0 : army * evilMap[index];
    });

    if (goodWorth > evilWorth) return "Battle Result: Good triumphs over Evil";
    if (evilWorth > goodWorth) return "Battle Result: Evil eradicates all trace of Good";
    return "Battle Result: No victor on this battle field";
  }
};
