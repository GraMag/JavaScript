function mostrar()
{

	var contador=0;
	// declarar variables
	
	
	
	var respuesta='si';
	
	max = 0;
	min = 100000000000000000000000000;

	while(respuesta!='no') {
		numero = parseInt(prompt("Ingrese un numero:")); 
	
		if (numero > max) {
			max = numero;
		}
		if (numero < min){
			min = numero;
		}

		continuar = prompt("Desea ingresar otro numero?");
		if (continuar == respuesta) {
			respuesta = continuar;
		} else {
			respuesta = continuar;
		}
	}

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;


}//FIN DE LA FUNCIÓN