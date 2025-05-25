import { PageHeader } from "@/components/PageHeader/PageHeader.component";
import { PageLayout } from "@/components/PageLayout/PageLayout.component";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NameOverview } from "@/components/NameOverview/NameOverview.component";
import { NameCountries } from "@/components/NameCountries/NameCountries.component";
import { NameAnalyzerAI } from "@/components/NameAnalizerAI/NameAnalizerAI.component";
import { NameForm } from "@/components/NameForm/NameForm.component";
import { useNameData } from "@/hooks/useNameData";
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary.component";
import { LoadingOverlay } from "@/components/LoadingOverlay/LoadingOverlay.component";
import { BotIcon } from "lucide-react";

export const NamePage = () => {
  const {
    nameData,
    namAnalysisAI,
    isLoadingNameData,
    errorNameData,
    fetchNameData,
  } = useNameData();

  if (isLoadingNameData) return <LoadingOverlay />;
  if (errorNameData) return <ErrorBoundary />;

  return (
    <PageLayout>
      <PageHeader
        title="Name Search"
        description="Search for data on any name to get age, gender, and nationality predictions"
      />
      <NameForm onSearch={fetchNameData} />
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="countries">Countries</TabsTrigger>
          <TabsTrigger
            value="name-analysis-ai"
            className="flex gap-2 text-midnightBlue font-bold"
          >
            <BotIcon className="w-4 h-4" />
            AI Powered Analysis
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          {nameData && <NameOverview nameData={nameData} />}
        </TabsContent>
        <TabsContent value="countries">
          {nameData && <NameCountries nameData={nameData} />}
        </TabsContent>
        <TabsContent value="name-analysis-ai">
          {namAnalysisAI && <NameAnalyzerAI nameAnalysisAI={namAnalysisAI} />}
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};
