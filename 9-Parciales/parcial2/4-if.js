//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 4-if");
	var primero = prompt();
	var segundo = prompt();
	var resultado;

	if(primero == segundo)
	{
		resultado = (primero * segundo)
	
	}
	else if (primero > segundo)
	{
		resultado = (primero - segundo)
		
	}
	else
	{
		resultado = (primero + segundo)
	}
	alert(resultado)
}

