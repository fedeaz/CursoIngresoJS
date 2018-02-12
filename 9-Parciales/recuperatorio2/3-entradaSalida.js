//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 3-EntradaSalida");
	var ancho
	var largo
	var perimetro
	var alambre
	ancho = document.getElementById("ancho").value;
	largo = document.getElementById("largo").value;
	largo = parseInt(largo);
	ancho = parseInt(ancho);
	perimetro = largo * 2 + ancho * 2;
	alambre = perimetro * 6;
	
}

