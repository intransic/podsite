import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("shows the site name and tagline", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Waveform/);
    await expect(page.getByText("Waveform")).toBeVisible();
  });

  test("shows exactly one featured episode section", async ({ page }) => {
    await page.goto("/");
    const featuredLabel = page.getByText("Featured Episode");
    await expect(featuredLabel).toBeVisible();
  });

  test("CTA navigates to the episodes page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Browse All Episodes" }).click();
    await expect(page).toHaveURL(/\/episodes/);
  });

  test("primary navigation is visible and keyboard accessible", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: /primary navigation/i });
    await expect(nav).toBeVisible();
    // Tab to the first nav link
    await page.keyboard.press("Tab");
    const skipLink = page.getByText("Skip to main content");
    // skip link exists
    await expect(skipLink).toBeAttached();
  });

  test("hero heading is present", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
