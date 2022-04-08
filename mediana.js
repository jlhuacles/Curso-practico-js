lista1 = [1, 6, 9, 1];


lista1.sort((a,b)=>{
    return a-b
});

function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(function(valorAcumulado, nuevoElemento){ return valorAcumulado + nuevoElemento; });

    const promedioLista = sumaLista/lista.length;


   return promedioLista;
}




function esPar(numero){
    if(numero%2===0){
        return true;
    }else{
        return false;
    }
}



const mitadLista1 = parseInt(lista1.length/2);

if(esPar(lista1.length)){
    const elemento1= lista1[mitadLista1];
    const elemento2= lista1[mitadLista1 - 1] // cómo estaba ---> lista1[mitadLista1] - 1 ; :C


    // const promedios = calcularMediaAritmetica([elemento1, elemento2])
    const promedios = (elemento1+elemento2)/2

    mediana = promedios;


}else{
    mediana = lista1[mitadLista1];
}