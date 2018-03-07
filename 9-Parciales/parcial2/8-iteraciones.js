//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 8-iteraciones");
	var numero 
	var confirmar = confirm("quiere ingresar un numero?")
	var vandera = true
	var maximo
	var minimo
	var suma = 0
	var contador = 0
	var promedio
	var par = true
	var impar


	while (confirmar == true) 
	{
		numero = prompt("ingrese un numero positivo");
		numero = parseInt(numero);
		confirmar = confirm("quiere ingresar otro numero?")
		while (numero <=0) 
		{
			numero = prompt("ingrese solo un numero positivo");
			numero = parseInt(numero);
		}	

		contador ++

		suma += numero

	if(numero % 2 == 0)
		{
			 impar = false
			//document.write("El numero introducido es par");
		}
	else
		{
			 par = false
			//document.write("El numero es impar");
		}

	if (vandera == true)
		{
			vandera = false
			maximo = numero
			minimo = numero
		}

	if (maximo < numero)
		{
			maximo = numero
		}
	else if (minimo > numero)
		{
			minimo = numero
		}
	
	promedio = suma / contador
	
	}
	alert("")
	if (par == true)
		{
			document.write("El numero introducido es par");
		}
	else
		{
			document.write("El numero es impar");
		}



	
}

