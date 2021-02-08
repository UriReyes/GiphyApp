import React, { Component } from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";
import toJson from "enzyme-to-json";

describe("Probando GifGridItem", () => {
  const title = "Un titulo";
  const url = "https://imagen.gif";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe de mostrar el componente correctamente", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("Debe de contener una imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Debe div padre tener clases animate__fadeIn y n-father", () => {
    const div = wrapper.find("div");
    const divFather = div.at(0);

    expect(divFather.hasClass("animate__fadeIn n-father")).toBe(true);
  });

  test("Debe div hijo tener clases n-child", () => {
    const div = wrapper.find("div");
    const divChild = div.at(1);

    expect(divChild.hasClass("n-child")).toBe(true);
  });
});
