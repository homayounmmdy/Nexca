import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import SkipToMain from "../SkipToMain";

// Mock next/link since we're not testing Next.js routing
vi.mock("next/link", () => {
  return {
    default: ({ href, className, children, ...props }: any) => (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    ),
  };
});

describe("SkipToMain", () => {
  it("should render a skip link with correct text", () => {
    render(<SkipToMain />);

    const skipLink = screen.getByText("Skip to main content");
    expect(skipLink).toBeInTheDocument();
  });

  it("should have correct href attribute pointing to main content", () => {
    render(<SkipToMain />);

    const skipLink = screen.getByText("Skip to main content");
    expect(skipLink).toHaveAttribute("href", "#main");
  });

  it("should have appropriate accessibility attributes", () => {
    render(<SkipToMain />);

    const skipLink = screen.getByText("Skip to main content");
    expect(skipLink).toHaveAttribute("aria-label", "Skip to main content");
    expect(skipLink).toHaveAttribute("title", "Skip to main content");
  });

  it("should be focusable and accessible via keyboard", async () => {
    const user = userEvent.setup();
    render(<SkipToMain />);

    const skipLink = screen.getByText("Skip to main content");

    // Initially should not be focused
    expect(skipLink).not.toHaveFocus();

    // Should be focusable via tab
    await user.tab();

    // Since this is the first focusable element, it should receive focus
    expect(skipLink).toHaveFocus();
  });

  it("should render as a link element", () => {
    render(<SkipToMain />);

    const skipLink = screen.getByRole("link", {
      name: "Skip to main content",
    });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink.tagName).toBe("A");
  });
});
