import assert from "node:assert/strict";
import { test } from "node:test";
import {
  type Contribution,
  dateFromIso,
  getMonthLabels,
  isContribution,
  toWeeks,
} from "./contributions.ts";

const DAY = 86_400_000;

const weeksEnding = (end: string): (Contribution | null)[][] => {
  const last = dateFromIso(end);
  const lastSunday = new Date(last.getTime() - last.getUTCDay() * DAY);
  const weeks: (Contribution | null)[][] = [];

  for (let week = 52; week >= 0; week -= 1) {
    const days: (Contribution | null)[] = [];

    for (let day = 0; day < 7; day += 1) {
      const date = new Date(lastSunday.getTime() - week * 7 * DAY + day * DAY);

      days.push(
        date > last
          ? null
          : { count: 1, date: date.toISOString().slice(0, 10), level: 1 }
      );
    }

    weeks.push(days);
  }

  return weeks;
};

const assertLabels = (weeks: (Contribution | null)[][], month: string) => {
  const labels = getMonthLabels(weeks);
  const last = labels.at(-1);

  assert.ok(last);
  assert.equal(last.label, month);
  assert.ok(last.end - last.start >= 2);

  for (const [index, label] of labels.entries()) {
    const previous = labels[index - 1];

    assert.ok(label.end - label.start >= 2);
    if (previous) {
      assert.equal(label.start, previous.end);
    }
  }
};

test("keeps the current month label when it has one week", () => {
  assertLabels(weeksEnding("2026-12-03"), "Dec");
});

test("keeps the current month label when it has two weeks", () => {
  assertLabels(weeksEnding("2026-11-14"), "Nov");
});

test("aligns a Monday-first payload to Sunday columns", () => {
  const contributions = [
    "2026-11-09",
    "2026-11-10",
    "2026-11-11",
    "2026-11-12",
    "2026-11-13",
    "2026-11-14",
    "2026-11-15",
  ].map((date) => ({ count: 1, date, level: 1 }));
  const weeks = toWeeks(contributions);

  assert.equal(weeks.length, 2);
  assert.equal(weeks[0]?.[0], null);
  assert.equal(weeks[0]?.[1]?.date, "2026-11-09");
  assert.equal(weeks[1]?.[0]?.date, "2026-11-15");
  assert.equal(weeks[1]?.[6], null);
});

test("rejects an invalid contribution level", () => {
  assert.equal(
    isContribution({ count: 1, date: "2026-11-09", level: 5 }),
    false
  );
});
