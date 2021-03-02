/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	var valorDeVerdad;

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado = parseInt(numeroIngresado);
	//valorDeVerdad = isNaN(numeroIngresado)

	while(isNaN(numeroIngresado)==true || numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("Error. Intente nuevamente. Ingrese un número entre 0 y 9.");
		numeroIngresado = parseInt(numeroIngresado);
	}
	document.getElementById('txtIdNumero').value = numeroIngresado;

	
}//FIN DE LA FUNCIÓN