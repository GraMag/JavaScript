/* Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
b) Del ítem con más unidades, el fabricante
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	var producto = "";
	var precio = 0;
	var cantUnit = 0;
	var marca;
	var fabricante;
	var barMasCaro = 0;
	var barCantUnit;
	var barFabricante;
	var maxCant = 0;
	var maxFab;
	var totalJabon = 0;

	for (i = 0; i < 5; i++) {
		do {
			producto = prompt("Ingrese producto:");
		} while (producto != "barbijo" && producto != "jabon" && producto != "alcohol");
		do {
			precio = prompt("Ingrese precio:");
			precio = parseFloat(precio);
		} while (isNaN(precio) || precio < 100 || precio > 300);
		do {
			cantUnit = prompt("Ingrese cantidad:");
			cantUnit = parseInt(cantUnit);
		} while (isNaN(cantUnit) || cantUnit < 1 || cantUnit > 1000);
		do {
			marca = prompt("Ingrese marca:");
		} while (marca.length == 0 || marca == " ");
		do {
			fabricante = prompt("Ingrese fabricante:");
		} while (fabricante.length == 0 || marca == " ")
		
		if (producto == "barbijo" && barMasCaro < precio) {
			barMasCaro == precio;
			barCantUnit = cantUnit;
			barFabricante = fabricante;
		}

		if (maxCant < cantUnit) {
			maxCant = cantUnit;
			maxFab = fabricante;
		}

		if (producto == "jabon") {
			totalJabon++;
		}
	}

	alert("El fabricante de los barbijos más caros es: " + barFabricante + " ese pedido constaba de " + barCantUnit + " unidades."
		+ "El pedido con mayor cantidad de unidades (" + maxCant + ") fue del fabricante " + maxFab 
		+ "En total hay: " + totalJabon + "jabones." )
}
