function mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    /*if (mesDelAño == "Enero") {
        alert ("Que comiences bien el año!");
    }
    if (mesDelAño == "Marzo") {
        alert ("A clases!!!")
    }
    if (mesDelAño == "Julio"){
        alert ("Se vienen las vacaciones");
    } 
    if (mesDelAño == "Diciembre") {
        alert ("Felices fiestas!");
    }*/
    switch (mesDelAño){
        case "Enero":
            alert ("Que comiences bien el año!");
            break;
        case "Marzo":
            alert ("A clases!!!")
            break;
        case "Julio":
            alert ("Se vienen las vacaciones");
            break;
        case "Diciembre":
            alert ("Felices fiestas!");
            break;
        default:
            break;
    }
}


//FIN DE LA FUNCIÓN