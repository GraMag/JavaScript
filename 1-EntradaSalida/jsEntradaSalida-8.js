/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var number1 = parseInt(document.getElementById("numeroDividendo").value);
    var number2 = parseInt(document.getElementById("numeroDivisor").value);
    alert("El resto de la división es: " + (number1%number2));
}
