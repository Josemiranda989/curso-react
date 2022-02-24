//import { heroes } from './data/heroes'

import { heroes } from "./data/heroes";

const getHeroeById = (id) => {
  return heroes.find(heroe => heroe.id === id)
} //find trae 1

console.log(getHeroeById(2));

const getHeroeByOwner = (owner) => {
  heroes.filter(heroe => heroe.owner === owner)
} //filter trae todos

console.log(getHeroeByOwner('DC'));