/*En el ingreso a un viaje en crucero nos solicitan nombre , edad(mayores de 18), sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{	
	var nombre = "";
	var edad = 0;
	var sexo = "";
	var civil = "";
	var continuar = "si";
	var vuelta0 = 0
	var edadhombreCasadoMasJoven;
	var nombreHombreCasasdoMasJoven;
	var sexoPaxViejo;
	var nombrePaxViejo;
	var edadPaxViejo;
	var totalMujeres = 0;
	var acumuladorEdadesF = 0;
	var contadorMujeresCoV = 0;
	var totalHombresS = 0;
	var edadHombresS = 0;
	var promedioEdadFem;
	var promedioEdadHomSol;
	
	do {
		do {
			nombre = prompt("Ingrese su nombre: ");
		} while (nombre == "" || nombre == " ");

		do {
			edad = prompt("Ingrese su edad: ");
			edad = parseInt(edad);
		} while (isNaN(edad) || edad < 18);

		do {
			sexo = prompt("Ingrese su sexo: F/M").toLowerCase();
		} while (sexo != "f" && sexo != "m");

		do {
			civil = prompt("Ingrese su estado civil: S / C  / V").toLowerCase();
		} while (civil != "s" && civil != "c" && civil != "v");

		if (sexo == "m" && civil == "c" && edad < edadhombreCasadoMasJoven || vuelta0 == 0) {
			edadhombreCasadoMasJoven = edad;
			nombreHombreCasasdoMasJoven = nombre;
		} 

		if (sexo == "m" || civil == "s") {
			totalHombresS++;
			edadHombresS = edadHombresS + edad;
		}

		if (vuelta0 == 0 || edad > edadPaxViejo) {
			edadPaxViejo = edad;
			nombrePaxViejo = nombre;
			sexoPaxViejo = sexo;
			vuelta0++;
		}

		if (sexo == "f") {
			totalMujeres++;
			acumuladorEdadesF = acumuladorEdadesF + edad;
		if (sexo == "f" && civil != "s") {
			contadorMujeresCoV++;
		}

		do {
			continuar = prompt("Desea ingresar otro pasajero? Si / No").toLowerCase()
		  } while (continuar != "si" && continuar != "no");
	
	} while (continuar == "si");

	if (totalMujeres != 0) {
		promedioEdadFem = acumuladorEdadesF / totalMujeres;
	} else {
		promedioEdadFem = "No hay mujeres a bordo."
	}

	if (totalHombresS != 0) {
		promedioEdadHomSol = edadHombresS / totalHombresS;	
	} else {
		promedioEdadHomSol = "No hay hombres solteros a bordo."
	}

	alert("El hombre casado más joven es: " + nombreHombreCasasdoMasJoven
		+ "\nEl pasajero más viejo es: " + nombrePaxViejo + " y su sexo es: " + sexoPaxViejo
		+ "\nEl total de mujeres casadas o viudas es: " + contadorMujeresCoV
		+ "\nEl promedio de edad entre las mujeres es de: " + promedioEdadFem
		+ "\nEl promedio de edad entre los hombres solteros es: " + promedioEdadHomSol);
}
