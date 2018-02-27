//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 6-iteraciones");
	var importe = "si";
	var contador = 0;
	var primera = true
	var max
	var min
	var final
	

	while(importe == "si")
	{
		importe = prompt("Ingrese su importe");

		importe = parseInt(importe)

		while (isNaN(importe))
		  {  
			alert("ingrese un importe correcto");
			importe = prompt("Ingrese su importe");
		    importe = parseInt(importe);
		    }
		 while (importe < 0 && contador ==6)
		{
			contador ++
			if (primera == true)
	      	{	
			primera = false
			max = importe
			min = importe
            }
			else if ( importe < max )
			{
				final = max
			}
			else if (importe > max)
			{
				final = importe
			}
			if (importe < min)
			{
				alert("el importe minimo fue " + importe) 
			}
			else if (importe > min)
			{
				alert("el importe minimo fue " + min)
			}
		}
	}
}

