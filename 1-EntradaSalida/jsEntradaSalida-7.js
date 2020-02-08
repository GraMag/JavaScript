/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var number1 = parseInt(document.getElementById("numeroUno").value);
    var number2 = parseInt(document.getElementById("numeroDos").value);
    alert("El resultado de la suma es: " + (number1+number2));
}

function restar()
{
	var number1 = parseInt(document.getElementById("numeroUno").value);
    var number2 = parseInt(document.getElementById("numeroDos").value);
    alert("El resultado de la resta es: " + (number1-number2));
}

function multiplicar()
{ 
	var number1 = parseInt(document.getElementById("numeroUno").value);
    var number2 = parseInt(document.getElementById("numeroDos").value);
    alert("El resultado de la multiplicación es: " + (number1*number2));
}

function dividir()
{
	var number1 = parseInt(document.getElementById("numeroUno").value);
    var number2 = parseInt(document.getElementById("numeroDos").value);
    alert("El resultado de la división es: " + (number1/number2));
}

