function mostrar()
{
    var price = parseFloat(prompt("Ingrese precio:"));
    var percent = parseFloat(prompt("Ingrese porcentaje"));

    document.getElementById("elPrecioFinal").value = (price - ((price*percent)/100));
}
