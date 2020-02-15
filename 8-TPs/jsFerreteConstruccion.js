/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = (parseFloat(document.getElementById("Largo").value));
    var ancho = (parseFloat(document.getElementById("Ancho").value));
    var alambre = (2*ancho + 2*largo) * 3;
    alert(alambre);
}
function Circulo () 
{
    var radio = (parseFloat(document.getElementById("Radio").value));
    alambre = 2*Math.PI*radio*3;
    alert(alambre);

}
function Materiales () 
{
    var largo = (parseFloat(document.getElementById("Largo").value));
    var ancho = (parseFloat(document.getElementById("Ancho").value));
    cal = 3;
    cemento = 2;
    materialesXmtr2 = cemento + cal;
    area = largo * ancho;
    totalCemento = Math.floor(area / cemento);
    totalCal = Math.floor(area / cal);
    alert("Para un terreno de " + area + "mts2, se necesitan " + totalCemento + " bolsas de cemento y " + totalCal + " de cal." );
}