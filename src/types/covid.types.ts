export interface ICovidResults {
  links: Links;
  meta: Meta;
  data: ICovidData[];
}

export interface ICovidData {
  date: Date;
  states: number;
  cases: Cases;
  testing: Cases;
  outcomes: Outcomes;
}

export interface Cases {
  total: Total;
}

export interface Total {
  value: number | null;
  calculated: Calculated;
}

export interface Calculated {
  population_percent: number | null;
  change_from_prior_day: number | null;
  seven_day_change_percent: number | null;
  seven_day_average?: number | null;
}

export interface Outcomes {
  hospitalized: Hospitalized;
  death: Cases;
}

export interface Hospitalized {
  currently: Total;
  in_icu: InIcu;
  on_ventilator: InIcu;
}

export interface InIcu {
  currently: Total;
}

export interface Links {
  self: string;
}

export interface Meta {
  build_time: Date;
  license: string;
  version: string;
  field_definitions: FieldDefinition[];
}

export interface FieldDefinition {
  name: string;
  field?: string;
  deprecated: boolean;
  prior_names: string[];
}

export interface IGroupedCovidData {
  covidOverview: ICovidOverview;
  casesOverTime: ICasesOverTime[];
  deathsOverTime: IDeathsOverTime[];
  hospitalizedOverTime: IHospitalizedOverTime[];
  covidMetricsTable: ICovidMetricsTable[];
}

export interface ICovidOverview {
  totalCases: number;
  totalDeaths: number;
  totalTests: number;
  mortalityRate: number;
}

export interface ICasesOverTime {
  cases: number;
  date: Date;
}
export interface IDeathsOverTime {
  deaths: number;
  date: Date;
}

export interface IHospitalizedOverTime {
  hospitalized: number;
  inIcu: number;
  onVentilator: number;
  date: Date;
}

export interface ICovidMetricsTable {
  date: Date;
  newCases: number;
  tested: number;
  recovered: number;
  deaths: number;
  hospitalized: number;
  inIcu: number;
  onVentilator: number;
}
