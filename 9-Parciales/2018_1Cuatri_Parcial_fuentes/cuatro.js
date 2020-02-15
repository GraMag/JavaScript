function mostrar()
{
    var num1 = prompt("Ingrese un numero");
    var num2 = prompt("Ingrese otro numero");

    if (num1 == num2){
        alert(num1+num2);
    } else if (num1 > num2) {
            alert(parseInt(num1) - parseInt(num2));
        } else {
            var suma = (parseInt(num1) + parseInt(num2));
            if (suma >= 10) {
                alert("La suma es igual a " + suma + " y supero el 10.");
            } else {
                alert(suma);
            }
        }
    }

