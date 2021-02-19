import seedrandom from "seedrandom";

export class Utility {
  // Random Numbers //////////////////////////////////////////////////////////////////////////////////
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

  // Strings //////////////////////////////////////////////////////////////////////////////////

  public static firstCharacterIsUppercase(string: string) {
    let firstCharacter = string[0];
    return firstCharacter.toUpperCase() === firstCharacter;
  }

  public static getCapitalized(string: string) {
    let firstCharacter = string[0].toUpperCase();
    return firstCharacter + string.substr(1);
  }
}
