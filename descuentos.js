const cupones = [
    {
        name : "hola",
        descuento : 15,
    },
    {
        name : "adios",
        descuento : 10,
    },
    {
        name : "loco",
        descuento : 5,
    }

]
var precio;
var descuento;
var precio_final;


function CalculoDesc(precio,descuento){
        var precio_final = ((100 - descuento) /100) * precio;
        return (precio_final);
    }

function CalculoDescHTML(){
        const inputprecio = document.getElementById("Precio_producto");
        const precio = inputprecio.value;
        const inputdescuento = document.getElementById("Porcentaje_descuento");
        const descuento = inputdescuento.value;
        const Preciocondescuento = CalculoDesc(precio,descuento);
        const cupontext = document.getElementById("Cupon_desc");
        const valuecupon = cupontext.value;
        const cuponvalido = cupones.find(cupon => cupon.name === valuecupon);
        const Resultpi = document.getElementById("ResultPrice");

        if(valuecupon == "hola" || valuecupon == "adios" || valuecupon == "loco" ){
            const discountcupon = cuponvalido.descuento;
            const preciofinalmascupon = ((100 - discountcupon)/100)*Preciocondescuento;
            Resultpi.innerText = "El precio con descuento es de : $ " + preciofinalmascupon;
        }else{
            Resultpi.innerText = "El precio con descuento es de : $ " + Preciocondescuento;
        }
        // 
        
        // 
        // 
}
















