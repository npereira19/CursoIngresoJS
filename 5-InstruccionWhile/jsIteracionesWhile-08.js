/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var contadorNegativos;
	var flagDeNegativo;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta = "Si";
	flagDeNegativo = 0;

	while(respuesta == "Si")
	{
		contador++;
		numeroIngresado = prompt("Ingrese un numero.","");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado<0)
		{
			multiplicacionNegativos = multiplicacionNegativos*numeroIngresado;
			banderaDeNegativo = 1
		}
		else
		{
			sumaPositivos = sumaPositivos+numeroIngresado;
		}

		respuesta = prompt("Desea continuar?","");
	}
	if(banderaDeNegativo == 0)
	{
		multiplicacionNegativos = 0;
	}


	document.getElementById('txtIdSuma').value = sumaPositivos;
	document.getElementById('txtIdProducto').value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN