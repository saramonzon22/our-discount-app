function calcularMediaAritmetica(lista) {
    const sumaSueldos = lista1.reduce(
        function (valor = 0, elemento) {
            return valor + elemento;

        }
    ); // va a recibir una función y este método irá sumando cada elemento. 

    const promedioLista = sumaSueldos / lista1.length;
    return promedioLista;
}

const lista1 = [
    100,
    300,
    400000,
    45,
    200,

];


const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true
    }
    else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    const promedio = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedio;
}
else {
    mediana = lista1[mitadLista1]
}