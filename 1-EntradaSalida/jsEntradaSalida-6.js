/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

var number1 = parseInt(document.getElementById("numeroUno").value);
var number2 = parseInt(document.getElementById("numeroDos").value);

alert("El resultado de la suma es: " + (number1+number2));
}

