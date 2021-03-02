function mostrar()
{
	
	var mesDelAño 
	mesDelAño = document.getElementById('txtIdMes').value;

	switch (mesDelAño)
	{
		case "Febrero":
			alert("tiene 28 días.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tienen 30 días.");
			break;
		default:
			alert("Tienen 31 días.");
			break;

	}
	



}//FIN DE LA FUNCIÓN