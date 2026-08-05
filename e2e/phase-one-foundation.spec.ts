import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("public demo renders without critical accessibility violations", async ({
  page,
}) => {
  await page.goto("/demo");

  await expect(
    page.getByRole("heading", {
      name: "AIGO OS Visual System",
    }),
  ).toBeVisible();

  const accessibilityScanResults = await new AxeBuilder({
    page,
  })
    .disableRules(["color-contrast"])
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test("customer shell renders the five background designs", async ({
  page,
}) => {
  await page.goto("/console/dashboard");

  const selector = page.getByLabel("Background design");

  await expect(selector).toBeVisible();
  await expect(selector.locator("option")).toHaveCount(5);

  await selector.selectOption("midnight-signal");

  await expect(page.locator("html")).toHaveAttribute(
    "data-aigo-theme",
    "midnight-signal",
  );
});

test("admin shell renders", async ({ page }) => {
  await page.goto("/admin/dashboard");

  await expect(
    page.getByRole("heading", {
      name: "Admin Console",
    }),
  ).toBeVisible();

  await expect(
    page
      .getByRole("banner")
      .getByText("AIGO Administration"),
  ).toBeVisible();
});
