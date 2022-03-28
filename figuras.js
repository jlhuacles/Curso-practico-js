//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado*lado;
}



// const perimetroCuadrado= ladoCuadrado*4;
// console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + " cm");

// const areaCuadrado= ladoCuadrado*ladoCuadrado;
// console.log("El área del cuadrado es: "+ areaCuadrado + " cm^2");
// console.groupEnd();

//Codigo del triángulo
// console.group("Triángulo");
// let ladoTriangulo1 = 6;
// let ladoTriangulo2 = 6;
// let baseTriangulo = 4;
// let alturaTriangulo = 5.5;

// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 + " cm,"
//     + ladoTriangulo2 + " cm y la base mide: " + baseTriangulo + " cm." );

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo);


// const areaTriangulo = (baseTriangulo* alturaTriangulo)/2;
// console.log("El área del triángulo es: " + areaTriangulo);


// console.groupEnd();


function trianguloIsosceles(ladoA, ladoB, ladoC){
    validacion = false;
    if(ladoA==ladoB){
        return validacion = true;
    } else if(ladoC==ladoA){
        return validacion = true;
    } else if(ladoB==ladoC){
        return validacion = true;
    } else{
        
    }
    if(validacion == true){

    }
}

function alturaTriangulo(ladoIgual, base){
    const altura = Math.sqrt(Math.pow(ladoIgual,2) - Math.pow((base/2),2))
}



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





function calcularPerimetroCuadrado(){
  const input = document.getElementById("input-cuadrado");
  const value = input.value;
  
  const perimetro = perimetroCuadrado(value);

  alert(perimetro)


}

function calcularAreaCuadrado(){
    const input = document.getElementById("input-cuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
  
    alert(area)
}