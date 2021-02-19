export interface Ipsum {
  name: string;
  description: string;
  owner: string;
  likeCount: number;
  reports: number;
  wordLength: Length;
  firstNameLength: Length;
  lastNameLength: Length;
  startWithVowelProbability: number;
  endWithVowelProbability: number;
  useConsonantPrefixProbability: number;
  useConsonantSuffixProbability: number;
  graphemes: Grapheme[];
}

export interface Grapheme {
  characters: string;
  isVowel: boolean;
  beginningWeight: number;
  middleWeight: number;
  endingWeight: number;
}

export interface Length {
  min: number;
  max: number;
}

export enum syllableType {
  "first",
  "middle",
  "last",
}
