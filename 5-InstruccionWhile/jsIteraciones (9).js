function mostrar()
{

	var contador=0;
	// declarar variables
	
	var numero = 0;
	var respuesta='si';
	
	do {
		numero = parseInt(prompt("Ingrese un numero:")); 
		var min = numero;
		var max = numero;

		if (numero > max) {
			max = numero;
		}
		if (numero < min){
			min = numero;
		}

		respuesta = prompt("Desea ingresar otro numero?").toLowerCase();
		while (respuesta != "si" && respuesta != "no"){
			respuesta = prompt("Respuesta invalida. Desea ingresar otro numero?").toLowerCase();
		}
	} while(respuesta!='no') 

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;


}//FIN DE LA FUNCIÓN