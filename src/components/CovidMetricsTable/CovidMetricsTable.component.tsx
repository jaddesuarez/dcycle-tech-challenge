import type { ICovidMetricsTable } from "@/types/covid.types";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../ui/data-table";
import { formatDate } from "@/utils/date";
import { Calendar } from "lucide-react";
import { cn } from "@/utils/cn";

const columns: ColumnDef<ICovidMetricsTable>[] = [
  {
    header: () => (
      <span className="flex items-center gap-2">
        <Calendar className="h-4 w-4 text-gray-500" />
        <span>Date</span>
      </span>
    ),
    accessorKey: "date",
    cell: ({ row }) => <DateCell date={row.getValue("date")} />,
    sortingFn: "datetime",
  },
  {
    header: "New Cases",
    accessorKey: "newCases",
    cell: ({ row }) => {
      return <NumberCell value={row.getValue("newCases")} />;
    },
    sortingFn: "alphanumeric",
  },
  {
    header: "Tested",
    accessorKey: "tested",
    cell: ({ row }) => {
      return <NumberCell value={row.getValue("tested")} />;
    },
    sortingFn: "alphanumeric",
  },
  {
    header: "Recovered",
    accessorKey: "recovered",
    cell: ({ row }) => {
      return <NumberCell value={row.getValue("recovered")} />;
    },
    sortingFn: "alphanumeric",
  },
  {
    header: "Deaths",
    accessorKey: "deaths",
    cell: ({ row }) => {
      return <NumberCell value={row.getValue("deaths")} />;
    },
    sortingFn: "alphanumeric",
  },
  {
    header: "Hospitalized",
    accessorKey: "hospitalized",
    cell: ({ row }) => {
      return <NumberCell value={row.getValue("hospitalized")} />;
    },
    sortingFn: "alphanumeric",
  },
  {
    header: "In ICU",
    accessorKey: "inIcu",
    cell: ({ row }) => {
      return <NumberCell value={row.getValue("inIcu")} />;
    },
    sortingFn: "alphanumeric",
  },
  {
    header: "On Ventilator",
    accessorKey: "onVentilator",
    cell: ({ row }) => {
      return <NumberCell value={row.getValue("onVentilator")} />;
    },
    sortingFn: "alphanumeric",
  },
];

export const CovidMetricsTable = ({
  covidMetricsTable,
}: {
  covidMetricsTable: ICovidMetricsTable[];
}) => {
  return (
    <div className="hidden lg:block">
      <DataTable columns={columns} data={covidMetricsTable} />
    </div>
  );
};

const NumberCell = ({ value }: { value: number }) => {
  return (
    <span
      className={cn(
        "font-semibold",
        value > 0 ? "text-red-600" : "text-green-600"
      )}
    >
      {Math.abs(value).toLocaleString()}
    </span>
  );
};

const DateCell = ({ date }: { date: Date }) => {
  return (
    <span className="bg-gray-100 rounded-md px-2 py-1 w-fit">
      {formatDate(date)}
    </span>
  );
};
