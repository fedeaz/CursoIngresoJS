//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 4-if");
	var numero1 = prompt()
	numero1 = parseInt(numero1)
	var numero2 = prompt()
	numero2 = parseInt(numero2)
	var resultado

	if(numero1 == numero2)
	{
		resultado = numero1 * numero2
	}
	else if(numero1 > numero2)
	{
		resultado = numero1 - numero2
	}
	else
	{
		resultado = numero1 + numero2
	}
	alert(resultado)
	
}

