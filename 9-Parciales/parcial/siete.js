function Mostrar()
{
    var notas
    var sexo
    var alumnos = 0
    var vandera = true
    var notaMin
    var promedio
    var contadorVarones = 0
    var alumnos
    var cantidadNotas = 0


while (alumnos <= 9) 
{
    notas = prompt("Ingrese una nota de 1 a 10");
    notas = parseInt(notas);

    while (notas <=0 || notas > 10 || isNaN(notas) ) 
    {
     notas = prompt("Ingrese una nota valida");
     notas = parseInt(notas);
    }
    cantidadNotas = notas + cantidadNotas;

    alumnos ++;
    
    promedio = cantidadNotas / alumnos;
    
    sexo = prompt("Ingrese el sexo del alumno");

    while (sexo != "m" && sexo != "f") 
    {
       sexo = prompt("Ingrese un sexo valido");
    }
    if (vandera == true)
        {
            vandera = false;
            notaMin = notas;
        }
    if (notas < notaMin)
        {
            notaMin = notas;
        }
    if (sexo == "m" && notas >= 6)
        {
            contadorVarones++;
        }

}
     alert("El promedio de las notas es " + promedio);
     alert("La nota mas baja es " + notaMin);
     alert("La cantidad de varones con nota mayor a 6 es " + contadorVarones);

}
