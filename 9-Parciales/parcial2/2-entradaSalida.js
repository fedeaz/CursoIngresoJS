//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe
	var resultado
	var porcentaje
	importe = prompt("");
	importe = parseInt(importe);
	porcentaje = parseInt(porcentaje)
	porcentaje = importe * 21 / 100;
	resultado = importe + porcentaje;
	document.getElementById("importe").value = resultado;

	
}

