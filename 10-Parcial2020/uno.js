
function mostrar()
{
var ladoA= document.getElementById("ladoA").value;
var ladoB= document.getElementById("ladoB").value;
var ladoAp= parseInt (document.getElementById("ladoA").value);
var ladoBp= parseInt (document.getElementById("ladoB").value);
var anguloRecto = document.getElementById("angulosRectos").value



if (ladoA == ladoB && anguloRecto == "SI"){//-------cuadradro
alert ("Los lados concatenados es: " + (ladoA + ladoB) + "Y la multiplicacion de sus lados es: " + (ladoA * ladoB));
}

if (ladoA == ladoB && anguloRecto == "NO"){
alert ("Los lados concatenados es: " + (ladoA + ladoB) + "Y la suma de sus lados es: " + (ladoAp + ladoBp));
}

if (ladoA != ladoB && anguloRecto == "SI"){//----------rectangulo
    alert ("Los lados concatenados es: " + (ladoA + ladoB) + " y la supercifie es: " + (ladoA * ladoB) );
}

if (ladoA != ladoB && anguloRecto == "NO"){//----------ROMBO
    alert ("Los lados concatenados es: " + (ladoA + ladoB) + " Y su perimetro es: " + (ladoAp + ladoBp + ladoAp + ladoBp) );
}

}//FIN DE LA FNCION