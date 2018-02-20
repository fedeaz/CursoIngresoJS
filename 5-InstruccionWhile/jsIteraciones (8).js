function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;

	var respuesta='si';
	while (respuesta == "si")
	{
		contador ++;
		numero = prompt("")
		if (numero == null)
		{
			break
		}
		numero = parseInt(numero)

		while (isNaN(numero))
			{
				alert("ingrese un numero");
				return
			}
		if (numero > 0)
			{
				positivo += numero;
			}
		else
			{
				negativo *= numnero;
			   }
		
		
		numero = confirm("está seguro ?")
		
		if (numero != true)
		{
			break
		}
		else
			{
				document.getElementById('suma').value=positivo;
                document.getElementById('producto').value=negativo;
			}


	}




}//FIN DE LA FUNCIÓN