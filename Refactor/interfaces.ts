export interface Ipsum {
    name: string
    description: string
    owner: string
    likeCount: number
    reports: number
    wordLength: Length
    firstNameLength: Length
    lastNameLength: Length
    startWithVowelProbability: number
    endWithVowelProbability: number
    useConsonantPrefixProbability: number
    useConsonantSuffixProbability: number
    graphemes: Grapheme[]
}

export interface Grapheme {
    characters: string
    isVowel: boolean
    beginningWeight: number
    middleWeight: number
    endingWeight: number
}

export interface Length {
    min: number;
    max: number;
}

export enum syllableType {
    'first',
    'middle',
    'last',
}

/*
    Words are combinations of vowels prefixed and suffixed by consonants

    How weights work:
        Can be 0 - 100
        Default is 50

    Config variables:
        start with vowel chance
        end with vowel chance
        vowel has consonant prefix chance
        vowel has consonant suffix chance
*/