/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "../../helpers/test";

import User from "./index";
import { mockUser } from "./mock";

describe("User", () => {
  it("does not break if no props", () => {
    const { container } = render(<User />);
    expect(container).not.toBe(null);
  });

  it("renders data if user exist", () => {
    const { getByTestId } = render(<User user={mockUser} />);
    expect(getByTestId("image")).toBeInTheDocument();
    expect(getByTestId("name")).toBeInTheDocument();
    expect(getByTestId("name")).toHaveTextContent(mockUser.name);
    expect(getByTestId("location")).toBeInTheDocument();
    expect(getByTestId("location")).toHaveTextContent(mockUser.location);
  });
});
