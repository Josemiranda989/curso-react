//Desestructuración de Arreglos

const personajes = ["Goku", "Vegeta", "Trunks"];

const [, p2, p3] = personajes;

console.log(p2, " y ", p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//Tarea de
const estadosDeUso = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};

const [nombre, funcionNombre] = estadosDeUso("vegeta");

console.log(nombre);
funcionNombre();
