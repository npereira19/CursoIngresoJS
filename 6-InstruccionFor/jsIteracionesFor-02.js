/*For 9 bis( pedir 10 numeros , informar el mayor de los negativos y el menor de los pares).. solo si los hay
*/

function mostrar()
{
	var contadorNumero;
	var numeroIngresado;
	var banderaDelNegativo;
	var numeroNegativoMayor;
	var banderaDelParMenor;
	var numeroParMenor;

	banderaDelNegativo = 0;	
	banderaDelParMenor = 0;

	for(contadorNumero = 0; contadorNumero <10; contadorNumero++)
	{
		numeroIngresado = prompt("Ingrese 10 números.","");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("error. Ingrese 10 números.","");
			numeroIngresado = parseInt(numeroIngresado);
		}
		/*
			if(numeroIngresado  <0 && (banderaDelNegativo == 0 || numeroNegativoMayor <numeroIngresado))
			{
				numeroNegativoMayor = numeroIngresado;
				banderaDelNegativo = 1;
			}
		*/


		if(numeroIngresado  <0)
		{
			if(banderaDelNegativo == 0)
			{
				numeroNegativoMayor = numeroIngresado;
				banderaDelNegativo = 1;
			}
			else
			{
				if(numeroNegativoMayor <numeroIngresado)
				{
					numeroNegativoMayor = numeroIngresado;
				}	
			}
		}
		

		/*
		if(numeroIngresado%2 == 0 && banderaDelParMenor == 0 || numeroParMenor >numeroIngresado)
		{
			numeroParMenor = numeroIngresado;
			banderaDelParMenor = 1;
		}
		*/
		if(numeroIngresado%2 == 0)
		{
			if(banderaDelParMenor == 0)
			{
				numeroParMenor = numeroIngresado;
				banderaDelParMenor = 1;
			}
			else
			{
				if(numeroParMenor >numeroIngresado)
				{
					numeroParMenor = numeroIngresado;
				}
			}
		}
		

	}
	
	if(banderaDelParMenor !=0)
	{
		console.log("El numero par menor es: "+numeroParMenor);
	}
	
	if(banderaDelNegativo !=0)
	{
		console.log("El numero negativo mayor es: "+numeroNegativoMayor);
	}
	
}