import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string'

describe("Pruebas en 02-template-string.js", () => {
    
    test('getSaludo debe retornar hola jose', () => {
        
        const nombre = 'jose'

        const saludo = getSaludo(nombre);
        console.log(saludo);

       expect( saludo ).toBe('Hola ' + nombre + '!')
    });
    
    // getSaludo debe de retornar hola carlos si no hay argumento nombre

    test("getSaludo debe de retornar hola carlos si no hay argumento nombre", () => {
   
      const saludo = getSaludo();
      console.log(saludo);

      expect(saludo).toBe("Hola carlos!");
    });

});