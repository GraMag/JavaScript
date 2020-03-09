/*Para la gestión de un hotel:
Ingresar los siguientes datos validados de una reserva:
* nombre del huésped.
* cantidad de personas.
* cantidad de días de estadía. 
* forma de pago(efectivo , tarjeta o QR).
a) Informar el huésped que trajo más personas en una sola reserva.
b) Informar la cantidad de personas que se quedaron más días.
c) Informar la forma de pago más utilizada.
d) Informar el promedio de cantidad de días por reserva.*/

var nombre = "";
var cantidadPersonas = 0;
var duracionEstadia = 0;
var formaDePago = "";
var vuelta0 = 0;
var maxCantPax;
var nombreMaxCantPax;
var esteNoSeVaMas;
var cantMaxEstadia;
var acumuladorEstadia = 0;
var contadorDeReservas = 0;
var pagoEfec = 0;
var pagoTarj = 0;
var pagoQR = 0;
var continuar = "si";
var medioDePago;

do {
    
        nombre = prompt("Ingrese su nombre: ");

    do {
        cantidadPersonas = prompt("Cantidad de huespedes: ");
        cantidadPersonas = parseInt(cantidadPersonas);
    } while (isNaN(cantidadPersonas) || cantidadPersonas < 1);

    do {
        duracionEstadia = prompt("Duracion de la estadia: ");
        duracionEstadia = parseInt(duracionEstadia);
    } while (isNaN(duracionEstadia) || duracionEstadia < 0);

    do {
        formaDePago = prompt("Ingrese forma de pago").toLowerCase;
    } while (formaDePago != "efectivo" && formaDePago != "tarjeta" && formaDePago != "qr");

    if (vuelta0 == 0 || cantidadPersonas > maxCantPax) {
        maxCantPax = cantidadPersonas;
        nombreMaxCantPax = nombre;
    }

    if (vuelta0 || duracionEstadia > esteNoSeVaMas) {
        esteNoSeVaMas = duracionEstadia;
        cantMaxEstadia = cantidadPersonas;
    }

    switch (formaDePago) {
        case "efectivo":
            pagoEfec++;
            break;
        case "tarjeta":
            pagoTarj++;
        default:
            pagoQR++;
            break;
    }

    contadorDeReservas++;
    acumuladorEstadia = acumuladorEstadia + duracionEstadia;

    do {
        continuar = prompt("Desea ingresar otro huesped? Si/No");
    } while (continuar != "si" && continuar != "no");


} while (continuar == "si");

    if (pagoEfec > pagoTarj && pagoEfec > pagoQR) {
        medioDePago = "efectivo";
    }  else if (pagoQR > pagoTarj && pagoQR > pagoEfec) {
        medioDePago = "QR";
    } else {
        medioDePago = "tarjeta";
    }


alert("El huesped que trajo mayor cantidad de personas es " + nombreMaxCantPax
    + "\nLa cantidad de huespedes en la estadia más larga es de: " + cantidadPersonas
    + "\nEl medio de pago más utilizado es: " + medioDePago
    + "\nEl promedio de estadia es de: " + (acumuladorEstadia/contadorDeReservas).toFixed(0) + " dias." )