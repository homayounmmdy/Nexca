import { render, screen } from "@testing-library/react";
import { FaUser } from "react-icons/fa";
import { InputType } from "../../../types";
import Input from "../Input";

describe("Input Component", () => {
  it("should render the basic input with default props", () => {
    const { inputElement } = renderComponents();

    expect(inputElement).toHaveAttribute("id", "1");
    expect(inputElement).toHaveAttribute("name", "sample name");
    expect(inputElement).toHaveAttribute("value", "john");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toBeRequired();
    expect(inputElement).toHaveClass(
      "input input-bordered custom-style input-primary",
    );
  });

  it("should render input with icon - applying classes correctly", () => {
    const { labelElement, inputElement } = renderComponents({
      icon: <FaUser />,
    });

    // Label should have:
    // - style prop
    // - color prop
    // - fixed classes (flex, input-bordered, etc.)
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass(
      "custom-style input-primary flex input input-bordered items-center gap-2",
    );

    // Input element inside label should only have:
    // - className prop
    // - no color or input-bordered classes
    expect(inputElement).toHaveClass("custom-style");
    expect(inputElement).not.toHaveClass("input-primary");
    expect(inputElement).not.toHaveClass("input input-bordered");
  });

  it("should render input with label - applying classes correctly", () => {
    const { labelElement, inputElement } = renderComponents({
      label: "Test Label",
      icon: undefined, // explicitly no icon
    });

    // Label should have only style prop
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass("custom-style");
    expect(labelElement).not.toHaveClass("input-primary");
    expect(labelElement).not.toHaveClass("input input-bordered");

    // Input element should have:
    // - input-bordered
    // - className prop
    // - color prop
    expect(inputElement).toHaveClass(
      "input input-bordered custom-style input-primary",
    );
  });

  it("should prioritize icon over label when both are provided", () => {
    const { labelElement } = renderComponents({
      icon: <FaUser />,
      label: "Test Label",
    });

    // Should use icon template (label gets all classes)
    expect(labelElement).toHaveClass(
      "flex input input-bordered items-center gap-2",
    );
    expect(labelElement).not.toHaveTextContent("Test Label");
  });

  it("should render bare input correctly when no icon or label", () => {
    const { labelElement, inputElement } = renderComponents({
      label: undefined,
      icon: undefined,
    });

    expect(labelElement).not.toBeInTheDocument();
    // Input should get all classes
    expect(inputElement).toHaveClass(
      "input input-bordered custom-style input-primary",
    );
  });

  it("should handle checked states correctly", () => {
    const { inputElement } = renderComponents({
      type: "checkbox",
      checked: true,
      defaultChecked: false,
    });

    expect(inputElement).toBeChecked();
    expect(inputElement).not.toHaveAttribute("defaultChecked");
  });

  it("should pass all other input attributes", () => {
    const { inputElement } = renderComponents({
      disabled: true,
      readOnly: true,
      className: "additional-class",
    });

    expect(inputElement).toBeDisabled();
    expect(inputElement).toHaveAttribute("readOnly");
    expect(inputElement).toHaveClass("additional-class");
  });

  const renderComponents = (props: Partial<InputType> = {}) => {
    const defaultProps: InputType = {
      id: "1",
      name: "sample name",
      style: "custom-style",
      value: "john",
      color: "input-primary",
      type: "text",
      label: "label",
      placeholder: "Enter Text",
      required: true,
      defaultChecked: true,
      className: "custom-style",
    };
    render(<Input {...defaultProps} {...props} />);
    return {
      labelElement: screen.queryByTestId("label"),
      inputElement: screen.getByPlaceholderText("Enter Text"),
    };
  };
});
