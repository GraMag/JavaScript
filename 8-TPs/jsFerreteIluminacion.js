/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	[ANDA] Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	[ANDA] Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	[ANDA} Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	[ANDA] Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

    
function CalcularPrecio () 
{
     var lamp = 35;
     var amount = parseInt(document.getElementById("Cantidad").value);
     var brand = document.getElementById("Marca").value;
     var price = lamp * amount;

     switch(amount) {
         case 5:
                if (brand == "ArgentinaLuz") {
                    total = price - (price*0.4);
                } else {
                    total = price - (price*0.3);
                    }
                break;
         case 4:
             if (brand == "ArgentinaLuz" || brand == "FelipeLamparas"){
                 total = price - (price*0.25);
             } else {
                 total = price - (price*0.20);
             }
             break;
         case 3:
             if (brand == "ArgentinaLuz"){
                total = price - (price*0.15);
             } else if (brand == "FelipeLamparas") {
                 total = price - (price*0.10);
             } else {
                 total = price - (price*0.05);
             }
             break;
        default:
            if (amount >= 6) {
                total = price - (price*0.5);
            } else {
                total = price;
            }
            break;
     }

     if (total > 120){
        iibb = total*0.1;
        document.getElementById("precioDescuento").value = total + iibb;
        alert("Usted pagó $" + iibb + " de IIBB.\n La AFIP te ama");
    } else {
        document.getElementById("precioDescuento").value = total;
    }
        
     
}