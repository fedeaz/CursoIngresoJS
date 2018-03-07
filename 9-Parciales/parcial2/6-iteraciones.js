//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe
	
	var dias = 0
	var vandera = true
	var importeMaximo
	var importeMinimo

while(dias <= 6)
	{
		importe = prompt("ingrese el importe de las ventas");
		importe = parseInt(importe);
		while(importe <=0)
		{
		importe = prompt("ingrese un importe de ventas valido");
	    importe = parseInt(importe);
		}

		dias ++
		
		if(vandera == true)
			{
				vandera = false
				importeMaximo = importe
				importeMinimo = importe
			}
		
		if(importeMaximo < importe)
			{
				importeMaximo = importe
			}
		else if (importeMinimo > importe)
			{
				importeMinimo = importe
			}


	}
alert("el importe maximo fue " + importeMaximo + " el importe minimo fue " + importeMinimo);





}

