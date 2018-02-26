/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{

    var edad = "si";
    var sexo = "si"
    var estadoc = "si"
    var sueldo = "si"
    var legajo = "si"
    var nacion = "si"
    var primera = true
    var max
    var min

    
      while(edad == "si")
    {
        edad = prompt("ingrese una edad");
        edad = parseInt(edad);
        while (isNaN(edad))
		{
            alert("ingrese una edad valida");
            edad = prompt("ingrese una edad");
            edad = parseInt(edad);
            continue
		} 

        if(edad >= 18 || edad < 90)
    {
        document.getElementById("Edad").value = edad;
    }
    else
     {  
        alert("ingrese una edad valida");
        edad = prompt("");
        continue
        
     }
   }
   while(sexo == "si")
   {
       sexo = prompt("ingrese su sexo con m o f")
       while(sexo != "f" && sexo != "m")
   {
       alert("Ingrese un sexo valido");
       sexo = prompt("ingrese su sexo con m o f");
       continue 
   }
   }
   document.getElementById("Sexo").value = sexo;

   while(estadoc == "si")
   {
       estadoc = prompt("ingresar estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
       estadoc = parseInt(estadoc);
       while(isNaN(estadoc))
       {
           alert("ingrese un Estado civil correcto");
           estadoc = prompt("ingresar estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
           estadoc = parseInt(estadoc);
       }
       if(estadoc === 1)
       {
           estadoc = "soltero";
       }
       else if(estadoc === 2)
       {
           estadoc = "casados";
       }
       else if(estadoc === 3)
       {
           estadoc = "divorciados";
       }
       else if(estadoc === 4)
       {
           estadoc = "viudos";
       }
       document.getElementById("EstadoCivil").value = estadoc;
    
       }
       while (estadoc >4)
       {
           alert("ingrese un Estado Civil correcto");
            estadoc = prompt("ingresar estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
            estadoc = parseInt(estadoc);
           continue
       }
   

   while(sueldo == "si")
   {
       sueldo = prompt("ingrese su sueldo bruto");
       sueldo = parseInt(sueldo);
       while (isNaN(sueldo))
       {
           alert("ingrese un numero valido");
           sueldo = prompt("ingrese su sueldo bruto");
           sueldo = parseInt(sueldo);
           continue
       }
       while (sueldo <8000)
       {
           alert("el sueldo bruto no puede se menor a $8000");
           sueldo = prompt("ingrese su sueldo bruto");
           sueldo = parseInt(sueldo);
           continue
       } 
         document.getElementById("Sueldo").value = sueldo;
        
    if( primera == true)
{
    primera = false
    max = sueldo
    min = sueldo
}

if(nacion == "nacionalizado/a")
{
    if(sueldo > max)
    {
        max = sueldo
    }

   }

   while (legajo == "si")
   {
       legajo = prompt("ingrese el Legajo")
       legajo = parseInt(legajo)
       while( isNaN(legajo))
       {
           alert("ingrese un Legajo correcto")
           legajo = prompt("ingrese el Legajo")
           legajo = parseInt(legajo)
           continue
       }
       while(legajo >= 9999)
       {
           alert("ingrese un Legajo correcto")
           legajo = prompt("ingrese el Legajo")
           legajo = parseInt(legajo)
           continue
       }
           document.getElementById("Legajo").value = legajo
   }

   while(nacion == "si")
   {
       nacion = prompt("Ingrese su Nacionalidad  “A” para argentinos, “E” para extranjeros, “N” para nacionalizados ");
       while(nacion != "a" && nacion != "e" && nacion != "n")
       {
           alert("ingrese una Nacionalidad correcta:  “A” para argentinos, “E” para extranjeros, “N” para nacionalizados ");
           nacion = prompt("Ingrese su Nacionalidad  “A” para argentinos, “E” para extranjeros, “N” para nacionalizados ");
           continue
       }
       if(nacion == "a")
       {
           nacion = "Argentino/a"
       }
       else if( nacion == "e")
       {
           nacion = "Extranjero/a"
       }
       else if( nacion == "n")
       {
           nacion ="nacionalizado/a"
       }
       document.getElementById("Nacionalidad").value = nacion
   }


}



}
