import { formatDistance, format, isBefore, subWeeks } from "date-fns";

export const formatDate = (date: Date) => {
  const now = new Date();

  if (isBefore(date, subWeeks(now, 1))) {
    return `Published on ${format(date, "MMM d, yyyy")}`;
  } else {
    return `Published ${formatDistance(date, now, { addSuffix: true })}`;
  }
};
