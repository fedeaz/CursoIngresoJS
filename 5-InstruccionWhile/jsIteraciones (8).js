function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;

	var respuesta='si';
	while (respuesta == "si")
	{
		numero = prompt("")
		numero = parseInt(numero)
		while (isNaN(numero))
		{
			if (numero > 0)
			{
				contador ++;
				positivo += numero;
			}
			else
			{
					negativo *= numnero;}}
		
		numero = confirm("está seguro ?")
		if (numero != true)
		{
			break
		}


	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN