'use strict'

console.log('watsapp dude');

// código del cuadrado

function perimetroSquare(lado) {
    return lado * 4;
}
perimetroSquare();

function areaSquare(lado) {
    return lado * lado;
}
areaSquare();

// código del triángulo

function perimetroTriangle(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
perimetroTriangle();

function areaTriangle(base, altura) {
    return (base * altura) / 2;
}
areaTriangle();

// código del círculo 

function diametroCirculo(radio) {
    return radio * 2;
}
diametroCirculo();

const PI = Math.PI;
console.log('El pi es ' + PI);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
perimetroCirculo();

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
areaCirculo();

// const cuadrado
const inputCuadrado = document.getElementById('inputCuadrado');
const resultCuadrado = document.querySelector('.resultCuadrado');
const perimetroCuadrado = document.querySelector('.perimetroCuadrado');
const areaCuadrado = document.querySelector('.areaCuadrado');
const resetSquare = document.querySelector('.reset-cuadrado');

// const triangulo
const inputTriangle1 = document.getElementById('inputTriangulo1');
const inputTriangle2 = document.getElementById('inputTriangulo2');
const baseTriangulo = document.getElementById('baseTriangulo');
const alturaTriangle = document.getElementById('alturaTriangle');
const resultTriangulo = document.querySelector('.resultTriangulo');
const perimetroTrianguloButton = document.querySelector('.perimetroTriangulo');
const areaTrianguloButton = document.querySelector('.areaTriangulo');
const resetTriangulo = document.querySelector('.reset-triangulo');

// const circle
const inputCirculo = document.getElementById('inputCirculo');
const resultCirculo = document.querySelector('.resultCirculo');
const perimetroCircButton = document.querySelector('.perimetroCirculo');
const areaCirculoButton = document.querySelector('.areaCirculo');
const diametroCircleButton = document.querySelector('.diametroCirculo');
const resetCirculo = document.querySelector('.reset-circle');


// cuadrado
function calcularPerimetro() {
    const value = inputCuadrado.value;
    const perimetro = perimetroSquare(value);
    resultCuadrado.classList.add('result-color');
    resultCuadrado.innerHTML = 'Resultado: ' + ' ' + perimetro + ' cm';

}

function calcularArea() {
    const value = inputCuadrado.value;
    const area = areaSquare(value);
    resultCuadrado.classList.add('result-color');
    resultCuadrado.innerHTML = 'Resultado: ' + ' ' + area + ' cm2';
}

function resetCuadrado() {
    inputCuadrado.value = '';
    resultCuadrado.classList.remove('result-color');
    resultCuadrado.innerHTML = '';
}

perimetroCuadrado.addEventListener('click', calcularPerimetro);
areaCuadrado.addEventListener('click', calcularArea);
resetSquare.addEventListener('click', resetCuadrado);

// triangulo

function perimetroTriangulo() {
    const value1 = parseInt(inputTriangle1.value);
    const value2 = parseInt(inputTriangle2.value);
    const value3 = parseInt(baseTriangulo.value);
    const trianglePerimetro = perimetroTriangle(value1, value2, value3);
    resultTriangulo.classList.add('result-color');
    resultTriangulo.innerHTML = 'Resultado: ' + ' ' + trianglePerimetro + ' cm';
}
function areaTriangulo() {
    const value3 = parseInt(baseTriangulo.value);
    const value4 = parseInt(alturaTriangle.value);
    const areaTriangulo = areaTriangle(value3, value4);
    resultTriangulo.classList.add('result-color');
    resultTriangulo.innerHTML = 'Resultado: ' + ' ' + areaTriangulo + ' cm2';
}
function resetTriangle() {
    inputTriangle1.value = '';
    inputTriangle2.value = '';
    baseTriangulo.value = '';
    alturaTriangle.value = '';
    resultTriangulo.classList.remove('result-color');
    resultTriangulo.innerHTML = '';
}

perimetroTrianguloButton.addEventListener('click', perimetroTriangulo);
areaTrianguloButton.addEventListener('click', areaTriangulo);
resetTriangulo.addEventListener('click', resetTriangle);

// circunferencia

function diametroCircle() {
    const value = parseInt(inputCirculo.value);
    const diametroC = diametroCirculo(value);
    resultCirculo.classList.add('result-color');
    resultCirculo.innerHTML = 'Resultado: ' + ' ' + diametroC + ' cm'
}
function circlePerimetro() {
    const value = parseInt(inputCirculo.value);
    const perimetroC = perimetroCirculo(value);
    const limite = perimetroC.toFixed(3);
    resultCirculo.classList.add('result-color');
    resultCirculo.innerHTML = 'Resultado: ' + ' ' + limite + ' cm'
}
function circleArea() {
    const value = parseInt(inputCirculo.value);
    const areaCircle = areaCirculo(value);
    const limite = areaCircle.toFixed(3);
    resultCirculo.classList.add('result-color');
    resultCirculo.innerHTML = 'Resultado: ' + ' ' + limite + ' cm2'
}

function resetCircle() {
    inputCirculo.value = '';
    resultCirculo.classList.remove('result-color');
    resultCirculo.innerHTML = '';
}

diametroCircleButton.addEventListener('click', diametroCircle);
perimetroCircButton.addEventListener('click', circlePerimetro);
areaCirculoButton.addEventListener('click', circleArea);
resetCirculo.addEventListener('click', resetCircle);