import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de Heroes", () => {
  test("debe de retornar un heroes por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);
    expect(heroe).toEqual(heroeData);
  });

  test("debe de retornar undefined si héroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test("debe de retornar un arreglo con los héroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    const arregloData = heroes.filter((h) => h.owner === owner);
    expect(heroes).toEqual(arregloData);
  });

  test("debe de retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(2); //porque solo hay 2
    /* expect(heroes.length)
    .toBe(
        (heroes.filter((h) => h.owner === owner)).length
        ); */
  });

  test("debe de retornar 0 si owner no existe", () => {
    const owner = "TinyToons";
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(0);
  });
});
