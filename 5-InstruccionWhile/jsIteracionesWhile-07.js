/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var acumulador;
	var respuesta;
	
	
	contador = 0;
	acumulador = 0;
	/*numeroIngresado = prompt("Ingrese un número.","");
	numeroIngresado = parseInt(numeroIngresado);
	acumulador = acumulador+numeroIngresado;	
	contador++;
	respuesta = prompt("Desea ingresar otro número?","");*/ //toda esta parte es obviable.

	while(respuesta != "No") //respuesta == "Si"
	{
		contador++;
		numeroIngresado = prompt("Ingrese otro número.", "");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador+numeroIngresado;
		respuesta = prompt("Desea ingresar otro número?.","");
	}

	promedio = acumulador/contador
	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = promedio;

}