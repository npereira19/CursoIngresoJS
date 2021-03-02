function mostrar()
{
	var numeroIngresado;
	var contador;
	var contadorDivisores;


	contadorDivisores = 0;
	numeroIngresado = prompt("Ingrese un numero a verificar.");

	//for(contador = numeroIngresado-1; contador>1; contador--) 
	for(contador = 2; contador<(numeroIngresado/2);contador++) //para empezar a buscar los numero divisibles desde abajo. funciona mejor para reducir la cantidad de entradas en el for.
	{
		if(numeroIngresado%contador==0)
		{
			break;
		}
	}
	//if(contadorDivisores>0)
	//if(contador != 1)
	if(contador!=((numeroIngresado/2)-1))
	{
		console.log("No es primo");
	}
	else
	{
		console.log("Es primo");
	}



}//FIN DE LA FUNCIÓN