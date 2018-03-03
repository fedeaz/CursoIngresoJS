function Mostrar()
{                                                   
    var numero1 = prompt("ingrese un numero");
    var numero2 = prompt("ingrese un numero");
    var resultado
     if(numero1 == numero2)
      {
        resultado = numero1 * numero2
       }
       else if(numero1 > numero2)
          {
          resultado = numero1 - numero2
          }
       else
       {
          resultado = numero2 + numero1
        }
        document.write(resultado);
}