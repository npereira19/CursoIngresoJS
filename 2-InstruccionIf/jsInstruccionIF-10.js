function mostrar()
{
	var notaExamen;

	notaExamen = Math.floor(Math.random() * 10) + 1;//el math floor hace que los numeros sean enteros y no den con coma. El +1 es para arrancar desde 1 
	notaExamen = parseInt(notaExamen);

	console.log(notaExamen);
	if (notaExamen>8)
	{
		alert(notaExamen+", excelente.");
	}
	else
	{
		if(notaExamen>3)
		{
			alert(notaExamen+", aprobó.");
		}
		else
		{
			alert(notaExamen+", vamos, la próxima se puede.");
		}
	}

}//FIN DE LA FUNCIÓN