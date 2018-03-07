//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho = document.getElementById("ancho").value;
	var largo = document.getElementById("largo").value;
	var perimetro
	var perimetroFinal
	ancho = parseInt(ancho);
	larog = parseInt(largo);

	perimetro = ancho *2 + largo * 2;
	perimetroFinal = perimetro *6;

	alert("se necesitan " + perimetroFinal);



	
}

