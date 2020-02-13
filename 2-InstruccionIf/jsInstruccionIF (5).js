function mostrar()
{
//tomo la edad  

var age = parseInt((document.getElementById("edad").value));

if (!(age > 12 && age < 18)){
    alert("No es adolescente");
}

}//FIN DE LA FUNCIÓN