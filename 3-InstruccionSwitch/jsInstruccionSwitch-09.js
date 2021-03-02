function mostrar()
{
	var estacionIngresada; 
	var destinoIngresado;
	var precioEstadia;
	var descuentoPorcentaje;
	var aumentoPorcentaje;
	var precioFinal;

	estacionIngresada = document.getElementById('txtIdEstacion').value;
	destinoIngresado = document.getElementById('txtIdDestino').value;
	precioEstadia = 15000;
	aumentoPorcentaje = 0;
	descuentoPorcentaje = 0;

	switch(estacionIngresada)
	{
		case "Invierno":
			if(destinoIngresado == "Bariloche")
			{
				aumentoPorcentaje = 20;
			}
			else
			{
				if(destinoIngresado == "Mar del plata")
				{
					descuentoPorcentaje = 20;
				}
				else
				{
					descuentoPorcentaje = 10;
				}
			}
			break; 
		case "Verano":
			if(destinoIngresado == "Bariloche")
			{
				descuentoPorcentaje = 20;
			}
			else
			{
				if(destinoIngresado == "Mar del plata")
				{
					aumentoPorcentaje = 20;
				}
				else
				{
					aumentoPorcentaje = 10;
				}
			}
			break;
		default:
				if(destinoIngresado == "Cordoba")
				{
					aumentoPorcentaje = 0;
				}
				else
				{
					aumentoPorcentaje = 10;
				}
			break;

	}
	
	if (aumentoPorcentaje != 0)
	{
		precioFinal = precioEstadia + (precioEstadia*aumentoPorcentaje/100);
		alert("El precio final es de $"+precioFinal);
	}
	else
	{
		if(descuentoPorcentaje != 0)
		{
			precioFinal = precioEstadia - (precioEstadia*descuentoPorcentaje/100);
			alert ("El precio final es de $"+precioFinal);
		}
		else
		{
			alert("El precio final es de $"+precioEstadia);
		}
	}


}//FIN DE LA FUNCIÓN