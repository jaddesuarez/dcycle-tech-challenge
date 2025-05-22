import { fetchApi } from "@/config/axios.config";
import type {
  IAgeData,
  IGenderData,
  INationalityData,
} from "@/types/name.types";

export const getAgeByName = async (name: string): Promise<IAgeData> => {
  const response = await fetchApi.get<IAgeData>(name);
  return response.data;
};

export const getGenderByName = async (name: string): Promise<IGenderData> => {
  const response = await fetchApi.get<IGenderData>(name);
  return response.data;
};

export const getNationalityByName = async (
  name: string
): Promise<INationalityData> => {
  const response = await fetchApi.get<INationalityData>(name);
  return response.data;
};
