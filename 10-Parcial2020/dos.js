/*Debemos realizar la carga de cuatro personas,
de cada una debo obtener los siguientes datos:
check - el nombre,
check - el género (validar "masculino", "femenino" u "otro"),
check - la edad (validar que sea un número y esté entre 18 y 100),
check - el peso (validar que sea un número y mayor a 1).

check - a) El promedio de las edades mayores o iguales a 25.
check - b) El nombre de la persona menos pesada y su peso.
        c) La cantidad personas de género distinto a masculino ó peso mayor a 80.

Caso de prueba:
1) Nombre: "Ana"; Género: "mujer" (mal), Género: "f"(mal), Género: "femenino" (bien); Edad: 40; Peso: 60.
2) Nombre: "Gaby"; Género: "otro"; Edad: "a" (mal), Edad: 17 (mal), Edad: 101 (mal), Edad: 18 (bien); Peso: 40.
3) Nombre: "Luis"; Género: "masculino"; Edad: 60; Peso: "k" (mal), Peso: 0 (mal), Peso: 79 (bien).
4) Nombre: "Alan"; Género: "masculino"; Edad: 25; Peso: 90.

Resultado:
- Promedio de las edades mayores o iguales a 25: 41,67 (apróx).
- Nombre de la persona menos pesada y su peso: "Gaby" (40 kg).
- Cantidad de personas de género distinto a masculino ó peso mayor a 80: 3 (tres).*/

function mostrar()
{
    var name = "";
    var gender = "";
    var age = 0;
    var weight = 0;

    var cantMax25 = 0;
    var edadesMax25 = 0;
    
    var personaMasLiviana = name;
    var pesoMin;

    var noManNor80 = 0;

 
    for (var i = 0; i < 4; i++) {

        name = prompt("Ingrese su nombre: ");
        gender = prompt("Ingrese su genero (Femenino / Masculino / Otro): ");

        while (gender.toLowerCase() != "femenino" && gender.toLowerCase() != "masculino" && gender.toLowerCase() != "otro"    ) {
            gender = prompt("Genero invalido. Ingrese su genero (Femenino / Masculino / Otro): ");
        }

        age = parseInt(prompt("Ingrese su edad: "));

        while (isNaN (age)) {
            age = parseFloat(prompt("Edad invalida. Ingrese su edad: "));
        }
        while (age < 18 || age > 100) {
            age = parseFloat(prompt("Edad fuera de rango. Ingrese su edad: "));
        }   
        if (age >= 25) {
            edadesMax25 = edadesMax25 + age;
            cantMax25++
        }

        weight = parseFloat(prompt("Ingrese su peso en Kg: "));
        while (isNaN (weight) || weight <= 0 ) {
            weight = parseFloat(prompt("Peso invalido. Ingrese su peso en Kg: "));
        }
        if (i == 0) { 
            pesoMin = weight;
            personaMasLiviana = name;   
        } else {
            if (weight < pesoMin) {
                pesoMin = weight;
                personaMasLiviana = name;
            }
        }
        if (weight > 80 || gender.toLowerCase() != "masculino"){
            noManNor80++;
        }
    }

    if (cantMax25 == 0) {
        prom = "0, no se ingresaron personas mayores de 25 años.";
    } else {
        prom = (edadesMax25 / cantMax25).toFixed(2);
    }

    alert("El promedio de las edades mayores o iguales a 25 es de: " + prom + "\nLa persona más liviana es: " + personaMasLiviana + " y su peso es: " + pesoMin + "kg.\nLas personas de genero =/= a masculino o mayores de 80Kgs son: " + noManNor80);

}