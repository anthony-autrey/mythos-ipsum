import { Grapheme, syllableType } from './interfaces';
import { Utility } from './utility';
import { Human } from './languageConfigs/human';

export class Proof {

    // Words, Names //////////////////////////////////////////////////////////////////////////////////////////////////

    public static getWord() {
        let length = Utility.getRandomInt(Human.wordLength.min, Human.wordLength.max);
        return this.getSyllables(length);
    }

    public static getFirstName() {
        let length = Utility.getRandomInt(Human.firstNameLength.min, Human.firstNameLength.max);
        return this.getSyllables(length);
    }

    public static getLastName() {
        let length = Utility.getRandomInt(Human.lastNameLength.min, Human.lastNameLength.max);
        return this.getSyllables(length);
    }

    // Syllables //////////////////////////////////////////////////////////////////////////////////////////////////

    private static getSyllables(syllableCount: number) {
        let syllables = '';

        for (let i = 0; i < syllableCount; i++) {
            let type = this.getSyllableType(i, syllableCount);
            let syllable = this.getSyllable(type);

            syllables += syllable;
        }

        return syllables;
    }

    private static getSyllable(type: syllableType) {
        switch (type) {
            case syllableType.first: return this.getFirstSyllable();
            case syllableType.middle: return this.getMiddleSyllable();
            case syllableType.last: return this.getLastSyllable();
        }
    }

    private static getFirstSyllable() {
        let startWithVowel = Math.random() < Human.startWithVowelProbability;
        const useConsonantSuffix = Math.random() < Human.useConsonantSuffixProbability;

        let syllable = '';
        if (!startWithVowel) syllable += this.getRandomGrapheme(syllableType.first, false)
        syllable += this.getRandomGrapheme(syllableType.first, true)
        if (useConsonantSuffix) syllable += this.getRandomGrapheme(syllableType.first, false)

        return syllable;
    }

    private static getMiddleSyllable() {
        const useConsonantPrefix = Math.random() < Human.useConsonantPrefixProbability;
        const useConsonantSuffix = Math.random() < Human.useConsonantSuffixProbability;

        let syllable = '';
        if (useConsonantPrefix) syllable += this.getRandomGrapheme(syllableType.middle, false)
        syllable += this.getRandomGrapheme(syllableType.middle, true)
        if (useConsonantSuffix) syllable += this.getRandomGrapheme(syllableType.middle, false)

        return syllable;
    }

    private static getLastSyllable() {
        const useConsonantPrefix = Math.random() < Human.useConsonantPrefixProbability;
        let endWithVowel = Math.random() < Human.endWithVowelProbability;

        let syllable = '';
        if (useConsonantPrefix) syllable += this.getRandomGrapheme(syllableType.last, false)
        syllable += this.getRandomGrapheme(syllableType.last, true)
        if (!endWithVowel) syllable += this.getRandomGrapheme(syllableType.last, false)

        return syllable;
    }

    private static getSyllableType(index, totalLength): syllableType {
        switch (index) {
            case 0: return syllableType.first
            case totalLength - 1: return syllableType.last;
            default: return syllableType.middle;
        }
    }


    // Graphemes //////////////////////////////////////////////////////////////////////////////////////////////////

    private static getRandomGrapheme(type: syllableType, vowel: boolean = true) {
        let grapheme = Human.graphemes.filter(grapheme => {
            return grapheme.isVowel == vowel;
        });

        let optionsArray = grapheme.reduce((accumulator, grapheme) => {
            let weight = this.getWeight(type, grapheme);
            for (let i = 0; i < weight; i++) {
                accumulator.push(grapheme.characters);
            }
            return accumulator;
        }, [])

        let index = Utility.getRandomInt(0, optionsArray.length - 1);
        let randomGrapheme = optionsArray[index];

        return randomGrapheme;
    }

    private static getWeight(type: syllableType, grapheme: Grapheme) {
        switch (type) {
            case syllableType.first: return grapheme.beginningWeight;
            case syllableType.middle: return grapheme.middleWeight;
            case syllableType.last: return grapheme.endingWeight;
        }
    }
}