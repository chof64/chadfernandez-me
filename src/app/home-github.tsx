"use client";

import { useEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function HomeGitHub() {
  const [isMounted, setIsMounted] = useState(false);
  const calendarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    let formatted = false;
    const intervalId = setInterval(() => {
      const scrollContainer = calendarRef.current?.querySelector(
        ".react-activity-calendar__scroll-container"
      ) as HTMLElement | null;

      if (
        scrollContainer &&
        scrollContainer.scrollWidth > scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;
      }

      if (!formatted) {
        const countEl = calendarRef.current?.querySelector(
          ".react-activity-calendar__count"
        );

        if (countEl?.textContent) {
          const rawNumber = Number.parseInt(
            countEl.textContent.replace(/[^0-9]/g, ""),
            10
          );
          const formattedNumber = new Intl.NumberFormat().format(rawNumber);
          countEl.textContent = countEl.textContent.replace(
            rawNumber.toString(),
            formattedNumber
          );
          formatted = true;
        }
      }

      if (
        formatted &&
        scrollContainer &&
        scrollContainer.scrollWidth > scrollContainer.clientWidth
      ) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div
        aria-hidden="true"
        className="mt-10 rounded-lg border bg-card"
        style={{ height: "140px" }}
      />
    );
  }

  return (
    <div className="github-calendar-wrapper mt-10 rounded-lg border bg-card p-4">
      <h2 className="mb-3 font-semibold text-sm">Recent Activity</h2>
      <GitHubCalendar
        blockMargin={3}
        blockSize={11}
        colorScheme="light"
        fontSize={12}
        labels={{
          totalCount: "{{count}} contributions last year",
        }}
        ref={calendarRef}
        showColorLegend={false}
        username="chof64"
      />
    </div>
  );
}
