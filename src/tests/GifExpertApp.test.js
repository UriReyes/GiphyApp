import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Test for <GifExpertApp/>", () => {
  test("should do match with the snapshot", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show a list of categories", () => {
    const categories = ["Got", "Doom Eternal"];
    const wrapper = shallow(<GifExpertApp defaultCategory={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
