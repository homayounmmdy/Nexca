import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NexcaMark from "../NexcaMark";

describe("NexcaMark Component", () => {
  const componentsHelper = (status: boolean) => {
    render(<NexcaMark master={status} />);

    return {
      span: screen.queryByRole("img"),
      icon: screen.queryByTestId("Icon"),
    };
  };

  it("should render the span with PiSealCheckFill icon when master is true", () => {
    const { span, icon } = componentsHelper(true);

    expect(span).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(span).toHaveAttribute("title", "This content was written by Nexca");
    expect(span).toHaveAccessibleName("Verified content by Nexca");
  });

  it("should render nothing when master is false", () => {
    const { span, icon } = componentsHelper(false);

    expect(span).not.toBeInTheDocument();
    expect(icon).not.toBeInTheDocument();
  });
});
