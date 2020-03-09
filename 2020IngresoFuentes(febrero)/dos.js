/*Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor , 
hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validad("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total.*/

function mostrar()
{
    var peso = 0;
    var precio = 0;
    var tipo = "";
    var totalKg = 0;
    var tipoCaro;
    var maxPrecio = 0;
    var bruto = 0;
    var promedio;
    var descuento;

    do {
      do {
        peso = prompt("ingrese peso en kilo: ");
        peso = parseFloat(peso);
      } while (isNaN(peso) || peso < 10 || peso > 1000);
      do {
        precio = prompt("Ingrese precio por kilo: ");
        precio = parseFloat(precio);
      } while (isNaN(precio) || precio < 1);
      do {
        tipo = prompt("Ingrese tipo: ").toLowerCase();  
      } while (tipo != "a" && tipo != "v" && tipo != "m");
   
      if (maxPrecio < precio) {
        maxPrecio = precio;
        tipoCaro = tipo;
      }

      totalKg = totalKg + peso;
      bruto = bruto + precio;

      do {
        continuar = prompt("Desea ingresar otro pasajero? Si / No").toLowerCase()
        } while (continuar != "si" && continuar != "no");
    
    } while (continuar == "si");

    if (totalKg > 300) {
      descuento = bruto*0.25;
    } else if (totalKg > 100) {
      descuento = bruto*0.15;
    } else {
      descuento = 0;
    }
    
    promedio = bruto / totalKg;

    alert("Bruto: " + bruto
        + "Total con descuento: " + (bruto - descuento)
        + "\nEl producto mas caro es: " + tipoCaro
        + "\nEl precio promedio por kg es de: " + promedio);
}
