/*Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	/*numeroIngresado = prompt("Ingrese 5 números.", "");
	numeroIngresado = parseInt(numeroIngresado);*/ //no es necesario incluirlo fuera del while.
	contador = 0;
	acumulador = 0;
	promedio = 5;

	while(contador < 5)
	{
		contador++;
		numeroIngresado = prompt("Ingrese el número #"+contador, "");
		//numeroIngresado = parseInt(numeroIngresado); este parseo no es necesario ya que el dato ingresado puede no servir. Se pone luego 
		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("Error. Ingrese el número #"+contador, "");
			
		}
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador+numeroIngresado;

	}

	promedio = acumulador/promedio
	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = promedio;

	
}//FIN DE LA FUNCIÓN