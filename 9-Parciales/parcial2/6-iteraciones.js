//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 6-iteraciones");
	var importe = "si";
	var contador = 0;
	var primera = true
	var max
	var min

	

	while(contador <=6)
	{
		importe = prompt("Ingrese su importe");

		importe = parseInt(importe);

		 while (importe <= 0)
		
			{
				importe = prompt("Ingrese su importe");
		        importe = parseInt(importe);
			}
			contador ++
			if (primera == true)
	      	{	
			primera = false
			max = importe
			min = importe
            }
			if ( max < importe )
				{
					max = importe;
				}
				else if (min > importe)
						{
							min = importe;
						}
						
			
			
		
	}
	alert("el importe maximo es " + max + " el impote minimo es " + min);
}

