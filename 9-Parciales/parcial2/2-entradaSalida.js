//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe = prompt("ingrese su importe");
	importe = parseInt(importe);
	var iva = importe *21 / 100;
	var final = importe + iva ;
	alert(final);
	
}

