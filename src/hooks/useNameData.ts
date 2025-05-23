import { useState } from "react";
import type { INameData } from "@/types/name.types";
import { useMutation } from "@tanstack/react-query";
import {
  getAgeByName,
  getNationalityByName,
  getGenderByName,
} from "@/services/name.service";
import { normalizeName } from "@/utils/normalizeName";
export const useNameData = () => {
  const [nameData, setNameData] = useState<INameData | null>(null);

  const {
    mutate: fetchNameData,
    isPending: isLoadingNameData,
    error: errorNameData,
  } = useMutation({
    mutationFn: async (name: string) => {
      const normalizedName = normalizeName(name);
      const [gender, countries, age] = await Promise.all([
        getGenderByName(normalizedName),
        getNationalityByName(normalizedName),
        getAgeByName(normalizedName),
      ]);

      return {
        name,
        gender: gender,
        countries,
        age,
      };
    },
    onSuccess: (data) => {
      setNameData(data);
    },
    onError: () => {
      console.log("Something went wrong");
    },
  });

  return {
    nameData,
    isLoadingNameData,
    errorNameData,
    fetchNameData,
  };
};
