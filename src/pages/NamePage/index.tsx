import { PageHeader } from "@/components/PageHeader/PageHeader.component";
import { PageLayout } from "@/components/PageLayout/PageLayout.component";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NameOverview } from "@/components/NameOverview/NameOverview.component";
import { NameCountries } from "@/components/NameCountries/NameCountries.component";
import { NameForm } from "@/components/NameForm/NameForm.component";
import { useNameData } from "@/hooks/useNameData";

export const NamePage = () => {
  const { nameData, isLoading, isError, fetchNameData } = useNameData();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

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
        </TabsList>
        <TabsContent value="overview">
          {nameData && <NameOverview nameData={nameData} />}
        </TabsContent>
        <TabsContent value="countries">
          {nameData && <NameCountries nameData={nameData} />}
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};
