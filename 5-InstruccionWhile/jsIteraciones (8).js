function mostrar()
{

	var Positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while (respuesta == "si"){
		var numero = parseInt(prompt("Ingresar numero:"));
		
		if (numero % 2 == 0){
			Positivo = Positivo + numero;
		} else {
			negativo = negativo * numero;		
		}
		
		continuar = prompt("Ingresar otro numero?");
		if (continuar == respuesta) {
			respuesta = continuar;
		} else {
			respuesta = continuar;
		}
	}

document.getElementById('suma').value=Positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN