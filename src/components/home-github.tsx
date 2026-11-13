import { useEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const calendarTheme = {
  light: [
    "var(--github-0)",
    "var(--github-1)",
    "var(--github-2)",
    "var(--github-3)",
    "var(--github-4)",
  ],
  dark: [
    "var(--github-0)",
    "var(--github-1)",
    "var(--github-2)",
    "var(--github-3)",
    "var(--github-4)",
  ],
};

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
    let attempts = 0;
    const intervalId = setInterval(() => {
      const container = calendarRef.current;
      const scrollContainer = container?.querySelector(
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
        const countEl = container?.querySelector(
          ".react-activity-calendar__count"
        );

        if (countEl?.textContent) {
          const rawNumber = Number.parseInt(
            countEl.textContent.replace(/[^0-9]/g, ""),
            10
          );
          if (!Number.isNaN(rawNumber)) {
            const formattedNumber = new Intl.NumberFormat().format(rawNumber);
            countEl.textContent = countEl.textContent.replace(
              rawNumber.toString(),
              formattedNumber
            );
            formatted = true;
          }
        }
      }

      attempts += 1;
      if (formatted || attempts >= 100) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div aria-hidden="true" className="mt-10" style={{ height: "140px" }} />
    );
  }

  return (
    <div className="github-calendar-wrapper mt-10">
      <h2 className="mb-3 font-semibold text-base">Recent Activity</h2>
      <GitHubCalendar
        blockMargin={3}
        blockSize={11}
        fontSize={12}
        labels={{
          totalCount: "{{count}} contributions last year",
        }}
        ref={calendarRef}
        showColorLegend={false}
        theme={calendarTheme}
        username="chof64"
      />
    </div>
  );
}
