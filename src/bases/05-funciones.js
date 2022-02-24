// Funciones

const saludar1 = function (nombre) {
  return `hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `hola, ${nombre}`;
};

const saludar3 = (nombre) => `hola, ${nombre}`;

const saludar4 = () => "Hola mundo";

// saludar = 30;

console.log(saludar1("function standart"));
console.log(saludar2("arrow function "));
console.log(saludar3("arrow function corta"));
console.log(saludar4());

const getUser = () => {
  return {
    uid: "ABC123",
    username: "josemiranda989",
  };
};

console.log(getUser());

// Tarea
// 1. Transformar a una funcion flecha
// 2. Debe retornar un objeto implicito
// 3. Pruebas

/* function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo ); */

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
