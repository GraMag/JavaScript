function mostrar()
{
    var cantPar = 0;
    var numPar = 0;
    var num = prompt("Ingrese un numero: ");

    for (var i = 0; i < num; i++) {
        if (num % 2 == 0) {
            cantPar++;
            numPar = numPar + num;
        }
    }


}//FIN DE LA FUNCIÓN