function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch (mesDelAño)
{
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":

    alert("tiene 30 días")
    break

    case "Febrero":
    alert("Tiene 28 dias")
    break

default:
alert("tiene 31 días")
}
	
	



}//FIN DE LA FUNCIÓN