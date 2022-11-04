// (venta1 + venta2 + venta3) / 2 || promedio o media aritmetica
// Mediana
// La moda, lo que más se repite


function calcularMediaAritmetica(lista) {
    /* let sumaSueldos = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaSueldos = sumaSueldos + lista[i]
    } */

    const sumaSueldos = lista.reduce(
        function (valor = 0, elemento) {
            return valor + elemento;

        }
    ); // va a recibir una función y este método irá sumando cada elemento. 

    const promedioLista = sumaSueldos / lista.length;
    return promedioLista;
}