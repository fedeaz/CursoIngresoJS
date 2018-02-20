function Mostrar()
{

	var contador=0;
	// declarar variables
	var maximo
	var minimo
	var numero
	var primera=true
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador ++;
		numero = prompt("");
		
		if (numero == null)
		{
			break
		}
		numero = parseInt(numero);

		while(isNaN(numero))
		{
			alert("Ingrese un numero");
			return
		}
			if(primera == true)
		{
			primera = false;
			maximo = numero;
			minimo = numero;
		}
		else if (numero < maximo)
		{
			document.getElementById("maximo").value = maximo

			document.getElementById("minimo").value = numero
		}
		else 
		{
			document.getElementById("maximo").value = numero

			document.getElementById("minimo").value = minimo
		}

	

	
	}




}//FIN DE LA FUNCIÓN