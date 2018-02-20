function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';


	while (respuesta != null)
	{
		contador ++;
		respuesta = prompt("ingrese el numero"); // null
		if (respuesta == null)
		{
			break
		}
		respuesta = parseInt(respuesta); // NaN
		if (isNaN(respuesta))
		{
			continue
		}

		acumulador += respuesta;
		respuesta = confirm("está seguro?");
	   if(respuesta != true)
		{
			break
		}



	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN