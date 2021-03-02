/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadCeros;	
	var	cantidadNegativos;
	var cantidadNumerosPares;
	var	promedioPositivos;
	var promedioNegativos;
	var	diferencia;
	var cantidadDeEntradas;

	respuesta="si";
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadPositivos = 0;
	cantidadCeros = 0;
	cantidadNegativos = 0;
	cantidadNumerosPares = 0;
	cantidadDeEntradas = 0;


	while(respuesta=="si")
	{
		cantidadDeEntradas++;
		numeroIngresado = prompt("Ingrese el numero #"+cantidadDeEntradas);
		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("Error. Ingrese el NUMERO #"+cantidadDeEntradas);
		}
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos+numeroIngresado;
			cantidadPositivos++;
		}
		else
		{
			if(numeroIngresado == 0)
			{
				cantidadCeros++;
			}
			else
			{
				sumaNegativos = sumaNegativos+numeroIngresado;
				cantidadNegativos++;
			}		
		}

		if(numeroIngresado%2 == 0)
		{
			cantidadNumerosPares++;
		}

		respuesta=prompt("desea continuar?");
	}

	promedioPositivos = sumaPositivos/cantidadPositivos;
	promedioNegativos = sumaNegativos/cantidadNegativos;
	diferencia = sumaPositivos-sumaNegativos;

	document.write("<br> La suma de negativos es : "+sumaNegativos);
	document.write("<br> La suma de los positivos es: "+sumaPositivos);
	document.write("<br> La cantidad de positivos es: "+cantidadPositivos);
	document.write("<br> La cantidad de ceros es: "+cantidadCeros);
	document.write("<br> La cantidad de negativos es: "+cantidadNegativos);
	document.write("<br> La cantidad de numeros pares es: "+cantidadNumerosPares);
	document.write("<br> El promedio de los numeros positivos es: "+promedioPositivos);
	document.write("<br> El promedio de los numeros negativos es: "+promedioNegativos);
	document.write("<br> La diferencia entre numeros positivos y negativos es: "+diferencia);



}