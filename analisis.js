//Helpers , utils

function esPar(numero){
    return (numero%2 ===0);
}


function calcularMediaAritmetica(lista){
    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i];
    // }
    
    const sumaLista = lista.reduce(function(valorAcumulado, nuevoElemento){ return valorAcumulado + nuevoElemento; });

    const promedioLista = sumaLista/lista.length;


   return promedioLista;
}

//Calculadora de salariosCol

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2)
    if(esPar(lista.length)){
        const personaMitad = lista[mitad];
        const personaMitad2 = lista[mitad - 1];
        const mediana = calcularMediaAritmetica(personaMitad, personaMitad2);
        return mediana;
    }else{
        const mediana = lista[mitad];
        return mediana;
    }
}


// Mediana General




const salariosCol = colombia.map(function(persona){
    return persona.salary;
});

const salarioColSorted = salariosCol.sort((a,b)=>{ return a-b});


const medianaGeneralCol = medianaSalarios(salarioColSorted);




// medianatop10

const spliceStart = parseInt((salarioColSorted.length*90)/100);
const spliceCount =  salarioColSorted.length - spliceStart;


const salariosTop10 = salarioColSorted.splice(spliceStart, spliceCount);



console.log({
    medianaGeneralCol,
    salariosTop10,
})