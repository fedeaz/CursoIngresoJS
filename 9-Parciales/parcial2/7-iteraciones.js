//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 7-iteraciones");
	var notas
	var sexo
	var contador = 0
	var acumulador = 0
	acumulador = parseInt(acumulador)
	var contadorDeVarones
	var baja
	var resultado



	sexo = prompt("ingresar M ó F")
	while(sexo != "m" && sexo !="f")
	{
		alert("Ingrese un sexo valido")
		sexo = prompt("ingresar M ó F")
		continue
	}

	notas = prompt("ingrese una nota")
	notas = parseInt(notas)
	while (isNaN(notas))
	{
		alert("ingrese una nota correcta")
		notas = prompt()
	    notas = parseInt(notas)
	}

	while( notas <0 || notas >10)
	{
		contador++;
	    acumulador += notas;
		
		if (contador == 1)
			{
				baja = notas
			}
			else if (nota< baja)
			{
				baja = notas
			}
		if( seco == "m" && nota >6 )
		{
			contadorDeVarones 
			{
				resultado2 = acumulador / cantidadN
			}

			//
			if (notas < baja)
			{
				resultado = notas
			}
			else if (notas > baja)
			{
				resultado = baja
			}
			alert("el promedio es " + resultado2);
			alert("la nota mas baja es " + resultado);
			
		}
	}
	
}

