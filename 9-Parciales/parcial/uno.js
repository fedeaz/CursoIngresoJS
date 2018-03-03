
function Mostrar()
{
    var cuadrado
    var perimetro
    
    cuadrado = document.getElementById("laBase").value;
    cuadrado = parseInt(cuadrado);
    perimetro = cuadrado * 4;
    alert("el perimetro es " + perimetro);

}
