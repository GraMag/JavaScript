function mostrar()
{
//tomo la edad  

var age = parseInt((document.getElementById("edad").value));

if (age >= 18){
    alert ("Es mayor de edad.");
} else {
    if (age < 13) {
        alert ("Es menor de edad.")
    } else {
        alert ("Es adolescente.")
    }
}


}//FIN DE LA FUNCIÓN