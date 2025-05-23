import { useCovidData } from "@/hooks/useCovidData";

import { PageHeader } from "@/components/PageHeader/PageHeader.component";
import { PageLayout } from "@/components/PageLayout/PageLayout.component";

import { LoadingOverlay } from "@/components/LoadingOverlay/LoadingOverlay.component";
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary.component";

import { CovidOverview } from "@/components/CovidOverview/CovidOverview.component";
import { CovidHospitalizationMetrics } from "@/components/CovidHospitalizationMetrics/CovidHospitalizationMetrics.component";
import { CovidMetricsTable } from "@/components/CovidMetricsTable/CovidMetricsTable.component";
import { CovidCasesOverTime } from "@/components/CovidCasesOverTime/CovidCasesOverTime.component";
import { CovidDeathsOverTime } from "@/components/CovidDeathsOverTime/CovidDeathsOverTime.component";

export const CovidPage = () => {
  const { isLoadingCovidData, errorCovidData, covidGroupedData } =
    useCovidData();

  if (isLoadingCovidData) return <LoadingOverlay />;
  if (errorCovidData) return <ErrorBoundary />;

  return (
    <PageLayout>
      <PageHeader
        title="Covid Data"
        description="United States COVID-19 statistics and trends"
      />
      <div className="flex flex-col gap-4">
        {covidGroupedData && (
          <CovidOverview covidOverview={covidGroupedData.covidOverview} />
        )}
        <div className="flex flex-col lg:flex-row gap-4">
          {covidGroupedData && (
            <CovidCasesOverTime
              casesOverTime={covidGroupedData.casesOverTime}
            />
          )}
          {covidGroupedData && (
            <CovidDeathsOverTime
              deathsOverTime={covidGroupedData.deathsOverTime}
            />
          )}
        </div>
        <CovidHospitalizationMetrics />
        <CovidMetricsTable />
      </div>
    </PageLayout>
  );
};
