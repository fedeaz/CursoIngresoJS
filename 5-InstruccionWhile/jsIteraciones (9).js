function Mostrar()
{

	var contador=0;
	// declarar variables
	var maximo
	var minimo
	var numero
	var numero2
	var primera=true
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador ++;
		numero = prompt("");
		numero2= prompt("Ingrese otro numero")
		if (numero2 == null)
		{
			break
		}
		
		if (numero == null)
		{
			break
		}
		numero = parseInt(numero);
		numero2 =parseInt(numero2);
		while(isNaN(numero2))
		{
			alert("ingrese un numero");
			return
		}
		while(isNaN(numero))
		{
			alert("Ingrese un numero");
			return
		}
			if(primera = true)
		{
			primera = false;
			maximo = numero;
			minimo = numero;
		}
		else if (numero > numero2)
		{
			document.getElementById("maximo").value = numero
			document.getElementById("minimo").value = numero2
		}
		else if (numero < numero2)
		{
			document.getElementById("maximo").value = numero2
			document.getElementById("minimo").value = numero
		}

	

	
	}




}//FIN DE LA FUNCIÓN