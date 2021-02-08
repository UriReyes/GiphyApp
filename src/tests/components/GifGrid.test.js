import React from "react";
import { GifGrid } from "../../components/GifGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Evaluar <GifGrid />", () => {
  const category = "Naruto";

  test("Debe hacer match con snapshot", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    let wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar items cuando se cargan con useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/image.jpg",
        title: "titulo",
      },
      {
        id: "123",
        url: "https://localhost/image.jpg",
        title: "titulo2",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wraper = shallow(<GifGrid category={category} />);

    expect(wraper).toMatchSnapshot();
    expect(wraper.find(".lds-roller").exists()).toBe(false);
    expect(wraper.find("GifGridItem").length).toBe(gifs.length);
  });
});
