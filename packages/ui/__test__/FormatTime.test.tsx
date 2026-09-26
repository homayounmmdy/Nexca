import { render, screen } from "@testing-library/react";
import FormatTime from "../components/FormatTime";

describe("FormatTime", () => {
  const timestamp = "2024-03-15T14:30:00.000Z";

  describe("default options", () => {
    it("renders the date with default options (dd/mm/yyyy)", () => {
      render(<FormatTime timestamp={timestamp} />);
      // en-GB locale formats as dd/mm/yyyy
      expect(screen.getByText("15/03/2024")).toBeInTheDocument();
    });

    it("uses default options when options prop is not provided", () => {
      const { container } = render(<FormatTime timestamp={timestamp} />);
      expect(container.textContent).toBe("15/03/2024");
    });
  });

  describe("custom options", () => {
    it("renders with custom date format options", () => {
      render(
        <FormatTime
          timestamp={timestamp}
          options={{ year: "numeric", month: "long", day: "numeric" }}
        />,
      );
      expect(screen.getByText("15 March 2024")).toBeInTheDocument();
    });

    it("renders with time when time options are provided", () => {
      render(
        <FormatTime
          timestamp={timestamp}
          options={{
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          }}
        />,
      );
      // Result depends on timezone; just verify it contains date parts
      expect(screen.getByText(/15\/03\/2024/)).toBeInTheDocument();
    });

    it("renders only the month when only month is specified", () => {
      render(<FormatTime timestamp={timestamp} options={{ month: "long" }} />);
      expect(screen.getByText("March")).toBeInTheDocument();
    });

    it("renders only the year when only year is specified", () => {
      render(
        <FormatTime timestamp={timestamp} options={{ year: "numeric" }} />,
      );
      expect(screen.getByText("2024")).toBeInTheDocument();
    });

    it("overrides all default options when custom options provided", () => {
      render(
        <FormatTime timestamp={timestamp} options={{ weekday: "long" }} />,
      );
      // Should only render the weekday (March 15, 2024 is a Friday)
      expect(screen.getByText("Friday")).toBeInTheDocument();
    });
  });

  describe("locale", () => {
    it("uses en-GB locale formatting", () => {
      render(
        <FormatTime
          timestamp={timestamp}
          options={{ year: "numeric", month: "2-digit", day: "2-digit" }}
        />,
      );
      // en-GB uses dd/mm/yyyy order
      expect(screen.getByText("15/03/2024")).toBeInTheDocument();
    });
  });

  describe("edge cases", () => {
    it("handles ISO timestamp with timezone offset", () => {
      render(<FormatTime timestamp="2024-12-25T00:00:00+00:00" />);
      expect(screen.getByText("25/12/2024")).toBeInTheDocument();
    });

    it("handles date-only string", () => {
      render(<FormatTime timestamp="2024-01-01" />);
      // Date-only strings are parsed as UTC in modern JS
      expect(screen.getByText(/01\/01\/2024|31\/12\/2023/)).toBeInTheDocument();
    });

    it("renders a fragment (no wrapper element)", () => {
      const { container } = render(<FormatTime timestamp={timestamp} />);
      // Component returns a fragment, so no extra DOM node wraps the text
      expect(container.firstChild?.nodeType).toBe(Node.TEXT_NODE);
    });
  });
});
