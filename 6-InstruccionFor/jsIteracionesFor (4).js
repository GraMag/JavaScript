function mostrar()
{
    var dontStopMeNow = "";

        for (var i  = 0; i  < 100; i ++) {
            dontStopMeNow = prompt("Ingrese un numero:");
            if (dontStopMeNow.toUpperCase() == "BREAK") {
                break;
            }
        }
   
}//FIN DE LA FUNCIÓN