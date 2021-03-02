function mostrar()
{
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad<13 || edad>17)// las "||" significan "o".
	{
		alert("La persona no es adolescente.");
	}
	/*if(!(edad<18 && edad>12))
	{
		alert("La persona NO es adolescente."); 
	}forma de negación del if. */
		
}//FIN DE LA FUNCIÓN adolescent