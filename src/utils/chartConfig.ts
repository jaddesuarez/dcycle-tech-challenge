import type { ChartConfig } from "@/components/ui/chart";

export const createChartConfig = (key: string, label: string): ChartConfig =>
  ({
    [key]: {
      label,
      color: "midnightBlue",
    },
  } as ChartConfig);

// You can add more preset configurations here
export const chartConfigs = {
  probability: createChartConfig("probability", "Probability (%) "),
  cases: createChartConfig("cases", "Cases "),
  deaths: createChartConfig("deaths", "Deaths "),
  tests: createChartConfig("tests", "Tests "),
  hospitalized: {
    hospitalized: {
      label: "Hospitalized ",
      color: "var(--chart-1)",
    },
    inIcu: {
      label: "In ICU ",
      color: "var(--chart-2)",
    },
    onVentilator: {
      label: "On Ventilator ",
      color: "var(--chart-3)",
    },
  },
} as const;
