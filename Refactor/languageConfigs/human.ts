import { Ipsum } from '../interfaces';

export const Human: Ipsum = {
    name: 'Human',
    description: 'The common language in Mythos',
    owner: 'Tony Autrey',
    likeCount: 0,
    reports: 0,
    wordLength: { min: 1, max: 3 },
    firstNameLength: { min: 2, max: 3 },
    lastNameLength: { min: 3, max: 4 },
    startWithVowelProbability: 1,
    endWithVowelProbability: 0,
    useConsonantPrefixProbability: .5,
    useConsonantSuffixProbability: .5,
    graphemes: [
        {
            characters: 'a',
            isVowel: true,
            beginningWeight: 1,
            middleWeight: 0,
            endingWeight: 0,
        },
        {
            characters: 'e',
            isVowel: true,
            beginningWeight: 1,
            middleWeight: 0,
            endingWeight: 1,
        
        },
        {
            characters: 'o',
            isVowel: true,
            beginningWeight: 0,
            middleWeight: 1,
            endingWeight: 1,
        },
        {
            characters: 't',
            isVowel: false,
            beginningWeight: 1,
            middleWeight: 0,
            endingWeight: 0,
        },
        {
            characters: 'r',
            isVowel: false,
            beginningWeight: 0,
            middleWeight: 1,
            endingWeight: 0,
        },
        {
            characters: 'b',
            isVowel: false,
            beginningWeight: 0,
            middleWeight: 0,
            endingWeight: 1,
        },
    ]
}