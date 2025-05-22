import { PageHeader } from "@/components/PageHeader/PageHeader.component";
import { PageLayout } from "@/components/PageLayout/PageLayout.component";
import { CovidOverview } from "@/components/CovidOverview/CovidOverview.component";
import { CovidHospitalizationMetrics } from "@/components/CovidHospitalizationMetrics/CovidHospitalizationMetrics.component";
import { CovidMetricsTable } from "@/components/CovidMetricsTable/CovidMetricsTable.component";
import { CovidCasesOverTime } from "@/components/CovidCasesOverTime/CovidCasesOverTime.component";
import { CovidDeathsOverTime } from "@/components/CovidDeathsOverTime/CovidDeathsOverTime.component";

export const CovidPage = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Covid Data"
        description="United States COVID-19 statistics and trends"
      />
      <div className="flex flex-col gap-4">
        <CovidOverview />
        <div className="flex gap-4">
          <CovidCasesOverTime />
          <CovidDeathsOverTime />
        </div>
        <CovidHospitalizationMetrics />
        <CovidMetricsTable />
      </div>
    </PageLayout>
  );
};
