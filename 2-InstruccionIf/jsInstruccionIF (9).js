function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	//var numeroAleatorio = parseInt(Math.random()*(11 - 1));
	//alert(numeroAleatorio+1);


	var numeroAleatorio;
	var max = 11;
	var min = 1;
	
	numeroAleatorio = Math.random();
	numeroAleatorio *= max-min;
	numeroAleatorio = Math.floor(numeroAleatorio);
	numeroAleatorio += min;

	alert(numeroAleatorio);
} //FIN DE LA FUNCIÓN