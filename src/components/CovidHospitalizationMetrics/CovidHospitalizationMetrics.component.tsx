import type { IHospitalizedOverTime } from "@/types/covid.types";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { DataWrapper } from "@/components/DataWrapper/DataWrapper.component";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { formatDate } from "@/utils/date";
import { chartConfigs } from "@/utils/chartConfig";

export const CovidHospitalizationMetrics = ({
  hospitalizedOverTime,
}: {
  hospitalizedOverTime: IHospitalizedOverTime[];
}) => {
  return (
    <DataWrapper
      title="Hospitalization Metrics"
      description="COVID-19 hospitalization metrics in the United States over a 7-day period"
    >
      <ChartContainer config={chartConfigs.hospitalized}>
        <BarChart data={hospitalizedOverTime}>
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            tickFormatter={(value) => value.toLocaleString()}
            tick={{ fontSize: 12 }}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                labelFormatter={(_value, payload) =>
                  formatDate(payload?.[0]?.payload?.date)
                }
              />
            }
          />
          {Object.entries(chartConfigs.hospitalized).map(([key, config]) => (
            <Bar
              key={key}
              dataKey={key}
              fill={config.color}
              name={config.label}
            />
          ))}
          <ChartLegend content={<ChartLegendContent />} />
        </BarChart>
      </ChartContainer>
    </DataWrapper>
  );
};
