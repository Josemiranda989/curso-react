import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import CounterApp from "../CounterApp";

describe("pruebase en <CounterApp />", () => {
    let wrapper = shallow(<CounterApp />);
    
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    })

  test("debe de mostrar <CounterApp /> correctamente", () => {
    // hacer un snapshot
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostarr el valor por defecto de 100", () => {
    // usar wrapper.find
    const wrapper = shallow(<CounterApp value={100} />);

    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("100");
  });

  test("debe de incrementar con el boton +1", () => {
    wrapper.find("button").at(0).simulate("click");
      const counterText = wrapper.find("h2").text().trim();
      
      expect(counterText).toBe("11")
  });
    
    test("debe de decrementar con el boton -1", () => {

      wrapper.find("button").at(2).simulate("click")
      const counterText = wrapper.find("h2").text().trim();
      expect(counterText).toBe('9');
    });

    test('debe de colocar el valor por defecto con el btn reset', () => {
        const wrapper = shallow(<CounterApp value={105} />);
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(1).simulate("click");
        const counterText = wrapper.find("h2").text().trim();
        
        expect(counterText).toBe('105') 
    })
    
});
