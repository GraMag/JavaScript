function mostrar()
/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

{
    var grade = 0;
    var gender = "";
    var acumulator = 0;
    var minGrade;

    for (var i = 0; i < 5; i++) {
        grade = prompt("Ingresar nota: ");
        while (true) {
            if (grade < 0 || grade > 10){
                grade = prompt("Fuera de rango. Ingresar nota: ");
            } else if (isNaN(grade)) {
                grade = prompt("No es un numero. Ingresar nota: ");
            } else {
                break;
            }
        }
        acumulator = acumulator + grade;
        minGrade = grade;
        gender = prompt ("Ingrese su genero: F/M");
        while (true){
            if (gender.toUpperCase() != "F" && gender.toUpperCase() != "M") {
                gender = prompt ("Sexo invalido. Ingrese su genero: F/M");
            } else {
                break;
            }

        } 
    }
}
