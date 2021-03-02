function mostrar()
{
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	/*if(edad<18)
	{
		alert("Es menor de edad.")
	}

	if(edad>17)
	{
		alert("Es mayor de edad.");
	}*/

	if(edad<18)
	{
		alert("Es menor de edad.")
	}
	else
	{
		alert("Es mayor de edad.")
	}
	//función que sirve para optimizar el rendimiento del microprocesador. En vez de realizar dos procesos por separado como arriba, se realiza uno solo. 

	



}//FIN DE LA FUNCIÓN