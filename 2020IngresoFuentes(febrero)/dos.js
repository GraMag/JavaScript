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
  var bandera = 0;
  var alimentoMasCaro;
  var tipoMasCaro;
  var acumuladorPrecio = 0;
  var contadorPeso = 0;
  var promedioPeso;
  var descuento;
  var continuar = "si";

  do {
    
    do {
      peso = prompt ("Ingrese el peso en kg: ");
      peso = parseFloat(peso);
    } while (isNaN(peso) || peso < 10 || peso > 1000);

    do {
      precio = prompt ("Ingrese precio por kg: $");
      precio = parseFloat(precio);
    } while (isNaN(precio) || precio < 1);

    do {
      tipo = prompt ("Ingrese tipo de producto: V / A / M").toLowerCase();
    } while (tipo != "a" && tipo != "v" && tipo != "m");

    acumuladorPrecio = acumuladorPrecio + precio;
    contadorPeso++;

    if (bandera == 0 || precio > alimentoMasCaro) {
      alimentoMasCaro = precio;
      tipoMasCaro == tipo;
      bandera++;
    }

    do {
      continuar = prompt("Desea ingresar otro alimento? Si / No").toLowerCase()
    } while (continuar != "si" && continuar != "no");
  } while (continuar == "si");

  promedioPeso = contadorpeso/acumuladorPrecio;
  
  if (acumuladorPrecio > 300) {
    descuento = acumuladorPrecio*0.25;
  } else if (acumuladorPrecio > 100) {
    descuento = acumuladorPrecio*0.15;
  } else {
    descuento = 0;
  }

  alert("El importe total a pagar es de: $" + (acumuladorPrecio*1.21 + descuento)
      + "\nEl bruto es de: $" + acumuladorPrecio + "\nEl descuento es de: $" + descuento 
      + "\nEl precio promedio por kilo es: $" + promedioPeso  
      + "\nEl tipo de producto más caro es: " + tipoMasCaro);
}
