import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("pruebas en GifGridItem.js", () => {
  let wrapper = shallow(<GifGridItem />);

  test("debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
 

});
/* 
    1. Enzyme
    2. Enzyme to JSON
    3. debe de mostrar el componente correctamente
        * shallow
        * wrapper
        * wrapper .toMatchSnapshot()
*/