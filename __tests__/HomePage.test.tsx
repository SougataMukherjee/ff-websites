// import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import HomePage from "@/app/homepage/page";

describe("HomePage", () => {
  it("should be in document", () => {
    render(<HomePage />);
  });
});
