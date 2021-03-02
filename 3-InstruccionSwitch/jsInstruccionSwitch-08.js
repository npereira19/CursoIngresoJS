function mostrar()
{
	var destinoIngresado;
	 
	destinoIngresado = document.getElementById('txtIdDestino').value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Hace FRIO.");
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("Hace CALOR.");
			break;

	}

}//FIN DE LA FUNCIÓN