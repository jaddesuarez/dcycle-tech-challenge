import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import { formatDate } from "@/utils/date";
import { chartConfigs } from "@/utils/chartConfig";

export const OverTimeLineChat = ({
  configKey,
  data,
}: {
  configKey: keyof typeof chartConfigs;
  data: {
    date: Date;
    value: number;
  }[];
}) => {
  const minYAxisValue = data?.[0]?.value;

  return (
    <ChartContainer config={chartConfigs[configKey]}>
      <LineChart data={data}>
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
          dataKey="value"
          name={configKey}
          stroke="var(--color-midnightBlue)"
          strokeWidth={2}
          dot={false}
        />
        <ChartLegend
          content={<ChartLegendContent nameKey={configKey} />}
          verticalAlign="bottom"
          height={36}
        />
      </LineChart>
    </ChartContainer>
  );
};
