import React from "react";
import renderer from "react-test-renderer";
import Button from "./button";

describe("<Button />", () => {
  it("has 1 child", () => {
    const tree = renderer
      .create(<Button label="Test" intent="info" onPress={() => {}} />)
      .toJSON();
    expect(tree.children.length).toBe(1);
  });
});
