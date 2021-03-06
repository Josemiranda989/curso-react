import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />); 

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
        
    })

    
    test('debe de mostrarse correctamente', () => {
    
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find("input");
        const value = 'Hola mundo'
        input.simulate('change', { target: { value } });
        
        expect(wrapper.find('p').text().trim()).toBe(value)
    });
    
    test('No debe de postear la informacion con Submit', () => {
        
        wrapper.find('form').simulate('submit', {
            preventDefault: () => { }
        })

        expect( setCategories).not.toHaveBeenCalled()

    });
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
      const value = "Hola mundo";
      // Simular el inputChange
      wrapper.find("input").simulate("change", { target: { value } });

      // Simular el submit
      wrapper.find("form").simulate("submit", { preventDefault() {} });
      // wrapper.find("form").simulate("submit", {preventDefault: () => {}});

      // setCategories se debe haber llamado
      expect(setCategories).toHaveBeenCalledWith( expect.any(Function));
      // expect(setCategories).toHaveBeenCalled();
      // expect(setCategories).toHaveBeenCalledTimes(1);

      // El valor del input debe de estar vacío
      expect(wrapper.find("input").prop("value")).toBe("");
    });
    
    
});
