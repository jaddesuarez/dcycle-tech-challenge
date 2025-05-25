import type { INameAnalysisAI } from "@/types/name.types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BookCheck,
  BookOpen,
  Link as LinkIcon,
  Sparkles,
  Leaf,
  Earth,
  Star,
  Palette,
  Hash,
  Brain,
  Heart,
  MapPin,
  ScrollText,
} from "lucide-react";
import { getLuckyColorStyle } from "@/utils/colors";

const originCard = [
  {
    icon: <MapPin size={30} className="text-ceruleanBlue" />,
    label: "Origin",
    value: (data: INameAnalysisAI) => data.origin.culturalOrigin,
  },
  {
    icon: <ScrollText size={30} className="text-ceruleanBlue" />,
    label: "Etymology",
    value: (data: INameAnalysisAI) => data.origin.etymology,
  },
  {
    icon: <BookOpen size={30} className="text-ceruleanBlue" />,
    label: "Historical Context",
    value: (data: INameAnalysisAI) => data.origin.historicalContext,
  },
];

const meaningCard = [
  {
    icon: <BookCheck size={30} className="text-ceruleanBlue" />,
    label: "Primary Meaning",
    value: (data: INameAnalysisAI) => data.meaningAndPersonality.primaryMeaning,
  },
  {
    icon: <Brain size={30} className="text-ceruleanBlue" />,
    label: "Personality Traits",
    value: (data: INameAnalysisAI) =>
      data.meaningAndPersonality.personalityTraits,
  },
];

const astrologyBasicInfo = [
  {
    icon: <Star size={20} className="text-ceruleanBlue" />,
    label: "Sign",
    value: (data: INameAnalysisAI) => data.astrology.mostCommonSign,
  },
  {
    icon: <Leaf size={20} className="text-ceruleanBlue" />,
    label: "Element",
    value: (data: INameAnalysisAI) => data.astrology.element,
  },
  {
    icon: <Earth size={20} className="text-ceruleanBlue" />,
    label: "Planet",
    value: (data: INameAnalysisAI) => data.astrology.planet,
  },
];

export const NameAnalyzerAI = ({
  nameAnalysisAI,
}: {
  nameAnalysisAI: INameAnalysisAI;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Origin Card */}
        <NameAnalizerAICard
          icon={<Earth size={20} className="text-ceruleanBlue" />}
          title="Cultural Origin"
        >
          {originCard.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              {item.icon}
              <div>
                <p className="font-semibold text-sm text-gunmetalGrey/60">
                  {item.label}
                </p>
                <p className="text-gunmetalGrey">
                  {item.value(nameAnalysisAI)}
                </p>
              </div>
            </div>
          ))}
        </NameAnalizerAICard>

        {/* Astrology Card */}
        <NameAnalizerAICard
          icon={<Sparkles size={20} className="text-ceruleanBlue" />}
          title="Astrological Insights"
        >
          <div className="grid grid-cols-1 gap-6">
            {/* Basic Info */}
            <div className="grid grid-cols-3 gap-4">
              {astrologyBasicInfo.map((item, index) => (
                <InfoItem
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  value={item.value(nameAnalysisAI)}
                />
              ))}
            </div>

            <KeyTraits traits={nameAnalysisAI.astrology.keyTraits} />

            {/* Lucky Numbers and Colors */}
            <div className="grid grid-cols-2 gap-4">
              <LuckyNumbers numbers={nameAnalysisAI.astrology.luckyNumbers} />
              <LuckyColors colors={nameAnalysisAI.astrology.luckyColors} />
            </div>
          </div>
        </NameAnalizerAICard>
      </div>

      {/* Related Names Card */}
      <NameAnalizerAICard
        icon={<LinkIcon size={20} className="text-ceruleanBlue" />}
        title="Related Names"
      >
        <div className="flex flex-wrap gap-2">
          {nameAnalysisAI.relatedNames.map((name, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-ceruleanBlue/10 text-ceruleanBlue rounded-full text-sm font-medium"
            >
              {name}
            </span>
          ))}
        </div>
      </NameAnalizerAICard>

      {/* Meaning Card */}
      <NameAnalizerAICard
        icon={<Heart size={20} className="text-ceruleanBlue" />}
        title="Meaning & Personality"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {meaningCard.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              {item.icon}
              <div>
                <p className="font-semibold text-sm text-gunmetalGrey/60">
                  {item.label}
                </p>
                <p className="text-gunmetalGrey">
                  {item.value(nameAnalysisAI)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </NameAnalizerAICard>
    </div>
  );
};

export const NameAnalizerAICard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gunmetalGrey/80 font-bold flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">{children}</CardContent>
    </Card>
  );
};

const InfoItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-2">
    {icon}
    <div>
      <p className="font-semibold text-sm text-gunmetalGrey/60">{label}</p>
      <p className="text-gunmetalGrey">{value}</p>
    </div>
  </div>
);

const KeyTraits = ({ traits }: { traits: string[] }) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <Brain size={20} className="text-ceruleanBlue" />
      <p className="font-semibold text-sm text-gunmetalGrey/60">Key Traits</p>
    </div>
    <div className="flex flex-wrap gap-2">
      {traits.map((trait, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-midnightBlue/10 text-midnightBlue rounded-full text-sm font-medium"
        >
          {trait}
        </span>
      ))}
    </div>
  </div>
);

const LuckyNumbers = ({ numbers }: { numbers: string[] }) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <Hash size={20} className="text-ceruleanBlue" />
      <p className="font-semibold text-sm text-gunmetalGrey/60">
        Lucky Numbers
      </p>
    </div>
    <div className="flex flex-wrap gap-2">
      {numbers.map((number, index) => (
        <span
          key={index}
          className="w-8 h-8 flex items-center justify-center bg-pigmentGreen/10 text-pigmentGreen rounded-full text-sm font-medium"
        >
          {number}
        </span>
      ))}
    </div>
  </div>
);

const LuckyColors = ({ colors }: { colors: string[] }) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <Palette size={20} className="text-ceruleanBlue" />
      <p className="font-semibold text-sm text-gunmetalGrey/60">Lucky Colors</p>
    </div>
    <div className="flex flex-wrap gap-2">
      {colors.map((color, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger
              className={`w-8 h-8 rounded-full ${getLuckyColorStyle(
                color
              )} shadow-sm`}
            ></TooltipTrigger>
            <TooltipContent side="bottom">{color}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  </div>
);
