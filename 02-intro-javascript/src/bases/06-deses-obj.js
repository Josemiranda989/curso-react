// Desestructuración
// Asignación Destructurante
const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

const { nombre, edad, clave } = persona;

/* console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave); */

/* console.log(nombre);
console.log(edad);
console.log(clave); */

/* const retornaPersona = ( usuario ) => {
    const { nombre, edad, clave = 'batman', poder = 'laser' } = usuario;
    console.log(`su nombre es${nombre} y tiene ${edad} y su clave es ${clave}, su poder es ${poder}`);
}
retornaPersona(persona); */

/* const retornaNombrePersona = ({ nombre }) => {
  console.log(`su nombre es${nombre}`);
};
retornaNombrePersona(persona); */

/* const retornaNombreEdadPersona = ({ nombre,edad }) => {
  console.log(`su nombre es${nombre} y tiene ${edad}`);
};
retornaNombreEdadPersona(persona); */

const retornaPersona = ({ clave, nombre, edad, rango }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.212,
      lng: -12.323,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = retornaPersona(persona);
//const { lat, lng} = latlng
console.log(nombreClave, anios);
console.log(lat, lng);
