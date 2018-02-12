//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var precio
	var cuenta
	var precioF
	precio = prompt("");
	precio = parseInt(precio);
	cuenta = precio * 21 / 100;
	precioF = precio + cuenta;
	document.getElementById("importe").value = precioF;

	
}

