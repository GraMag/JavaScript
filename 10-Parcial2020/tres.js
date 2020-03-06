/*Realizar el algoritmo que permita ingresar el nombre de un país,
cantidad de habitantes en millones entre 1 y 270 (validar que sea un número en ese rango),
y la temperatura mínima que se registra en su territorio (validar que sea un número entre -50 y 50)
hasta que el usuario quiera
e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas impares. DONE
b) El nombre del pais con más habitantes.
c) La cantidad de paises por debajo de los 20 grados. DONE
d) El promedio de habitantes entre los paises ingresados.
f) La temperatura máxima ingresada, y nombre del pais que registro esa temperatura.
*/
function mostrar()
{
    var pais = "";
    var cantHabitantes = 0;
    var tempMin = 0;
    var tempImpares = 0;
    var tempMax = 0;
    var infierno = "";
    var maxHabitantes = 0;
    var acaHaceFrio = 0;
    var totalHabitantes = 0
    var acumulador = 0;
    var continuar = true;

    do {
        pais = prompt("Ingresar pais: ");
        cantHabitantes = parseInt(prompt("Cantidad de habitantes en millones:"));
        while (cantHabitantes < 1 || cantHabitantes > 270) {
            cantHabitantes = parseInt(prompt("Valor fuera de rango. Cantidad de habitantes en millones:"));
        }
        totalHabitantes = totalHabitantes + cantHabitantes;
        acumulador++ 

        tempMin = parseInt(prompt("Temperatura minima: "));
        while (tempMin <= -50 || tempMin >= 50) {
            tempMin = parseInt(prompt("Valor fuera de rango. Temperatura:"));
        }
        if (tempMin % 2 == 0) {
            tempImpares++;
        }
        if (tempMin < 20) {
            acaHaceFrio++;
        }

        continuar = prompt("Agregar otro pais? SI/NO");
        if (continuar.toLowerCase == "no") {
            continuar = false;
        }
    } while (continuar == true)
    document.write();
}