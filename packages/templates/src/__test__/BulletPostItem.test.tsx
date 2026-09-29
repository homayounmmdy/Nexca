import { render, screen } from "@testing-library/react";
import PostsCash from "../cash";
import BulletPostItem from "../components/BulletPostItem";

describe("BulletPost Component", () => {
  it("should have link with correct attributes", () => {
    render(<BulletPostItem post={PostsCash[0]} />);

    const link = screen.getByTestId("link");

    expect(link).toHaveAttribute("href");
    expect(link).toHaveAttribute("title");
  });
  it("should have bullet icon", () => {
    render(<BulletPostItem post={PostsCash[0]} />);

    const link = screen.getByTestId("link-icon");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("aria-label", "Bullet icon");
  });
  it("should have correct value", () => {
    render(<BulletPostItem post={PostsCash[1]} />);

    expect(screen.getByText(PostsCash[1].title)).toBeInTheDocument();
  });
});
