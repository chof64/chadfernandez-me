export interface Contribution {
  count: number;
  date: string;
  level: number;
}

export const contributionCellClass =
  "aspect-square rounded-[2px] bg-(--github-0) data-[level=1]:bg-(--github-1) data-[level=2]:bg-(--github-2) data-[level=3]:bg-(--github-3) data-[level=4]:bg-(--github-4) hover:outline-1 hover:outline-offset-1 hover:outline-foreground";

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  timeZone: "UTC",
});

export const dateFromIso = (date: string) => new Date(`${date}T00:00:00Z`);

const MIN_MONTH_LABEL_COLUMNS = 2;

export const getMonthLabels = (weeks: (Contribution | null)[][]) => {
  const labels: { label: string; start: number; end: number }[] = [];

  for (const [index, week] of weeks.entries()) {
    const day = week.findLast(
      (contribution): contribution is Contribution => contribution !== null
    );

    if (!day) {
      continue;
    }

    const label = monthFormatter.format(dateFromIso(day.date));
    const previous = labels.at(-1);

    if (previous?.label === label) {
      previous.end = index + 1;
    } else {
      labels.push({ label, start: index, end: index + 1 });
    }
  }

  const current = labels.at(-1);
  const previous = labels.at(-2);

  if (current && current.end - current.start < MIN_MONTH_LABEL_COLUMNS) {
    current.start = Math.max(0, current.end - MIN_MONTH_LABEL_COLUMNS);
    if (previous) {
      previous.end = current.start;
    }
  }

  return labels.filter(
    ({ start, end }) => end - start >= MIN_MONTH_LABEL_COLUMNS
  );
};
