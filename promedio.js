

function calcularmediaaritmetica(lista){
    // let sumalista = 0;
    // for(let i = 0; i < lista.length; i++ ){    //*suma los elementos
    //     sumalista = sumalista + lista[i];
    // }
    const sumalista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){    // todos los metodos en array se coloca una funcion 
            return valorAcumulado + nuevoElemento;
        }

    )
    const promediolista = sumalista / lista.length;
    return promediolista;
}




