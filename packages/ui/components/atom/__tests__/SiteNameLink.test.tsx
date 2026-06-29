import SiteConfig from "@nexca/config";
import { render, screen } from "@testing-library/react";
import SiteNameLink from "../SiteNameLink";

describe("SiteNameLink component", () => {
  it("should have right link for Logo", () => {
    render(<SiteNameLink />);
    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/");
    expect(link).toHaveAttribute("title", SiteConfig.name);
    expect(link).toHaveAttribute(
      "aria-label",
      `Return to ${SiteConfig.name} homepage`,
    );
  });

  it("should have right style", () => {
    render(<SiteNameLink />);
    const p = screen.getByRole("paragraph");

    expect(p).toHaveClass("text-indigo-700");
    expect(p).toHaveClass("font-bold");
  });
});
