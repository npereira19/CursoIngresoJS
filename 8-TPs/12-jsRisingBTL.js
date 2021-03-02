/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas 
 emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
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
 
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldoBrutoIngresado;
 	var numeroLegajo;
 	var nacionalidadIngresada;


//A.	Edad, entre 18 y 90 años inclusive.
 	edadIngresada = prompt("Ingrese su edad.","");
 	edadIngresada = parseInt(edadIngresada);
 	while(isNaN(edadIngresada) == true || edadIngresada<18 || edadIngresada>90)
 	{
 		edadIngresada = prompt("Error. Ingrese una edad válida.","");
 		edadIngresada = parseInt(edadIngresada);
 	}

 	//Sexo, “M” para masculino y “F” para femenino
 	sexoIngresado = prompt("Ingrese su sexo: M o F","");
 	while(sexoIngresado != "M" && sexoIngresado!= "F")
 	{
 		sexoIngresado = prompt("Error. Ingrese su sexo nuevamente.");
 	}
 		
 	//C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
 	estadoCivilIngresado = prompt("Ingrese el numero correspondiente a su estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
 	estadoCivilIngresado = parseInt(estadoCivilIngresado);
 	while(isNaN(estadoCivilIngresado) == true || estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
 	{
 		estadoCivilIngresado = prompt("Error. Ingrese un número válido: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 		estadoCivilIngresado = parseInt(estadoCivilIngresado);
 	}
 	
 	
 	//D.	Sueldo bruto, no menor a 8000.
 	sueldoBrutoIngresado = prompt("Ingrese su sueldo bruto.","");
 	sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
 	while(isNaN(sueldoBrutoIngresado) || sueldoBrutoIngresado<8000)
 	{
 		sueldoBrutoIngresado = prompt("Error. Ingrese un sueldo válido.","");
 		sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
 	}
 	
 	//E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
 	numeroLegajo = prompt("Inserte los 4 números de su legajo sin ceros a la izquierda.","");
 	numeroLegajo = parseInt(numeroLegajo);

 	while(isNaN(numeroLegajo) == true || numeroLegajo>1000 || numeroLegajo<9999)
 		{
 			numeroLegajo = prompt("Error. Inserte los 4 números de su legajo sin ceros a la izquierda.");
 			numeroLegajo = parseInt(numeroLegajo);
 		}
 	
 	//F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 	nacionalidadIngresada = prompt("Ingrese su nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
 	while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N")
 	{
 		nacionalidadIngresada = prompt("Error. Ingrese “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.","");
 	}
 	
	

	switch(sexoIngresado)
 	{
 		case "M":
 			sexoIngresado = "Masculino.";
 			break;
 		case "F":
 			sexoIngresado = "Femenino.";
 			break;
 	}

	switch(estadoCivilIngresado)
 	{

 		case 1:
 			estadoCivilIngresado = "Soltero/a."
 			break;
 		case 2:
 			estadoCivilIngresado = "Casado/a."
 			break;
 		case 3:
 			estadoCivilIngresado = "Divorciado/a."
 			break;
 		case 4:
 			estadoCivilIngresado = "Viudo/a."
 			break;

 	} 	

 	switch(nacionalidadIngresada)
 	{
 		case "A":
 			nacionalidadIngresada = "Argentino/a."
 			break;
 		case "E":
 			nacionalidadIngresada = "Extrajero/a."
 			break;
 		case "N":
 			nacionalidadIngresada = "Nacionalizado/a"
 			break;
 	}
 	



 	
 	document.getElementById('txtIdEdad').value = edadIngresada;
 	document.getElementById('txtIdSexo').value = sexoIngresado;
 	document.getElementById('txtIdEstadoCivil').value = estadoCivilIngresado
 	document.getElementById('txtIdSueldo').value = sueldoBrutoIngresado;
	document.getElementById('txtIdLegajo').value = numeroLegajo;
	document.getElementById('txtIdNacionalidad').value = nacionalidadIngresada;



}
