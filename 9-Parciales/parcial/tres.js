function Mostrar()
{
var dato1 = document.getElementById("alrgo").value;
var dato2 = document.getElementById("ancho").value;
var perimetro = dato1 *2 + dato2*2;
var alambre = perimetro * 3;
alert("se necesitan " + alambre + " metros de alambre");
}
