const salariosCol = colombia.map(
    function (usuario) {
        return usuario.salary
    }
);

const salariosOrdenados = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB
    }
);

function esPar(numerito) {
    return (numerito % 2 === 0);
}
function calcularMediaAritmetica(lista) {
    const sumaSueldos = lista.reduce(
        function (valor = 0, elemento) {
            return valor + elemento;

        }
    ); // va a recibir una función y este método irá sumando cada elemento. 

    const promedioLista = sumaSueldos / lista.length;
    return promedioLista;
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2])
        return mediana;
    }
    else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosOrdenados);

// mediana top 10%

const spliceStar = (salariosOrdenados.length * 90) / 100;
const spliceCount = salariosOrdenados.length - spliceStar;


const salariosColTop10 = salariosOrdenados.splice(spliceStar, spliceCount)

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    {
        medianaGeneralCol,
        medianaTop10Col
    }
)

