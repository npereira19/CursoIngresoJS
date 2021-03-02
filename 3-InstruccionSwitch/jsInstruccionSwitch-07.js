function mostrar()
{
	var destinoIngresado;

	destinoIngresado = document.getElementById('txtIdDestino').value;
	
	switch(destinoIngresado)
	{

		case "Bariloche":
			alert("Se encuentra al Oeste del país.");
			break;
		case "Cataratas":
			alert("Se encuentra al Norte del país.");
			break;
		case "Mar del plata":
			alert("Se encuentra al Este del país.");
			break;
		case "Ushuaia":
			alert("Se encuentra al Sur del país.");
			break;
	}

}//FIN DE LA FUNCIÓN