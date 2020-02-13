function mostrar()
{
//tomo la edad  

var age = parseInt((document.getElementById("edad").value));
var civil = (document.getElementById("estadoCivil").value);

if (!(age < 18 || civil != "Soltero")) {
    alert("Es soltero y no es menor");
}

}//FIN DE LA FUNCIÓN