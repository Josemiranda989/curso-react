//import { heroes } from '../data/heroes'

// !Metodo 1
//import heroes, { owners } from "../data/heroes";

// !Metodo 2
//import heroes, { owners } from "../data/heroes";

// !Metodo 3
import { heroes, owners } from "../data/heroes";

export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
}; //find trae 1

/* console.log(getHeroeById(2)); */

const getHeroeByOwner = (owner) => {
  heroes.filter((heroe) => heroe.owner === owner);
}; //filter trae todos

/* console.log(getHeroeByOwner("DC"));
console.log(owners); */
