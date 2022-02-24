const heroes = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
  },
];

// ! Metodo 1
/* export const owners = ['Dc', 'Marver']
export default heroes; */

// ! Metodo 2
/* const owners = ['Dc', 'Marver']
export {
  heroes as default,
  owners
} */

// ! Metodo 3
const owners = ['Dc', 'Marver']
export {
  heroes,
  owners
}