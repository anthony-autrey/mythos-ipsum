import { Grapheme, syllableType } from "./interfaces";
import { Utility } from "./utility";
import { Human } from "./languageConfigs/human";

export class Proof {
  // Words, Names //////////////////////////////////////////////////////////////////////////////////////////////////
  public static getTranslation(sourceLanguage: string, inputText: string) {
    let array = inputText.split(/[^a-zA-Z]/);
    let uniqueArray = Array.from(new Set(array)).filter((word) => word);
    let translationMap: Map<string, string> = new Map();

    let firstCharacterIsUppercase = (string: string) => {
      let firstCharacter = string[0];
      return firstCharacter.toUpperCase() === firstCharacter;
    };
    let getCapitalized = (string: string) => {
      let firstCharacter = string[0].toUpperCase();
      return firstCharacter + string.substr(1);
    };

    uniqueArray.forEach((word) => {
      let seed = (word + sourceLanguage).toLowerCase();
      translationMap.set(word, Proof.getWord(seed));
    });

    translationMap.forEach((value, key) => {
      let regex = new RegExp(key, "g");
      let replaceValue = value;
      if (firstCharacterIsUppercase(key)) value = getCapitalized(value);

      inputText = inputText.replace(regex, value);
    });

    return inputText;
  }

  // Words, Names //////////////////////////////////////////////////////////////////////////////////////////////////

  public static getWord(seed?: string) {
    let rng = Utility.getSeededRng(seed);
    let length = Utility.getRandomInt(
      Human.wordLength.min,
      Human.wordLength.max,
      rng
    );
    return this.getSyllables(length, rng);
  }

  public static getFirstName(seed?: string) {
    let rng = Utility.getSeededRng(seed);

    let length = Utility.getRandomInt(
      Human.firstNameLength.min,
      Human.firstNameLength.max,
      rng
    );
    return this.getSyllables(length, rng);
  }

  public static getLastName(seed?: string) {
    let rng = Utility.getSeededRng(seed);

    let length = Utility.getRandomInt(
      Human.lastNameLength.min,
      Human.lastNameLength.max,
      rng
    );
    return this.getSyllables(length, rng);
  }

  // Syllables //////////////////////////////////////////////////////////////////////////////////////////////////

  private static getSyllables(syllableCount: number, rng?: Function) {
    let syllables = "";

    for (let i = 0; i < syllableCount; i++) {
      let type = this.getSyllableType(i, syllableCount);
      let syllable = this.getSyllable(type, rng);

      syllables += syllable;
    }

    return syllables;
  }

  private static getSyllable(type: syllableType, rng?: Function) {
    switch (type) {
      case syllableType.first:
        return this.getFirstSyllable(rng);
      case syllableType.middle:
        return this.getMiddleSyllable(rng);
      case syllableType.last:
        return this.getLastSyllable(rng);
    }
  }

  private static getFirstSyllable(rng?: Function) {
    let startWithVowel = rng() < Human.startWithVowelProbability;
    const useConsonantSuffix = rng() < Human.useConsonantSuffixProbability;

    let syllable = "";
    if (!startWithVowel)
      syllable += this.getRandomGrapheme(syllableType.first, false, rng);
    syllable += this.getRandomGrapheme(syllableType.first, true, rng);
    if (useConsonantSuffix)
      syllable += this.getRandomGrapheme(syllableType.first, false, rng);

    return syllable;
  }

  private static getMiddleSyllable(rng?: Function) {
    const useConsonantPrefix = rng() < Human.useConsonantPrefixProbability;
    const useConsonantSuffix = rng() < Human.useConsonantSuffixProbability;

    let syllable = "";
    if (useConsonantPrefix)
      syllable += this.getRandomGrapheme(syllableType.middle, false, rng);
    syllable += this.getRandomGrapheme(syllableType.middle, true, rng);
    if (useConsonantSuffix)
      syllable += this.getRandomGrapheme(syllableType.middle, false, rng);

    return syllable;
  }

  private static getLastSyllable(rng?: Function) {
    const useConsonantPrefix = rng() < Human.useConsonantPrefixProbability;
    let endWithVowel = rng() < Human.endWithVowelProbability;

    let syllable = "";
    if (useConsonantPrefix)
      syllable += this.getRandomGrapheme(syllableType.last, false, rng);
    syllable += this.getRandomGrapheme(syllableType.last, true, rng);
    if (!endWithVowel)
      syllable += this.getRandomGrapheme(syllableType.last, false, rng);

    return syllable;
  }

  private static getSyllableType(
    index: number,
    totalLength: number
  ): syllableType {
    switch (index) {
      case 0:
        return syllableType.first;
      case totalLength - 1:
        return syllableType.last;
      default:
        return syllableType.middle;
    }
  }

  // Graphemes //////////////////////////////////////////////////////////////////////////////////////////////////

  private static getRandomGrapheme(
    type: syllableType,
    vowel: boolean = true,
    rng?: Function
  ) {
    let grapheme = Human.graphemes.filter((grapheme) => {
      return grapheme.isVowel == vowel;
    });

    let optionsArray = grapheme.reduce((accumulator, grapheme) => {
      let weight = this.getWeight(type, grapheme);
      for (let i = 0; i < weight; i++) {
        accumulator.push(grapheme.characters);
      }
      return accumulator;
    }, []);

    let index = Utility.getRandomInt(0, optionsArray.length - 1, rng);
    let randomGrapheme = optionsArray[index];

    return randomGrapheme;
  }

  private static getWeight(type: syllableType, grapheme: Grapheme) {
    switch (type) {
      case syllableType.first:
        return grapheme.beginningWeight;
      case syllableType.middle:
        return grapheme.middleWeight;
      case syllableType.last:
        return grapheme.endingWeight;
    }
  }
}
