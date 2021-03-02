function mostrar()
{
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	/*if(edad<18)
	{
		if(edad>12)
		{
			alert("La persona es adolescente.")	
		}
	}*/

	if(edad<18 && edad>12)
	{
		alert("La persona es adolescente."); 
	}
}//FIN DE LA FUNCIÓN