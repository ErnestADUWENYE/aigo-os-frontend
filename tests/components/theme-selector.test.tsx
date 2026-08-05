import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ThemeSelector } from "../../design-system/components/theme-selector";
import { ThemeProvider } from "../../design-system/themes/provider";

describe("ThemeSelector", () => {
  it("renders all five themes", () => {
    render(
      <ThemeProvider>
        <ThemeSelector />
      </ThemeProvider>,
    );

    const select = screen.getByLabelText("Background design");

    expect(select).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(5);
  });

  it("changes and persists the selected theme", () => {
    render(
      <ThemeProvider>
        <ThemeSelector />
      </ThemeProvider>,
    );

    const select = screen.getByLabelText(
      "Background design",
    ) as HTMLSelectElement;

    fireEvent.change(select, {
      target: { value: "midnight-signal" },
    });

    expect(select.value).toBe("midnight-signal");
    expect(
      window.localStorage.getItem(
        "aigo.background-design",
      ),
    ).toBe("midnight-signal");
  });
});
