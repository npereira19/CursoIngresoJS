function mostrar()
{
// el switch SIEMPRE se puede transformar al IF, pero no siempre el IF puede ser transformado a SWITCH
	var mesDelAño 
	
//el switch esta pensado para ahorra lógica. No se ponen condiciones. 
	mesDelAño = document.getElementById('txtIdMes').value;
	switch(mesDelAño)
	{
		case "Enero": 
			alert("Que comiences bien el año.");
			break;//siempre agregar un break después de cada case para terminar la ejecución.
		case "Marzo":
			alert("A clases!");
			break;
		case "Julio":
			alert("Se vienen las clases!!");
			break;
		case "Diciembre":
			alert("Felices fiestas!");
			break;


	}
	



}//FIN DE LA FUNCIÓN