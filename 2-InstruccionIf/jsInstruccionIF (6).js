function Mostrar()
{
//tomo la edad  
var edad
edad = document.getElementById("edad").value;
if(edad >17)
{
    alert("es mayor");
}
else
{
    if(edad <13)
    {
        alert("es niño");
    }
    else
    {
        alert("es adolescente");
    }
}



}//FIN DE LA FUNCIÓN