/*
9: Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
/*function mostrar()
{	
	var flagPrimerNumero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var contador;
	

	flagPrimerNumero=0;
	respuesta='si';
	contador = 0;

	while(respuesta=="si")
	{
		contador++;
		numeroIngresado = prompt("Ingrese el número #"+contador);
		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt ("Error. Ingrese el NUMERO #"+contador);
		}
		numeroIngresado = parseInt(numeroIngresado);
		if(flagPrimerNumero == 0)//el flag funciona como indicador de algo. En este caso, cual será el primer numero del cual se tomaran las referencias para las siguientes funciones
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			flagPrimerNumero = 1;
		}
		else
		{	
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}	
						
			if(numeroIngresado < numeroMinimo) 
			{
				numeroMinimo = numeroIngresado;
			}
		}

		respuesta = prompt("Desea continuar?");
	}

	document.getElementById('txtIdMaximo').value = numeroMaximo;
	document.getElementById('txtIdMinimo').value = numeroMinimo;
}*///FIN DE LA FUNCIÓN

function mostrar()
{
	var flagPrimeraPersona;
	var personaMenor;
	var edadMenor;
	var personaMayor;
	var edadMayor;
	var nombreIngresado;
	var edadIngresada;
	var respuesta;
	
	
	respuesta = "Si";
	flagPrimeraPersona = 0;

	while(respuesta == "Si")
	{		
		nombreIngresado = prompt("Ingrese su nombre.","");

		edadIngresada = prompt("Ingrese su edad.","");
		while(isNaN(edadIngresada) == true)
		{
			edadIngresada = prompt("Error. Ingrese su edad.","");
		}
		edadIngresada = parseInt(edadIngresada);
		
		
		if(flagPrimeraPersona == 0)
		{
			flagPrimeraPersona = 1;
			personaMayor = nombreIngresado;
			personaMenor = nombreIngresado;
			edadMayor = edadIngresada;
			edadMenor = edadIngresada;
		}
		else
		{
			if(edadIngresada<edadMenor)
			{
				edadMenor = edadIngresada;
				personaMenor = nombreIngresado;
			}
			if(edadIngresada>edadMayor)
			{
				edadMayor = edadIngresada;
				personaMayor = nombreIngresado;
			}
		}

	respuesta = prompt("¿Desea realizar otra entrada de datos?","");
	}



	document.getElementById('txtIdMaximo').value = personaMayor;
	document.getElementById('txtIdMinimo').value = personaMenor;




}










