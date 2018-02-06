function Mostrar()
{
    var ancho
    var largo
    var resultado
    largo = document.getElementById("alrgo").value;
    ancho = document.getElementById("ancho").value;
    largo = parseInt(largo)
    ancho = parseInt(ancho)
    resultado = largo * 2 + ancho * 2 * 3;
    alert("el resultado es " + resultado);


}
