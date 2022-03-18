import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem"

describe("pruebas en GifGridItem.js", () => {
  
  const title = "Un titulo";
  const url = "https://localhost/algo.jpg";
  
  test("debe de mostrar el componente correctamente", () => {
    
    let wrapper = shallow(<
      GifGridItem
      title={title}
      image={url}
    />);

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