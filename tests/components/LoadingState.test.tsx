import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { LoadingState } from "@/components/system/LoadingState";

describe("LoadingState", () => {
  it("renders the AIGO-OS loading defaults", () => {
    render(<LoadingState />);

    expect(
      screen.getByText("Loading workspace"),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Preparing your AIGO-OS workspace...",
      ),
    ).toBeInTheDocument();
  });

  it("supports contextual loading messages", () => {
    render(
      <LoadingState
        title="Loading organization"
        description="Retrieving organization configuration..."
      />,
    );

    expect(
      screen.getByText("Loading organization"),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Retrieving organization configuration...",
      ),
    ).toBeInTheDocument();
  });
});
