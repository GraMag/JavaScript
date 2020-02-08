/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var price1 = parseFloat(document.getElementById("PrecioUno").value);
var price2 = parseFloat(document.getElementById("PrecioDos").value);
var price3 = parseFloat(document.getElementById("PrecioTres").value);

function Sumar()
{
    sum = price1 + price2 + price3;
    alert(sum);
   
}
// function Sumar () 
// {   
//     price1 = parseFloat(document.getElementById("PrecioUno").value);
//     price2 = parseFloat(document.getElementById("PrecioDos").value);
//     price3 = parseFloat(document.getElementById("PrecioTres").value);
//     alert(price1 + price2 + price3);
// }
// function Promedio () 
// {
//     price1 = parseFloat(document.getElementById("PrecioUno").value);
//     price2 = parseFloat(document.getElementById("PrecioDos").value);
//     price3 = parseFloat(document.getElementById("PrecioTres").value);
// 	sum = (price1 + price2 + price3)
// 	alert((sum  )/3)
// }
// function PrecioFinal () 
// {
//     price1 = parseFloat(document.getElementById("PrecioUno").value);
//     price2 = parseFloat(document.getElementById("PrecioDos").value);
//     price3 = parseFloat(document.getElementById("PrecioTres").value);
// 	sum = (price1 + price2 + price3)
//     alert(sum*1.21)
// }