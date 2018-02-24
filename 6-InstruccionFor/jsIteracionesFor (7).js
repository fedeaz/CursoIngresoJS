function Mostrar()
{
    var ingre = prompt()
    var contador = 0

    for(var i = ingre ;i > 0 ;i-- )
    {
        if(ingre % i== 0 )
        {
            contador ++
            console.log(i)
        }
    }




}//FIN DE LA FUNCIÓN
//cuando a un numero lo dividìs por otro y da resto 0 es un divisor