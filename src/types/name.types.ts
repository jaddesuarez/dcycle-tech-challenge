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
