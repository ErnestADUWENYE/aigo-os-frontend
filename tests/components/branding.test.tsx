import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AigoMark } from "../../design-system/branding/AigoMark";
import { AigoWordmark } from "../../design-system/branding/AigoWordmark";
import { BrandLockup } from "../../design-system/branding/BrandLockup";

describe("AIGO-OS branding", () => {
  it("renders the permanent mark", () => {
    render(<AigoMark />);

    expect(
      screen.getByRole("img", { name: "AIGO-OS" }),
    ).toBeInTheDocument();
  });

  it("renders the permanent wordmark", () => {
    render(<AigoWordmark />);

    expect(
      screen.getByRole("img", { name: "AIGO-OS" }),
    ).toBeInTheDocument();
  });

  it("renders the compact official brand lockup", () => {
    render(<BrandLockup />);

    expect(
      screen.getByRole("img", { name: "AIGO-OS" }),
    ).toBeInTheDocument();
  });
});
