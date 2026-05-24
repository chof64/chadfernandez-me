import { execSync } from "node:child_process";

const ZEN_ENDPOINT = "https://opencode.ai/zen/v1/chat/completions";
const MODEL = "big-pickle";
const QUOTE_TRIM_REGEX = /^"|"$/g;

function getCommits() {
  const latestTag = process.env.LATEST_TAG || process.env.previousTag;
  const tagName = process.env.TAG_NAME || process.env.tagName;

  if (!(latestTag && tagName)) {
    console.error("Missing LATEST_TAG or TAG_NAME environment variables");
    return { commits: [], summary: "" };
  }

  try {
    const gitLog = execSync(
      `git log --no-merges --pretty=format:"%h %s" ${latestTag}...HEAD`,
      { encoding: "utf8" }
    );

    const commits = gitLog
      .trim()
      .split("\n")
      .filter((line) => line.length > 0)
      .map((line) => line.replace(QUOTE_TRIM_REGEX, ""));

    return { commits, summary: "" };
  } catch (error) {
    console.error("Error getting commits:", error.message);
    return { commits: [], summary: "" };
  }
}

async function generateSummary(commits) {
  if (commits.length === 0) {
    return "";
  }

  const apiKey = process.env.OPENCODE_API_KEY;
  if (!apiKey) {
    console.error("Missing OPENCODE_API_KEY environment variable");
    return null;
  }

  const commitList = commits.map((c) => `- ${c}`).join("\n");

  const prompt = `You are writing a release summary for a software project. Based on the following commit messages, write a concise 2-3 sentence summary that captures the main changes in this release.

Commits:
${commitList}

Write the summary in a way that's informative to users who want to understand what changed without looking at the detailed commit list. Focus on the "why" and the bigger picture rather than listing features.`;

  try {
    const response = await fetch(ZEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Zen API error: ${response.status} - ${errorText}`);
      return null;
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content?.trim() || null;
  } catch (error) {
    console.error("Error calling Zen API:", error.message);
    return null;
  }
}

async function main() {
  const { commits } = getCommits();

  if (commits.length === 0) {
    console.log("No commits to release");
    return;
  }

  const summary = await generateSummary(commits);

  const commitList = commits.map((c) => `- ${c}`).join("\n");

  if (summary) {
    console.log(`${summary}\n`);
  }

  console.log(`## Changes\n${commitList}`);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  const gitLog = execSync(
    `git log --no-merges --pretty=format:"%h %s" ${process.env.LATEST_TAG || "HEAD~50"}...HEAD`,
    { encoding: "utf8" }
  );
  const commits = gitLog
    .trim()
    .split("\n")
    .filter((line) => line.length > 0)
    .map((line) => line.replace(QUOTE_TRIM_REGEX, ""));
  console.log(`## Changes\n${commits.map((c) => `- ${c}`).join("\n")}`);
});
