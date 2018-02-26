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
    var sexo = prompt("ingrese su sexo con m o f")
    var estadoc = "si"
    var sueldo = "si"
    var legajo
    var nacion

    
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
   while(sexo != "f" && sexo != "m")
   {
       alert("Ingrese un sexo valido");
       sexo = prompt("ingrese su sexo con m o f");
       continue 
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
           //document.getElementById("EstadoCivil").value = estadoc;
       }
       else if(estadoc === 2)
       {
           estadoc = "casados";
           //document.getElementById("EstadoCivil"),value = estadoc;
       }
       else if(estadoc === 3)
       {
           estadoc = "divorciados";
          // document.getElementById("EstadoCivil"),value = estadoc;
       }
       else if(estadoc === 4)
       {
           estadoc = "viudos";
           //document.getElementById("EstadoCivil"),value = estadoc;
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
       while(sueldo >= 8000)
       {
           document.getElementById("Sueldo").value = sueldo;
       }

   }

   while ()


}
