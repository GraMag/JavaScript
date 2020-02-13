function mostrar()
{

var mesDelAño = document.getElementById('mes').value;



if ((mesDelAño == "Julio") || (mesDelAño == "Agosto")) {
    alert("Abrigate que hace frio.");
} else if ((mesDelAño == "Septiembre") || (mesDelAño == "Octubre") || (mesDelAño == "Noviembre") || (mesDelAño == "Diciembre")) {
    alert("Ya pasamos el frio, ahora calor!!!");
} else {
    alert("Abrigate que hace frio.");
} 



}//FIN DE LA FUNCIÓN