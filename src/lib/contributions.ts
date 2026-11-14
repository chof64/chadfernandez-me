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

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export const isContribution = (value: unknown): value is Contribution => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const record = value as Record<string, unknown>;

  return (
    typeof record.date === "string" &&
    ISO_DATE.test(record.date) &&
    typeof record.count === "number" &&
    Number.isInteger(record.count) &&
    record.count >= 0 &&
    typeof record.level === "number" &&
    Number.isInteger(record.level) &&
    record.level >= 0 &&
    record.level <= 4
  );
};

export const toWeeks = (contributions: Contribution[]) => {
  const first = contributions[0];

  if (!first) {
    throw new Error("Missing contribution data");
  }

  const leadingDays = dateFromIso(first.date).getUTCDay();
  const days: (Contribution | null)[] = [
    ...Array.from({ length: leadingDays }, () => null),
    ...contributions,
  ];
  const weeks: (Contribution | null)[][] = [];

  for (let index = 0; index < days.length; index += 7) {
    const week = days.slice(index, index + 7);

    while (week.length < 7) {
      week.push(null);
    }

    weeks.push(week);
  }

  return weeks;
};

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
