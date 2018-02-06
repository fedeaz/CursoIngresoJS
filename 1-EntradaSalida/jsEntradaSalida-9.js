/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var suledo;
    var resultado;
    sueldo = document.getElementById("sueldo").value;
    resultado = document.getElementById("resultado").value;
    sueldo = parseInt(sueldo);
    resultado = sueldo * 10 / 100;
    document.getElementById("resultado").value = resultado + sueldo;

	
}
