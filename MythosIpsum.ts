import { Grapheme, Ipsum, syllableType } from "./interfaces";
import { Utility } from "./utility";

export class MythosIpsum {
  private ipsum;

  constructor(ipsum: Ipsum) {
    this.ipsum = ipsum;
  }

  // Words, Names //////////////////////////////////////////////////////////////////////////////////////////////////
  public getTranslation(sourceLanguage: string, inputText: string) {
    let array = inputText.split(/(?=[^a-zA-Z\[\]'])/).filter((word) => word);

    array.forEach((word, index) => {
      if (word.match(/[a-zA-Z]/)) {
        let wordToReplace = word.trim();
        let seed = (wordToReplace + sourceLanguage).toLowerCase();
        let replaceValue = Utility.firstCharacterIsUppercase(wordToReplace)
          ? Utility.getCapitalized(this.getWord(seed))
          : this.getWord(seed);

        if (word.match(/\[.*\]/))
          replaceValue = wordToReplace.substr(1, wordToReplace.length - 2);
        array[index] = array[index].replace(wordToReplace, replaceValue);
      }
    });

    let joinedArray = array.join("");

    return joinedArray;
  }

  // Words, Names //////////////////////////////////////////////////////////////////////////////////////////////////

  public getWord(seed?: string) {
    let rng = Utility.getSeededRng(seed);
    let length = Utility.getRandomInt(
      this.ipsum.wordLength.min,
      this.ipsum.wordLength.max,
      rng
    );
    return this.getSyllables(length, rng);
  }

  public getFirstName(seed?: string) {
    let rng = Utility.getSeededRng(seed);

    let length = Utility.getRandomInt(
      this.ipsum.firstNameLength.min,
      this.ipsum.firstNameLength.max,
      rng
    );
    return this.getSyllables(length, rng);
  }

  public getLastName(seed?: string) {
    let rng = Utility.getSeededRng(seed);

    let length = Utility.getRandomInt(
      this.ipsum.lastNameLength.min,
      this.ipsum.lastNameLength.max,
      rng
    );
    return this.getSyllables(length, rng);
  }

  // Syllables //////////////////////////////////////////////////////////////////////////////////////////////////

  private getSyllables(syllableCount: number, rng?: Function) {
    let syllables = "";

    for (let i = 0; i < syllableCount; i++) {
      let type = this.getSyllableType(i, syllableCount);
      let syllable = this.getSyllable(type, rng);

      syllables += syllable;
    }

    return syllables;
  }

  private getSyllable(type: syllableType, rng?: Function) {
    switch (type) {
      case syllableType.first:
        return this.getFirstSyllable(rng);
      case syllableType.middle:
        return this.getMiddleSyllable(rng);
      case syllableType.last:
        return this.getLastSyllable(rng);
    }
  }

  private getFirstSyllable(rng?: Function) {
    let startWithVowel = rng() < this.ipsum.startWithVowelProbability;
    const useConsonantSuffix = rng() < this.ipsum.useConsonantSuffixProbability;

    let syllable = "";
    if (!startWithVowel)
      syllable += this.getRandomGrapheme(syllableType.first, false, rng);
    syllable += this.getRandomGrapheme(syllableType.first, true, rng);
    if (useConsonantSuffix)
      syllable += this.getRandomGrapheme(syllableType.first, false, rng);

    return syllable;
  }

  private getMiddleSyllable(rng?: Function) {
    const useConsonantPrefix = rng() < this.ipsum.useConsonantPrefixProbability;
    const useConsonantSuffix = rng() < this.ipsum.useConsonantSuffixProbability;

    let syllable = "";
    if (useConsonantPrefix)
      syllable += this.getRandomGrapheme(syllableType.middle, false, rng);
    syllable += this.getRandomGrapheme(syllableType.middle, true, rng);
    if (useConsonantSuffix)
      syllable += this.getRandomGrapheme(syllableType.middle, false, rng);

    return syllable;
  }

  private getLastSyllable(rng?: Function) {
    const useConsonantPrefix = rng() < this.ipsum.useConsonantPrefixProbability;
    let endWithVowel = rng() < this.ipsum.endWithVowelProbability;

    let syllable = "";
    if (useConsonantPrefix)
      syllable += this.getRandomGrapheme(syllableType.last, false, rng);
    syllable += this.getRandomGrapheme(syllableType.last, true, rng);
    if (!endWithVowel)
      syllable += this.getRandomGrapheme(syllableType.last, false, rng);

    return syllable;
  }

  private getSyllableType(index: number, totalLength: number): syllableType {
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

  private getRandomGrapheme(
    type: syllableType,
    vowel: boolean = true,
    rng?: Function
  ) {
    let grapheme = this.ipsum.graphemes.filter((grapheme) => {
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

  private getWeight(type: syllableType, grapheme: Grapheme) {
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
