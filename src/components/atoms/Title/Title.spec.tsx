import { screen, render } from "@testing-library/react";
import { Title } from "./Title";

describe("Title tests", () => {
  test("should work", () => {
    const { container } = render(<Title title="Title" />);
    const title = screen.getByText("Title")

    expect(container).toBeTruthy();
    expect(title).toBeInTheDocument();
  });
});
