/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "../../helpers/test";

import Home from "./index";
import { mockUsers } from "./mock";

describe("Home", () => {
  it("does not break if no props", () => {
    const { container } = render(<Home />);
    expect(container).not.toBe(null);
  });

  it("renders data if user exist", () => {
    const { getByTestId } = render(<Home users={mockUsers} />);
    expect(getByTestId(`user-${mockUsers[0]}`)).toBeInTheDocument();
    expect(getByTestId(`user-${mockUsers[0]}`)).toHaveAttribute(
      "href",
      `/user/${mockUsers[0]}`
    );
    expect(getByTestId(`user-${mockUsers[0]}`)).toHaveTextContent(mockUsers[0]);
  });
});
