import type {
  ICovidOverview,
  ICasesOverTime,
  ICovidData,
  IDeathsOverTime,
  IHospitalizedOverTime,
  ICovidMetricsTable,
} from "@/types/covid.types";
import { getPercentage } from "./getPercentage";

const getDataFromLast7AvailableDays = (data: ICovidData[]): ICovidData[] => {
  return data.slice(0, 7);
};

// GROUP COVID OVERVIEW DATA
export const getOverViewData = (data: ICovidData[]): ICovidOverview => {
  // Get the most recent data point
  const latestData = data[0];

  const totalCases = latestData.cases.total.value || 0;
  const totalDeaths = latestData.outcomes.death.total.value || 0;
  const totalTests = latestData.testing.total.value || 0;

  // Calculate mortality rate
  const mortalityRate = getPercentage(totalDeaths / totalCases);

  return {
    totalCases,
    totalDeaths,
    totalTests,
    mortalityRate,
  };
};

// GROUP COVID CASES OVER TIME DATA
export const getCasesOverTimeData = (data: ICovidData[]): ICasesOverTime[] => {
  return getDataFromLast7AvailableDays(data)
    .map((item) => {
      // Ensure we have a valid date string
      const dateStr =
        typeof item.date === "string" ? item.date : item.date.toISOString();
      return {
        date: new Date(dateStr),
        cases: item.cases.total.value || 0,
      };
    })
    .filter((item) => !isNaN(item.date.getTime())) // Filter out invalid dates
    .reverse(); // Reverse to show oldest to newest
};

// GROUP COVID DEATHS OVER TIME DATA
export const getDeathsOverTimeData = (
  data: ICovidData[]
): IDeathsOverTime[] => {
  return getDataFromLast7AvailableDays(data)
    .map((item) => {
      return {
        date: new Date(item.date),
        deaths: item.outcomes.death.total.value || 0,
      };
    })
    .filter((item) => !isNaN(item.date.getTime())) // Filter out invalid dates
    .reverse(); // Reverse to show oldest to newest
};

// GROUP COVID HOSPITALIZED OVER TIME DATA
export const getHospitalizedOverTimeData = (
  data: ICovidData[]
): IHospitalizedOverTime[] => {
  return getDataFromLast7AvailableDays(data)
    .map((item) => {
      return {
        date: new Date(item.date),
        hospitalized: item.outcomes.hospitalized.currently.value || 0,
        inIcu: item.outcomes.hospitalized.in_icu.currently.value || 0,
        onVentilator:
          item.outcomes.hospitalized.on_ventilator.currently.value || 0,
      };
    })
    .filter((item) => !isNaN(item.date.getTime())) // Filter out invalid dates
    .reverse(); // Reverse to show oldest to newest
};

export const getCovidMetricsTableData = (
  data: ICovidData[]
): ICovidMetricsTable[] => {
  return getDataFromLast7AvailableDays(data)
    .map((item) => {
      return {
        date: new Date(item.date),
        newCases: item.cases.total.calculated.change_from_prior_day || 0,
        tested: item.testing.total.calculated.change_from_prior_day || 0,
        recovered:
          item.outcomes.hospitalized.currently.calculated
            .change_from_prior_day || 0,
        deaths: item.outcomes.death.total.value || 0,
        hospitalized: item.outcomes.hospitalized.currently.value || 0,
        inIcu: item.outcomes.hospitalized.in_icu.currently.value || 0,
        onVentilator:
          item.outcomes.hospitalized.on_ventilator.currently.value || 0,
      };
    })
    .filter((item) => !isNaN(item.date.getTime())) // Filter out invalid dates
    .reverse(); // Reverse to show oldest to newest
};
