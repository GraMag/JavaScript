function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numRandom = parseInt(Math.floor(Math.random()*(10-1))+1);
	
	if (numRandom >= 9){
		alert(numRandom + "! Excelente!")
	} else {
		if (numRandom >= 4) {
			alert(numRandom + "! Aprobado!")
		} else {
			alert(numRandom + "! Vamos! La proxima se puede")
		}
	}
}//FIN DE LA FUNCIÓN