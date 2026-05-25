"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function HomeGitHub() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div
        aria-hidden="true"
        className="mt-10 rounded-lg bg-muted/20"
        style={{ height: "140px" }}
      />
    );
  }

  return (
    <GitHubCalendar
      colorScheme="light"
      showColorLegend={false}
      username="chof64"
    />
  );
}
