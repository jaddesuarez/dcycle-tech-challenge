import type { IDeathsOverTime } from "@/types/covid.types";
import { ChartWrapper } from "@/components/ChartWrapper/ChartWrapper.component";
import { OverTimeLineChat } from "../OverTimeLineChat/OverTimeLineChat.component";

export const CovidDeathsOverTime = ({
  deathsOverTime,
}: {
  deathsOverTime: IDeathsOverTime[];
}) => {
  return (
    <ChartWrapper
      title="Deaths Over Time"
      description="COVID-19 deaths in the United States over a 7-day period"
    >
      <OverTimeLineChat
        configKey="deaths"
        data={deathsOverTime.map((item) => ({
          date: item.date,
          value: item.deaths,
        }))}
      />
    </ChartWrapper>
  );
};
