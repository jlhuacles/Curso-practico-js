const lista1 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    1,
    1,
    2,
    99
]


// const lista1Count = {

// };


// lista1.map(
//     function(elemento){
//         if(lista1Count[elemento]){
//             lista1Count[elemento] +=1;
//         } else{
//             lista1Count[elemento] = 1;
//         }


        
//     }
// )

// const lista1Array = Object.entries(lista1Count).sort(
//     function(a,b){
//         return a[1]-b[1]}
// )

// const moda = lista1Array[lista1array.length-1]
let btnModajs = document.querySelector('#btnModa');
btnModajs.addEventListener("click",()=>{
    calcularModa(lista1);
})



function calcularModa(lista){
    listaObjeto = {};
    lista.map(
        function(elemento){
            if(listaObjeto[elemento]){
                listaObjeto[elemento] +=1;
            }else{
                listaObjeto[elemento] = 1;
            }

        }
        );

        const nuevaLista = Object.entries(listaObjeto).sort(
            function(a,b){
                return a[1]-b[1]}
        )

        const moda = nuevaLista[nuevaLista.length-1];
        document.getElementById("casa").innerText = `La moda es el número ${moda[0]} y se repite ${moda[1]} veces`;
        
}




 




