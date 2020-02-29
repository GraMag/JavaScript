function mostrar()
{
  var nombre;
  var genero;
  var edad;
  var peso;
  var contador;
  var acumuladorEdades=0;
  var promedioEdades= (acumuladorEdades / 4);
  var cantidadEdadesMayoresA25;
  var NombrePersMenosPesada;
  var PesoPersMenosPesada;
  var cantDistMasculino=0;
  var esPrimeraIteracion;
  var respuesta;

    for (contador =0 ; contador <4; contador++ ){   

  nombre = prompt ("Ingrese el nombre: ");
  genero = prompt ("Ingrese el genero: Femenino / Masculino / Otro ").toLowerCase();

    while (genero != "femenino" && genero != "masculino" && genero!= "otro" ){
            genero = prompt ("Dato invalido, por favor ingrese Femenino, Masculino u Otro; ").toLowerCase();
            }

  edad = prompt ("Ingrese la edad: ");
  edad = parseInt("edad");
            while (isNaN (edad) < 18 && edad >100){
                edad = prompt ("Por favor, reingrese una edad valida entre 18 y 100 años: ");
                edad = parseInt("edad");
            } 
  peso = prompt ("Ingrese el peso: ");
  peso = parseInt ("peso");
              while (peso<1){
                peso = prompt("Por favor, reingrese un peso valido mayor a 1: ");
                peso = parseInt ("peso");
                }

    if (contador == 0 ){
        PesoPersMenosPesada = peso;
    }
    if (genero != "masculino" || peso > 80){
        cantDistMasculino++;
    }
    if (edad >= 25 ){//puntoA
        acumuladorEdades= acumuladorEdades + edad;
        cantidadEdadesMayoresA25++;
    }
     if(cantidadEdadesMayoresA25 >0){
         promedioEdades = acumuladorEdades / cantidadEdadesMayoresA25;
         respuesta+= "El promedio de edades mayores a 25 es " + promedioEdades;
     }
    if(peso<PesoPersMenosPesada){
        PesoPersMenosPesada=peso;
        NombrePersMenosPesada=nombre;
    }
    
    } //fin for  

    prompt ("El promedio de las edades iguales o mayores a 25 es: " + promedioEdades);
    prompt ("La persona menos pesada se llama: " + NombrePersMenosPesada + " y su peso es: " + PesoPersMenosPesada);
    prompt ("La cantidad de personas con genero distinto a masculino o con peso mayor a 80 es: " + cantDistMasculino);

   }
