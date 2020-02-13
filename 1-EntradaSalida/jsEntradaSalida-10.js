/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var amount = parseInt(document.getElementById("importe").value);
	document.getElementById("resultado").value = amount-amount*0.25;
}
