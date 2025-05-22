import { fetchApi } from "@/config/axios.config";
import type { ICovidResults } from "@/types/covid.types";

export const getCovidData = async () => {
  const response = await fetchApi.get<ICovidResults>("/covid/historical");
  return response.data;
};
