function mostrar()
{
 var planet = prompt("Ingrese un planeta");

 switch (planet) {
     case "mercurio":
     case "venus":
         alert ("Acá hace calor.");
         break;
     case "tierra":
         alert ("Acá vivimos.");
         break;
     case "marte":
     case "jupiter":
     case "saturno":
     case "urano":
     case "neptuno":
         alert ("Acá hace más frio.");
         break;
     default:
         alert ("No es un planeta");
         break;
    } 
 
}
