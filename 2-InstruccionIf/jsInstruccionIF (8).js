function Mostrar()
{
//tomo la edad  
var edad
var estado
estado = document.getElementById("estadoCivil").value;
edad = document.getElementById("edad").value;
if(edad >=18 && estado =="Soltero")
{
    alert("Es soltero y no es menor");
}
	


}//FIN DE LA FUNCIÓN