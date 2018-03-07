//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 5-Switch");
	
	var mesDelAño = prompt("ingrese un mes del año");

	switch(mesDelAño)
		{
			case("enero"):
			alert("Veranito!!!!");
			break

			case("febrero"):
			alert("Veranito!!!!");
			break

			default:
			alert("extraño enero y febrero!!!");
		}
	
}

