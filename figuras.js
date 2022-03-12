//Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");


const perimetroCuadrado= ladoCuadrado*4;
console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + " cm");

const areaCuadrado= ladoCuadrado*ladoCuadrado;
console.log("El área del cuadrado es: "+ areaCuadrado + " cm^2");
console.groupEnd();

//Codigo del triángulo
console.group("Triángulo");
let ladoTriangulo1 = 6;
let ladoTriangulo2 = 6;
let baseTriangulo = 4;
let alturaTriangulo = 5.5;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 + " cm,"
    + ladoTriangulo2 + " cm y la base mide: " + baseTriangulo + " cm." );

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo);


const areaTriangulo = (baseTriangulo* alturaTriangulo)/2;
console.log("El área del triángulo es: " + areaTriangulo);



    console.groupEnd();

console.group("Círculos")

const radioCirculo = 8
const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;
const perimetroCirculo = diametroCirculo * pi;
const areaCirculo = pi * Math.pow(radioCirculo,2);


console.log("El radio del círculo es: " + radioCirculo);
console.log("El diámetro del círculo es: " + diametroCirculo);
console.log("Pi es " + pi + " cm")
console.log("El perimetro del círculo es: " + perimetroCirculo);
console.log(`El área del círculo es: ${areaCirculo}`);


console.groupEnd();


console.log("Gracias por todo");