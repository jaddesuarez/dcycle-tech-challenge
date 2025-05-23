import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartWrapper } from "@/components/ChartWrapper/ChartWrapper.component";
import { BarChart, Bar, CartesianGrid, XAxis } from "recharts";
import { type ChartConfig } from "@/components/ui/chart";
import { getPercentage } from "@/utils/getPercentage";
import { getCountryFlag } from "@/utils/getCountryFlag";
import type { INameData } from "@/types/name.types";
import { upperCaseFirstLetter } from "@/utils/normalizeName";
interface NameCountriesProps {
  nameData: INameData;
}

export const NameCountries = ({ nameData }: NameCountriesProps) => {
  const { countries: countriesData, name } = nameData;
  const chartData = countriesData.country.map((country) => ({
    country: getCountryFlag(country.country_id),
    probability: getPercentage(country.probability),
  }));

  const chartConfig = {
    probability: {
      label: "Probability (%) ",
      color: "midnightBlue",
    },
  } satisfies ChartConfig;

  return (
    <ChartWrapper
      title="Country Distribution"
      description={`Probability by country for the name ${upperCaseFirstLetter(
        name
      )}`}
    >
      <ChartContainer config={chartConfig} className="max-h-100 w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="country"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tick={{ fontSize: 28 }}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="probability"
            fill="var(--color-probability)"
            radius={4}
          />
        </BarChart>
      </ChartContainer>
    </ChartWrapper>
  );
};
