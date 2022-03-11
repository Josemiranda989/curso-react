import React from 'react';
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";



describe('pruebas en <PrimeraApp />', () => {
    
    test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
    
        const saludo = 'Hola, soy goku';

    const { getByText } = render(<PrimeraApp saludo={saludo} />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(saludo)).toBeInTheDocument();
});


});
