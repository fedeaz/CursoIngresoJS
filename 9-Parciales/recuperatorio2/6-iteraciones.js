//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 6-iteraciones");
	var importe
	var contador = 0
	var primera = "si"
	var importeMax
	var importeMin


while(contador <= 6)
{
	importe = prompt("Ingrese el importe")
	importe = parseInt(importe)
	contador++

	while(importe <=0)
       {	
		importe = prompt("ingresar el importe")
	    importe = parseInt(importe)
	   }

		if(primera == "si")
		{
			primera = "no"
			importeMax = importe
			importeMin = importe
		}
	
		if (importeMax < importe)
		{
			importeMax = importe
		}
		else if (importeMin > importe)
		{
			importeMin = importe
		}
	}
	alert("el importe mayor es " + importeMax + " y el menor es " + importeMin);
	
}

