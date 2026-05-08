import { test, expect } from "@playwright/test";

test.describe("About page", () => {
  test("renders the about page heading", async ({ page }) => {
    await page.goto("/about/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("contains the show premise section", async ({ page }) => {
    await page.goto("/about/");
    await expect(page.getByText(/The Show/i)).toBeVisible();
  });

  test("navigates to FAQ from the nav", async ({ page }) => {
    await page.goto("/about/");
    await page.getByRole("link", { name: "FAQ" }).click();
    await expect(page).toHaveURL(/\/faq/);
  });
});

test.describe("FAQ page", () => {
  test("renders the FAQ page heading", async ({ page }) => {
    await page.goto("/faq/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("shows at least 3 FAQ items", async ({ page }) => {
    await page.goto("/faq/");
    const buttons = page.getByRole("button");
    await expect(buttons).toHaveCount(await buttons.count());
    const count = await buttons.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test("navigates to About from the nav", async ({ page }) => {
    await page.goto("/faq/");
    await page.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/about/);
  });
});

test.describe("Cross-page navigation", () => {
  test("all four routes are reachable from navigation", async ({ page }) => {
    const routes = ["/", "/episodes/", "/about/", "/faq/"];
    const navLinks = ["Home", "Episodes", "About", "FAQ"];

    await page.goto("/");
    for (let i = 0; i < navLinks.length; i++) {
      await page.goto("/");
      await page.getByRole("link", { name: navLinks[i] }).first().click();
      await expect(page).toHaveURL(new RegExp(routes[i].replace("/", "\\/").replace(/\/$/, "")));
    }
  });
});
