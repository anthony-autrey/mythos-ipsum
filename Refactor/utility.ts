import seedrandom from "seedrandom";

export class Utility {
  public static getRandomInt(min: number, max: number, rng?: Function) {
    if (!rng) rng = this.getSeededRng();
    let rawRandomNumber = rng();
    let rand = rawRandomNumber * (max - min) + min;
    let rounded = Math.round(rand);
    return rounded;
  }

  public static getSeededRng(seed?: string) {
    let rng = seedrandom();
    if (seed) rng = seedrandom(seed);
    return rng;
  }
}
