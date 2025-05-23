import type { ICovidOverview } from "@/types/covid.types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const CovidOverview = ({
  covidOverview,
}: {
  covidOverview: ICovidOverview;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <CovidOverviewCard
        title="Total Cases"
        value={covidOverview.totalCases.toLocaleString()}
      />
      <CovidOverviewCard
        title="Total Deaths"
        value={covidOverview.totalDeaths.toLocaleString()}
      />
      <CovidOverviewCard
        title="Total Tests"
        value={covidOverview.totalTests.toLocaleString()}
      />
      <CovidOverviewCard
        title="Mortality Rate"
        value={`${covidOverview.mortalityRate}%`}
      />
    </div>
  );
};

export const CovidOverviewCard = ({
  title,
  value,
}: {
  title: string;
  value: number | string;
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-gunmetalGrey/80 font-bold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-2xl lg:text-3xl font-bold text-gunmetalGrey">
        {value}
      </CardContent>
    </Card>
  );
};
