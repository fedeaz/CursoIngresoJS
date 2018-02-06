function Mostrar()
{
    var precio1
    var precio2
    var precio3
    var resultado
    precio1 = document.getElementById("precioUno").value 
    precio2 = document.getElementById("precioDos").value
    precio3 = document.getElementById("precioTres").value
    precio1 = parseInt(precio1)
    precio2 = parseInt(precio2)
    precio3 = parseInt(precio3)
    resultado = precio1 + precio2 + precio3 / 3;
    alert("el precio es " + resultado);

}
