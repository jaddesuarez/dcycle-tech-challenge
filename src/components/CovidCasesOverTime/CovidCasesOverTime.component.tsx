import type { ICasesOverTime } from "@/types/covid.types";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { DataWrapper } from "@/components/DataWrapper/DataWrapper.component";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import { formatDate } from "@/utils/date";
import { chartConfigs } from "@/utils/chartConfig";

export const CovidCasesOverTime = ({
  casesOverTime,
}: {
  casesOverTime: ICasesOverTime[];
}) => {
  const minYAxisValue = casesOverTime?.[0]?.cases;

  return (
    <DataWrapper
      title="Cases Over Time"
      description="COVID-19 cases in the United States over a 7-day period"
    >
      <ChartContainer config={chartConfigs.cases}>
        <LineChart data={casesOverTime}>
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            domain={[minYAxisValue ?? "auto", "auto"]}
            tickFormatter={(value) => value.toLocaleString()}
            tick={{ fontSize: 12 }}
            allowDataOverflow={false}
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
          <Line
            type="monotone"
            dataKey="cases"
            stroke="var(--color-cases)"
            strokeWidth={2}
            dot={false}
          />
          <ChartLegend content={<ChartLegendContent />} />
        </LineChart>
      </ChartContainer>
    </DataWrapper>
  );
};
