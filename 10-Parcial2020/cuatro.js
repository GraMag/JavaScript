function mostrar()
{
    while (true){
        letra = prompt("Ingrese una letra: ");
        while(true){
            char = letra.ignoreCase().charCodeAt(0);
            if (char <= 65 && char >=90) {
                letra = prompt("No es un caracter valido. Ingrese una letra: ");
            } else {
                break
            }
        }
        numero = prompt("Ingrese un numero: ");
        while (true) {
            if (numero <= -10 || numero >= 10){
                numero = prompt("Fuera de rango. Ingrese un numero: ");
            } else if (isNaN(numero)) {
                grade = prompt("No es un numero. Ingrese un numero: ");
            } else {
                break;
            }
        }
    }
}
