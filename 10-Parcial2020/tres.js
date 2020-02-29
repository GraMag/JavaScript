function mostrar()
{
var nombrePais;
var cantidadHabitantes;
var temperatura;
var continuar;
var temperaturasImpares=0;
var paisConMasHabitantes=0;
var nombrePaisConMasHabitantes;
var paisesConTemperaturaMenorA20=0;
var promedioHabitantes





nombre= prompt("Ingrese el nombre del pais: ");
cantidadHabitantes= prompt("Ingrese la cantidad de habitantes (Entre 1 y 270.000.000):  ")
cantidadHabitantes = parseInt(cantidadHabitantes);
    while (cantidadHabitantes <1 || cantidadHabitantes >270000000){
     cantidadHabitantes=prompt("ERROR. Reingrese un dato valido entre 1 y 270.000.000");
     cantidadHabitantes=parseInt(cantidadHabitantes);
 }

 temperatura=prompt("Ingrese la temperatura minima que se regista en el pais (Entre -50 y 50): ");
    while(temperatura <-50 || temperatura>50 ){
        temperatura= prompt("ERROR. Reingrese una temperatura valida entre -50 y 50:");
        temperatura = parseInt(temperatura);
    }

continuar = prompt("Desea continuar ingresando datos?: Si/No ").toLowerCase();
    while (continuar != "si" && continuar != "no" ){
        continuar=prompt("Respuesta no valida. Por favor, ingrese SI para continuar o NO para salir: ").toLowerCase();
    }
if (temperatura %2 !=0){
    temperaturasImpares++;
}
if (temperatura<20){
paisesConTemperaturaMenorA20++;
}

if (cantidadHabitantes>paisConMasHabitantes){
    paisConMasHabitantes=cantidadHabitantes;
    nombrePaisConMasHabitantes=nombrePais;
}


}//fin funcion
