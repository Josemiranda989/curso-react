import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";


describe('pruebas con promesas', () => {
    test('debe de retornar un heroes async', (done) => {
         
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                
                expect(heroe).toBe(heroes[0]);
                done();

            })

    });
    
    test('debe de obtener un error si el heroe por id no existe', ( done ) => {
        
        const id = 16;
        getHeroeByIdAsync(id)
            .catch(error => {
                // eslint-disable-next-line jest/no-conditional-expect
                expect(error).toBe("No se pudo encontrar el héroe");
                done();
            })
        
    });
    
});
