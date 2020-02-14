function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numRandom = Math.floor(Math.random()*(11-1))+1;
	
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