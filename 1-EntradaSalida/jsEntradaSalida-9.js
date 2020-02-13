/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var salary = parseInt(document.getElementById("sueldo").value);
	document.getElementById("resultado").value = salary*1.1;
}
