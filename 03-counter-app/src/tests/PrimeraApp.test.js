import React from 'react';
// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'


describe('pruebas en <PrimeraApp />', () => {
    
/*  test('debe de mostrar el mensaje "Hola, soy Goku"', () => {    
        const saludo = 'Hola, soy goku';
    const { getByText } = render(<PrimeraApp saludo={saludo} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(saludo)).toBeInTheDocument();
}); */

    test('debe de mostrar <PrimeraApp /> correctamente', () => { 
        const saludo = 'Hola, soy goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)
        
        expect ( wrapper ).toMatchSnapshot()
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = "Hola, soy goku";
        const subtitulo = 'Soy un subtitulo'
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />);
        
        const textoParrafo = wrapper.find('p').text()
        
        expect ( textoParrafo ).toBe( subtitulo )
        
    });
    
    
});
