import { test, expect } from "@playwright/test";

const routes = ["/", "/episodes/", "/about/", "/faq/"];

for (const route of routes) {
  test(`${route} returns a page with a heading and navigation`, async ({ page }) => {
    await page.goto(route);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("navigation", { name: /primary navigation/i })).toBeVisible();
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
  });
}

test("all four routes link to each other via navigation", async ({ page }) => {
  await page.goto("/");
  for (const label of ["Home", "Episodes", "About", "FAQ"]) {
    await expect(page.getByRole("link", { name: label }).first()).toBeVisible();
  }
});
