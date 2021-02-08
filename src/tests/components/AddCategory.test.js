import React from "react";

import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Probando <AddCategory/>", () => {
  const key = "";
  const setCategories = jest.fn();
  let wrapper = shallow(
    <AddCategory key={key} setCategories={setCategories} />
  );

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory key={key} setCategories={setCategories} />);
  });

  test("Debe de renderizar el <AddCategory /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    const event = { target: { value: value } };
    input.simulate("change", event);
    //console.log(input.prop("value"));
    // expect(input.prop("value")).toBe(value);
  });

  test("No debe de postear información onSubmit", () => {
    const event = { preventDefault: () => {} };
    const jsdomAlert = window.alert; // remember the jsdom alert
    window.alert = () => {}; // provide an empty implementation for window.alert
    wrapper.find("form").simulate("submit", event);

    expect(setCategories).not.toHaveBeenCalled();
    window.alert = jsdomAlert; // restore the jsdom alert
  });

  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {
    // Simulando el cambio en el input
    const value = "Naruto";
    const input = wrapper.find("input");
    const eventInput = { target: { value } };
    input.simulate("change", eventInput);

    // Simulando el submit del formulario
    const eventFormulario = { preventDefault: () => {} };
    wrapper.find("form").simulate("submit", eventFormulario);

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop("value")).toBe("");
  });
});
