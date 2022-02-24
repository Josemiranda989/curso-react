console.log('Hola mundo')

const nombre = 'José';
const apellido = 'Miranda';

const nombreCompleto = `
${nombre} 
${apellido}
${1 + 1}
`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return `Hola ${nombre}`
}

console.log(`Este es un texto: ${getSaludo('Jose')}`);