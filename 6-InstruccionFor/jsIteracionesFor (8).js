function Mostrar()
{
    var ingre = prompt();
    var contador = 0;


    for(var i=1 ;i <= ingre ;i++ )
    {
        if(ingre %i == 0)
        {
            contador++
        }
        
    }
    if (contador >=3)
    {
        alert ("NO ES PRIMO");
    }
    else
    {
        alert("Es Primo");
    }




}//FIN DE LA FUNCIÓN