import { useState } from "react";
import type { INameData, INameAnalysisAI } from "@/types/name.types";
import { useMutation } from "@tanstack/react-query";
import {
  getAgeByName,
  getNationalityByName,
  getGenderByName,
} from "@/services/name.service";

import { normalizeName } from "@/utils/normalizeName";
import { getNameAnalysis } from "@/services/ai.service";
export const useNameData = () => {
  const [nameData, setNameData] = useState<INameData | null>(null);
  const [namAnalysisAI, setNameAnalysisAI] = useState<INameAnalysisAI | null>(
    null
  );

  const {
    mutate: fetchNameData,
    isPending: isLoadingNameData,
    error: errorNameData,
  } = useMutation({
    mutationFn: async (name: string) => {
      const normalizedName = normalizeName(name);
      const [gender, countries, age, analysisAI] = await Promise.all([
        getGenderByName(normalizedName),
        getNationalityByName(normalizedName),
        getAgeByName(normalizedName),
        getNameAnalysis(normalizedName),
      ]);

      return {
        nameData: {
          name,
          gender: gender,
          countries,
          age,
        },
        analysisAI,
      };
    },
    onSuccess: (data) => {
      setNameData(data.nameData);
      setNameAnalysisAI(data.analysisAI);
    },
    onError: () => {
      console.log("Something went wrong");
    },
  });

  return {
    nameData,
    namAnalysisAI,
    isLoadingNameData,
    errorNameData,
    fetchNameData,
  };
};
