function Mostrar()
{
    var importe 
    var contador = 0;
    var importeMayor
    var importeMenor
    var vandera = true

    while (contador <= 23)
      {
         importe = prompt("ingrese el importe de la venta");
         importe = parseInt(importe);

            while(importe <= 0)
            {
                importe = prompt("ingrese un importe valido");
                importe = parseInt(importe);
            }
        contador++
        if(vandera == true)
            {
                vandera = false
                importeMayor = importe
                importeMenor = importe
            }
        if(importeMayor < importe)
            {
                importeMayor = importe
            }
        else if(importe < importeMenor)
            {
                importeMenor = importe
            }

    }
    alert("el importe mayor fue "+importeMayor + " el importe menor es " + importeMenor);
    
}
