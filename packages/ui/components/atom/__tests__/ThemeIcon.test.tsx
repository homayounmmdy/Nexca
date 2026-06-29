import { render, screen } from "@testing-library/react";
import ThemeIcon from "../ThemeIcon";

describe("ThemeIcon", () => {
  it("renders without crashing", () => {
    render(<ThemeIcon themeColor="light" />);
    expect(screen.getByTestId("theme-icon")).toBeInTheDocument();
  });

  it("applies the correct theme color via data-theme attribute", () => {
    const testTheme = "dark";
    render(<ThemeIcon themeColor={testTheme} />);
    const icon = screen.getByTestId("theme-icon");
    expect(icon).toHaveAttribute("data-theme", testTheme);
  });

  it("has the correct base classes", () => {
    render(<ThemeIcon themeColor="cupcake" />);
    const icon = screen.getByTestId("theme-icon");
    expect(icon).toHaveClass("bg-base-100");
    expect(icon).toHaveClass("grid");
    expect(icon).toHaveClass("shrink-0");
    expect(icon).toHaveClass("grid-cols-2");
    expect(icon).toHaveClass("gap-0.5");
    expect(icon).toHaveClass("rounded-md");
    expect(icon).toHaveClass("p-1");
    expect(icon).toHaveClass("shadow-sm");
  });

  it("renders four color dots with correct classes", () => {
    render(<ThemeIcon themeColor="luxury" />);
    const dots = screen.getAllByTestId("theme-icon-dot");
    expect(dots).toHaveLength(4);

    // Verify each dot has the base classes
    dots.forEach((dot) => {
      expect(dot).toHaveClass("size-1");
      expect(dot).toHaveClass("rounded-full");
    });

    // Verify specific color classes for each dot
    expect(dots[0]).toHaveClass("bg-base-content");
    expect(dots[1]).toHaveClass("bg-primary");
    expect(dots[2]).toHaveClass("bg-secondary");
    expect(dots[3]).toHaveClass("bg-accent");
  });

  it("matches snapshot", () => {
    const { container } = render(<ThemeIcon themeColor="corporate" />);
    expect(container).toMatchSnapshot();
  });
});
