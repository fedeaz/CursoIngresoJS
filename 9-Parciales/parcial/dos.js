function Mostrar()
{
 var importe = prompt("introduzca el importe del prodicto");
 importe = parseInt(importe);
 var iva = importe *21 /100;
 var importeFinal = iva + importe
 document.getElementById("importeFinal").value = importeFinal;



}
