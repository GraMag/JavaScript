function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while (!(numero >= 0 && numero < 10)) {
		numero = parseInt(prompt("ingrese un número entre 0 y 10."));
		}

	document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN