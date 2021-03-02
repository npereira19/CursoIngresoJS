function mostrar()
{
	//tomo el mes
	var mesDelAño 

	mesDelAño=document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{

		case "Julio":
			/*alert("Abrigate que hace frío.");
			break;*/ // en caso de que ambas lineas digan lo mismo (agosto u Julio) se pueden obviar estas lineas
		case "Agosto":
			alert("Abrigate que hace frío.");
			break; 
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frío, hace calor!");
			break;
		//default: es lo que se va a ejecutar si no es ninguno de los mencionados previamente.
		default:
			alert("Falta para el invierno.");
			break;



	}

		/*case "Julio":
		case "Agosto":
			alert("Abrigate que hace frío");
			break;
		*/
	




}//FIN DE LA FUNCIÓN