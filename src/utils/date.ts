import { format, isValid } from "date-fns";

export const formatDate = (date: Date | string) => {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return isValid(dateObj) ? format(dateObj, "MMM d, yyyy") : "Invalid Date";
};
