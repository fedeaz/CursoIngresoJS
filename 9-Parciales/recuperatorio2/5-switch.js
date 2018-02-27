//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 5-Switch");
	var mes = prompt("ingrese un mes")

	switch(mes)
	{
		case"enero":
		alert("Veranito!!!!");
		break;

		case"febrero":
		alert("Veranito!!!!");
		break;

		default:
		alert("extraño enero y febrero!!!");
	}
	
}

