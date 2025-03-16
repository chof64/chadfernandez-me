import { expect, test } from "@playwright/test";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage before each test
    await page.goto("/");
  });

  test("should display the hero section correctly", async ({ page }) => {
    // Check hero image
    const heroImage = page.locator('img[alt="Portrait"]');
    await expect(heroImage).toBeVisible();

    // Verify heading text
    await expect(page.locator("h1")).toContainText(
      "I'm Chad Fernandez — web developer",
    );

    // Check subheading
    await expect(page.locator("p.text-2xl.font-semibold")).toContainText(
      "building web applications that make a difference in the community",
    );
  });

  test("should display About Me section", async ({ page }) => {
    const aboutSection = page.locator("section", { hasText: "About Me" });
    await expect(aboutSection).toBeVisible();

    // Verify the section has the expected content
    await expect(aboutSection.locator("p").first()).toContainText(
      "Driven by a love for technology and a mission to build web apps",
    );

    await expect(aboutSection.locator("p").nth(1)).toContainText(
      "I'm a student studying Information Technology",
    );
  });

  test("should render HomeEngagements component correctly", async ({
    page,
  }) => {
    // Check the Engagements section exists
    const engagementsSection = page.locator("section", {
      hasText: "Engagements",
    });
    await expect(engagementsSection).toBeVisible();

    // Check the heading is visible
    await expect(engagementsSection.locator("h2")).toContainText("Engagements");

    // Check all three engagements are displayed
    const engagementItems = engagementsSection.locator("div.divide-y > div");
    await expect(engagementItems).toHaveCount(3);

    // Test first engagement (most recent)
    const firstEngagement = engagementItems.first();
    await expect(firstEngagement.locator("h3")).toContainText(
      "2024 Hack4Gov National Competition",
    );
    await expect(firstEngagement.locator("p.text-sm")).toContainText(
      "October 2024",
    );
    await expect(firstEngagement.locator("p.text-sm")).toContainText(
      "Manila, Philippines",
    );

    // Test the list items of the first engagement
    const firstEngagementListItems = firstEngagement.locator("li");
    await expect(firstEngagementListItems).toHaveCount(2);
    await expect(firstEngagementListItems.first()).toContainText(
      "Competed as a wildcard entry",
    );
    await expect(firstEngagementListItems.nth(1)).toContainText(
      "Ranked 8th out of 20 teams",
    );

    // Verify the second engagement
    const secondEngagement = engagementItems.nth(1);
    await expect(secondEngagement.locator("h3")).toContainText(
      "2024 Hack4Gov Regional Competition",
    );
  });

  test("should display Contacts section with working links", async ({
    page,
  }) => {
    const contactsSection = page.locator("section", { hasText: "Contacts" });
    await expect(contactsSection).toBeVisible();

    // Check email link
    const emailLink = contactsSection.locator('a[href^="mailto:"]');
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute(
      "href",
      "mailto:contact@chadfernandez.me",
    );
    await expect(emailLink).toContainText("contact@chadfernandez.me");

    // Check GitHub link
    const githubLink = contactsSection.locator('a[href*="github.com"]');
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/chof64",
    );
    await expect(githubLink).toContainText("github.com/chof64");
  });

  test("should have correct page layout and structure", async ({ page }) => {
    // Verify the main container
    const container = page.locator("div.container");
    await expect(container).toBeVisible();

    // Check that we have the correct number of sections
    const sections = page.locator("section");
    await expect(sections).toHaveCount(4); // Hero, About, HomeEngagements, Contacts
  });
});
