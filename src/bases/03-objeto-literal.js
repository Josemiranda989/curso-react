const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 20343526,
    lng: 34.953222,
  },
};

//console.table(persona);

const persona2 = { ...persona };
persona2.nombre = "Peter";
console.log(persona);
console.log(persona2);
