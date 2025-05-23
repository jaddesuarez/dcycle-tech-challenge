import { useQuery } from "@tanstack/react-query";
import { getCovidData } from "@/services/covid.service";
import { useState, useEffect } from "react";
import type { ICovidResults, IGroupedCovidData } from "@/types/covid.types";
import {
  getOverViewData,
  getCasesOverTimeData,
  getDeathsOverTimeData,
  getHospitalizedOverTimeData,
  getCovidMetricsTableData,
} from "@/utils/groupCovidData";

export const useCovidData = () => {
  const [covidGroupedData, setCovidGroupedData] =
    useState<IGroupedCovidData | null>(null);
  const {
    data: covidDataResponse,
    isLoading: isLoadingCovidData,
    error: errorCovidData,
  } = useQuery<ICovidResults>({
    queryKey: ["covidData"],
    queryFn: getCovidData,
  });

  useEffect(() => {
    if (covidDataResponse) {
      setCovidGroupedData({
        covidOverview: getOverViewData(covidDataResponse.data),
        casesOverTime: getCasesOverTimeData(covidDataResponse.data),
        deathsOverTime: getDeathsOverTimeData(covidDataResponse.data),
        hospitalizedOverTime: getHospitalizedOverTimeData(
          covidDataResponse.data
        ),
        covidMetricsTable: getCovidMetricsTableData(covidDataResponse.data),
      });
    }
  }, [covidDataResponse]);

  return {
    covidGroupedData,
    covidData: covidDataResponse,
    isLoadingCovidData,
    errorCovidData,
  };
};
