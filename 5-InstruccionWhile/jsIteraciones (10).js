function mostrar()
{

	
	//declarar contadores y variables 
	
	var respuesta="si";
	var contadorPos = 0
	var contadorNeg = 0
	var contadorCeros = 0
	var contadorPar = 0
	var contadorImpar = 0
	var negativo = 0
	var positivo = 0

	while(respuesta!="no")
	{
		numero = parseInt(prompt("Ingrese un numero:")); 
			if (numero == 0){
				contadorCeros++
			} else if (numero > 0){
				positivo = positivo + numero;
				contadorPos++
				if (numero % 2 == 0) {
					contadorPar++
				} else {
					contadorImpar++
				}
			} else {
				negativo = negativo + numero;
				contadorNeg++
				if (numero % 2 == 0) {
					contadorPar++
				} else {
					contadorImpar++
				}		
			}

		respuesta = prompt("Desea ingresar otro numero?").toLowerCase();
		while (respuesta != "si" && respuesta != "no"){
			respuesta = prompt("Respuesta invalida. Desea ingresar otro numero?").toLowerCase();
		}
	}

	/*alert("Cantidad de positivos: " + contadorPos + ", la suma de los mismos da: " + positivo + ". El promedio es: " + positivo/contadorPos);
	alert("Cantidad de negativos: " + contadorNeg + ", la suma de los mismos da: " + negativo + ". El promedio es: " + negativo/contadorNeg);
	alert("Cantidad de 0: " + contadorCeros);
	alert("Cantidad de numeros pares: " + contadorPar);
	alert("La diferencia entre positivos y negativos es: " + positivos - negativo);
	*/

	document.write("Cantidad de positivos: " + contadorPos + ", la suma de los mismos da: " + positivo + ". El promedio es: " + positivo/contadorPos + "<br>Cantidad de negativos: " + contadorNeg + ", la suma de los mismos da: " + negativo + ". El promedio es: " + negativo( + "<br>Cantidad de 0: " + contadorCeros + "Cantidad de numeros pares: " + contadorPar + "<br>La diferencia entre positivos y negativos es: " + (positivo - negativo));
	


}//FIN DE LA FUNCIÓN