const alumnos = [
    {
        nombre : "Amparo",
        edad : 20
    },
    {
        nombre : "Luis",
        edad : 30
    },
    {
        nombre : "Tadeo",
        edad : 10
    },
    {
        nombre : "Tita",
        edad : 40
    },
    {
        nombre : "Tita",
        edad : 60
    },
    {
        nombre : "frank",
        edad : 30
    },
];

const alumnoporedad = alumnos.sort(
    function(a, b){
        return a.edad - b.edad;
    }
)  //Ya tengo el array acomodado de menor a mayor

const mitadlista = parseInt(alumnoporedad.length/2);

function espar (numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }

}

if(espar(mitadlista)){
    const elemento1 = alumnoporedad[mitadlista].edad;
    const elemento2 = alumnoporedad[mitadlista - 1].edad;
    const promedioele1y2 = calcularmediaaritmetica([elemento1,elemento2]);

    mediana = promedioele1y2;


}else{
    mediana = alumnoporedad[mitadlista].edad;
}

function calcularmediaaritmetica(lista){
    
    const sumalista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){    // todos los metodos en array se coloca una funcion 
            return valorAcumulado + nuevoElemento;
        }

    )
    const promediolista = sumalista / lista.length;
    return promediolista;
}





