function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";


	while (respuesta == "si"){
		var numero = parseInt(prompt("Ingresar numero:"));
		acumulador = acumulador + numero;
		contador++
		
		respuesta = prompt("Ingresar otro numero?").toLowerCase();
		while (respuesta !="no" && respuesta != "si")
		respuesta = prompt("No es una respuesta valida. Ingresar otro numero?").ignoreCase();
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN