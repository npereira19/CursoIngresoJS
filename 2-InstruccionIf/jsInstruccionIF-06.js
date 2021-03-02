function mostrar()
{//2 usos del cpu como máximo.
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);


	if(edad<13)
	{
		alert("La persona es un niño.");
	}
	else
	{
		if(edad>17)// mejor usar edad>17 para simplificar los códigos utilizados.
		{
			alert("La persona es mayor de edad.");
		}
		else
		{
			alert("La persona es un adolescente.");
		}
	} //4 usos del cpu como máximo. 

	/* Manera larga
	if(edad<13)
	{
		alert("La persona es un niño.");
	}
	if(edad>12 && edad<18)
	{
		alert("La persona es adolescente.");
	}
	if(edad>17)
	{
		alert("La persona es mayor de edad.");
	}*/

}//FIN DE LA FUNCIÓN