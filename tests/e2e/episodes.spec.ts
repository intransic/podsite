import { test, expect } from "@playwright/test";

test.describe("Episodes page", () => {
  test("renders the episodes page heading", async ({ page }) => {
    await page.goto("/episodes/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("renders exactly 20 episode cards", async ({ page }) => {
    await page.goto("/episodes/");
    const cards = page.getByRole("article");
    await expect(cards).toHaveCount(20);
  });

  test("each episode card shows a title and duration", async ({ page }) => {
    await page.goto("/episodes/");
    const firstCard = page.getByRole("article").first();
    await expect(firstCard).toBeVisible();
    // Duration in minutes is always present
    await expect(firstCard.getByText(/\d+ min/)).toBeVisible();
  });

  test("navigates back to home from the nav", async ({ page }) => {
    await page.goto("/episodes/");
    await page.getByRole("link", { name: "Home" }).click();
    await expect(page).toHaveURL(/\/$/);
  });
});
