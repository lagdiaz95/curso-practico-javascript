
// Este es el codigo del cuadrado

console.group("Cudrados"); 

    function perimetroCuadrado(lado) {
        return lado * 4;
    }

    function areaCuadrado(lado) {
        return lado * lado;
    }

console.groupEnd();

// Este es el codigo del triangulo
console.group("Triangulo");

    function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
        return (ladoTriangulo1+ladoTriangulo2+baseTriangulo);
    }
    
    function AreaTriangulo (baseTriangulo,alturaTriangulo) {
        return (baseTriangulo*alturaTriangulo)/2;
    }
    
    console.groupEnd();

     
    console.group("Circulos");
   
// Diámetro
    function diametroCirculo(radioCirculo){
        return radioCirculo *2;
    }

    const PI = Math.PI;

    function circuferenciaCiruclo(radio){
        const diametro = diametroCirculo(radio);
        return diametro*PI;
    }


    function AreaCirculo(radio){
        return (radio*radio)*PI;

    }

console.groupEnd();


//Altura de un triangulo isósceles
function  AlturaIsoceles (lado1, lado2, base){
    if(lado1 == lado2 && lado2 == base && lado1 == base){
        const Altura =
        Math.sqrt(((Math.pow(lado1,2))-((Math.pow(base,2)/4))));
        return Number(Altura);
    }else{
        alert("No es un triangulo isóceles")
    }


}

 // Aqui interactuamos con el HTML
 function CalPerimetroCuadrado(){
        const input = document.getElementById("InputCuadrado");
        const value = input.value; //obtener valor del input
        const Perimetro =  perimetroCuadrado(value);
        alert(Perimetro);

 }
function CalAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value; //obtener valor del input
    const Area =  areaCuadrado(value);
    alert(Area);

}

function CalPerimetroTriangulo(){
    const lado1 = document.getElementById("InputLado1");
    const value1 = lado1.value;
    const lado2 = document.getElementById("InputLado2");
    const value2 = lado2.value;
    const base = document.getElementById("InputBase");
    const valuebase = base.value;
    const Perimetro = perimetroTriangulo(Number(value1), Number(value2), Number(valuebase));
    alert(Perimetro);
}
function CalAreaTriangulo(){
    const altura = document.getElementById("InputAltura");
    const valuealtura = altura.value;
    const base = document.getElementById("InputBase");
    const valuebase = base.value;
    const Area = AreaTriangulo(Number(valuebase),Number(valuealtura));
    alert(Area);


}

function CalDiametro (){
    const radio = document.getElementById("Inputradio");
    const valueradio = radio.value;
    const diametro = diametroCirculo(valueradio);
    alert(diametro);
}
function CalCircuferencia(){
    const radio = document.getElementById("Inputradio");
    const valueradio = radio.value;
    const circunferencia = circuferenciaCiruclo(valueradio);
    alert(circunferencia);
}

function CalcAreaCirculo(){
    const radio = document.getElementById("Inputradio");
    const valueradio = radio.value;
    const areacirculo = AreaCirculo(valueradio)
    alert(areacirculo);

}

function CalcAlturaIso(){
    const lado1 = document.getElementById("Inputladoiso1")
    const valuelado1 = lado1.value;
    const lado2 = document.getElementById("Inputladoiso2")
    const valuelado2 = lado2.value;
    const base = document.getElementById("Inputbaseiso")
    const valuebase = base.value;
    const AlturaIso = AlturaIsoceles (valuelado1, valuelado2, valuebase);
    alert(AlturaIso);


}
