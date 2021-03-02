/*function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("Ingrese un numero hasta encontrar el correcto.","");
	numeroIngresado = parseInt(numeroIngresado)

	for(numeroIngresado;;numeroIngresado = prompt("Ingrese el numero hasta encontrar el correcto."))
	{
		console.log(numeroIngresado)
		if(numeroIngresado == 9)
		{
			break;
		}
	}
		

	/*while(numeroIngresado !=9)
	{
		numeroIngresado = prompt("ingrese un numero hasta encontrar el correcto.","")
	}

}//FIN DE LA FUNCIÓN*/
/*function mostrar()
{
	var numeroIngresado;


	for(numeroIngresado = prompt("Ingrese un numero hasta encontrar el correcto.");numeroIngresado!=9;numeroIngresado = prompt("Ingrese un numero hasta encontrar el correcto."))
	{
		console.log(numeroIngresado)

		if(numeroIngresado == 9)
		{
			break;
		}
	}
		

	/*while(numeroIngresado !=9)
	{
		numeroIngresado = prompt("ingrese un numero hasta encontrar el correcto.","")
	}

}*/

function mostrar()
{
	var numeroIngresado;
	var contador;



	for(contador = 0;;contador++)
	{
		numeroIngresado = prompt("Ingrese un numero hasta encontrar el correcto.");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado == 9)
		{
			break;
		}

		console.log(numeroIngresado)
	}
}
