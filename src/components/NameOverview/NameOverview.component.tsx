import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { getPercentage } from "@/utils/getPercentage";
import type { INameData } from "@/types/name.types";
import {
  UserIcon,
  Mars,
  Venus,
  Calendar,
  Globe,
  CircleHelp,
} from "lucide-react";

interface NameOverviewProps {
  nameData: INameData;
}

export const NameOverview = ({ nameData }: NameOverviewProps) => {
  if (!nameData) return null;
  const {
    gender: genderData,
    age: ageData,
    countries: countriesData,
    name,
  } = nameData;
  const getGenderIcon = (gender: string | null) => {
    switch (gender) {
      case "female":
        return <Venus />;
      case "male":
        return <Mars />;
      default:
        return <CircleHelp />;
    }
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col md:flex-row lg:gap-10 gap-5">
        <NameOverviewCard
          title="Name Analysis"
          info={name}
          icon={<UserIcon />}
          description="Based on name analysis"
        />
        <NameOverviewCard
          title="Age Prediction"
          info={ageData.age.toString()}
          icon={<Calendar />}
          description={`Based on ${ageData.count} records`}
        />
        <NameOverviewCard
          title="Gender Prediction"
          info={genderData.gender || "Unknown"}
          icon={getGenderIcon(genderData.gender)}
          description={`${getPercentage(genderData.probability)}% probability`}
        />
      </div>
      <CountryOverviewCard
        title="Country Analysis"
        info={countriesData.country
          .slice(0, 3)
          .map((country: { country_id: string; probability: number }) => ({
            countryCode: country.country_id,
            percentage: getPercentage(country.probability),
          }))}
      />
    </div>
  );
};

const NameOverviewCard = ({
  title,
  info,
  icon,
  description,
}: {
  title: string;
  info: string;
  icon: React.ReactNode;
  description: string;
}) => {
  return (
    <Card className="w-full md:w-1/3">
      <CardHeader>
        <CardTitle className="text-gunmetalGrey/80 font-bold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-2 items-center justify-between">
          <h2 className="text-2xl font-bold first-letter:uppercase">{info}</h2>
          {icon}
        </div>
      </CardContent>
      <CardFooter className="text-sm text-gunmetalGrey/80">
        {description}
      </CardFooter>
    </Card>
  );
};

const CountryOverviewCard = ({
  title,
  info,
}: {
  title: string;
  info: {
    countryCode: string;
    percentage: number;
  }[];
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-gunmetalGrey/80 font-bold">
          {title}
        </CardTitle>
        <CardDescription className="text-gunmetalGrey/80">
          Top countries associated with the name
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row gap-2 items-center justify-around">
        {info.map((item) => (
          <div
            key={item.countryCode}
            className="flex flex-col gap-2 items-center justify-center"
          >
            <Globe size={40} className="text-ceruleanBlue" />
            <h2 className="text-xl font-bold">{item.countryCode}</h2>
            <h2 className="text-sm text-gunmetalGrey/80">{item.percentage}%</h2>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
