function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random
	random = Math.floor((Math.random()*(11-1)+1));
	alert(random)
	if(random >=9)
	{
		alert("EXCELENTE");
	}
	else if(random >=7)
	{
		alert("muy bine");
	}
	else if(random >=4)
	{
		alert("bien");
	}
	else if(random >=2)
	{
		alert("mla");
	}
	else if(random >=0)
	{
		alert("PÉSIMO");
	}

}//FIN DE LA FUNCIÓN