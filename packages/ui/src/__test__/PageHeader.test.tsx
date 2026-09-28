import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import PageHeader from "../components/PageHeader";

vi.mock("../components/Container", () => ({
  default: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div data-testid="container" className={className}>
      {children}
    </div>
  ),
}));

vi.mock("../components/FormatTime", () => ({
  default: ({ timestamp }: { timestamp: string }) => (
    <span data-testid="format-time">{timestamp}</span>
  ),
}));

describe("PageHeader", () => {
  const defaultProps = {
    title: "Test Title",
    description: "Test description goes here.",
  };

  describe("rendering", () => {
    it("renders the title as a heading", () => {
      render(<PageHeader {...defaultProps} />);
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent("Test Title");
    });

    it("renders the description", () => {
      render(<PageHeader {...defaultProps} />);
      expect(
        screen.getByText("Test description goes here.")
      ).toBeInTheDocument();
    });

    it("renders the Container wrapper", () => {
      render(<PageHeader {...defaultProps} />);
      expect(screen.getByTestId("container")).toBeInTheDocument();
    });
  });

  describe("createdAt", () => {
    it("does NOT render FormatTime when createdAt is not provided", () => {
      render(<PageHeader {...defaultProps} />);
      expect(screen.queryByTestId("format-time")).not.toBeInTheDocument();
    });

    it("renders FormatTime when createdAt is provided", () => {
      const createdAt = "2024-01-15T10:30:00Z";
      render(<PageHeader {...defaultProps} createdAt={createdAt} />);

      const formatTime = screen.getByTestId("format-time");
      expect(formatTime).toBeInTheDocument();
      expect(formatTime).toHaveTextContent(createdAt);
    });

    it("passes createdAt to FormatTime via the timestamp prop", () => {
      const createdAt = "2024-01-15T10:30:00Z";
      render(<PageHeader {...defaultProps} createdAt={createdAt} />);

      expect(screen.getByTestId("format-time")).toHaveTextContent(createdAt);
    });
  });

  describe("edge cases", () => {
    it("renders correctly with an empty title and description", () => {
      render(<PageHeader title="" description="" />);

      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toHaveTextContent("");
      expect(screen.queryByTestId("format-time")).not.toBeInTheDocument();
    });

    it("renders correctly with a very long title and description", () => {
      const longTitle = "A".repeat(500);
      const longDescription = "B".repeat(1000);

      render(<PageHeader title={longTitle} description={longDescription} />);

      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        longTitle
      );
      expect(screen.getByText(longDescription)).toBeInTheDocument();
    });
  });
});