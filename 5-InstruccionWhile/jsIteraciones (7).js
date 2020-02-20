function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";


	while (respuesta == "si"){
		var numero = parseInt(prompt("Ingresar numero:"));
		acumulador = acumulador + numero;
		contador++
		
		continuar = prompt("Ingresar otro numero?");
		if (continuar == respuesta) {
			respuesta = continuar;
		} else {
			respuesta = continuar;
		}
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN