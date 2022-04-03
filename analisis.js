const salarios = mexico.map(function(persona){
    return persona.salario;

});

const salariosacomodados = salarios.sort( function(a,b){
    return a - b;
})
//Helpers
function espar (numero){
 return (numero % 2 === 0); // Esta funcion solo sirve para saber si un numero es par y lo logramos haciendo una division entre 2 del numero que va recibir la funcion y con el porcentaje decimos que queremos procesar el reciduo despues ese residuo lo comparamos con 0 si es true es un numero par si no es un numero impar;

}
//Mediana General
function mediana (lista) { 
        const mitad = parseInt( lista.length /2 );

        if(espar(lista.length)){
            const promediomitad = lista[mitad] + lista[mitad-1] / 2;
            return promediomitad;

        }else{
            const Mitad = lista[mitad];
            return Mitad;

        }

}
 //Nuevo metodo para arrays

 const medianageneralmex = mediana(salarios);

 //Sacar una partesita de un array
    let splicestart = parseInt((salariosacomodados.length * 90)/100);
    let splicecount = parseInt(salariosacomodados.length - splicestart);
 const Salariosdiezporciento = salariosacomodados.splice(splicestart, splicecount);
 const Medianatop10 = mediana(Salariosdiezporciento);


console.log({ 
    Medianatop10,
    medianageneralmex,
   });
