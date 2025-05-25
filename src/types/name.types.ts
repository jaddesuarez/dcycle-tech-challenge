export interface IAgeData {
  count: number;
  name: string;
  age: number;
}

export type TGender = "male" | "female" | null;

export interface IGenderData {
  count: number;
  name: string;
  gender: TGender | null;
  probability: number;
}

export interface ICountry {
  country_id: string;
  probability: number;
}

export interface INationalityData {
  count: number;
  name: string;
  country: ICountry[];
}

export interface INameData {
  name: string;
  age: IAgeData;
  gender: IGenderData;
  countries: INationalityData;
}

export interface INameAnalysisAI {
  origin: {
    culturalOrigin: string;
    etymology: string;
    historicalContext: string;
  };
  relatedNames: string[];
  astrology: {
    mostCommonSign: string;
    element: string;
    planet: string;
    keyTraits: string[];
    luckyNumbers: string[];
    luckyColors: string[];
  };
  meaningAndPersonality: {
    primaryMeaning: string;
    personalityTraits: string;
  };
}
