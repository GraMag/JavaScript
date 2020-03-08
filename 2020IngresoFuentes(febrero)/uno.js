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
	var tipo = "";
	var precio = 0;
	var cantidad = 0;
	var marca = "";
	var fabricante = "";
	var bandera = 0;
	var barbijoMasCaro;
	var barbijoUnidades;
	var barbijoFabricante;
	var unidadesMax;
	var unidadesFabricante;
	var contadorJabon = 0;

	for (i = 0; i < 5; i++) {
	
		do {
			tipo = prompt("Ingrese producto: ").toLowerCase();			
		} while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol");

		do {
			precio = prompt("Ingrese precio: $");
		} while (isNaN(precio) || precio < 100 || precio > 300);

		do {
			cantidad = prompt("Ingrese cantidad de unidades: ");
		} while (isNaN(cantidad) || cantidad < 1 || cantidad > 1000);

		do {
			marca = prompt("Ingrese marca: ");	
		} while (fabricante != " ")

		do {
			fabricante = prompt("Ingrese fabricante: ");
		} while (fabricante != " ")

		if (tipo == "barbijo" && bandera == 0 || barbijoMasCaro < precio)  {
			barbijoMasCaro = precio;
			barbijoUnidades = cantidad;
			barbijoFabricante = fabricante;
		}

		if (bandera == 0 || unidadesMax < cantidad) {
			unidadesMax = cantidad;
			unidadesFabricante = fabricante;
			bandera++
		}

		if (tipo == "jabon") {
			contadorJabon++
		}
	}

	alert ("El fabricante de barbijos, " + barbijoFabricante + ", es el más caro y se vendieron " + barbijoUnidades + "unidades." 
		+ "\nEl item con más unidades es fabricado por: " + unidadesFabricante 
		+ "\nEn total hay " + contadorJabon + " unidades de jabon.");
}
