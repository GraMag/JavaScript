function mostrar()
{
//tomo la edad  

var age = parseInt((document.getElementById("edad").value));

if (age >= 18) {
    alert("Es mayor de edad")
} else {
    alert("Es menor de edad")
}

}//FIN DE LA FUNCIÓN