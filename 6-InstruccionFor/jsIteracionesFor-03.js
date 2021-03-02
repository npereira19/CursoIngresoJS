/*for 10 (a 5 personas nombre , sexo ,edad(validar que solo sean hombres no mayores a 12 y 
que las mujeres sean mayores de edad), altura(rangos que quiera))
*/

/*function mostrar()
{

	var contadorDeEntradas;
	var nombreIngresado;
	var sexoIngresado; 
	var edadIngresada;
	var alturaIngresada;


	for(contadorDeEntradas =0;contadorDeEntradas <5; contadorDeEntradas++)
	{	
		nombreIngresado = prompt("Ingrese el nombre.","");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error. Ingrese el nombre nuevamente.");
		}

		sexoIngresado = prompt("Ingrese el sexo: F o M.","");
		while(isNaN(sexoIngresado) == false || sexoIngresado != "F" && sexoIngresado != "M")
		{
			sexoIngresado = prompt("Error. Ingrese el sexo nuevamente.");
		}

		edadIngresada = prompt("Ingrese la edad.","");
		edadIngresada = parseFloat(edadIngresada);
		while(isNaN(edadIngresada) == true || (sexoIngresado != "F" && edadIngresada >12) || (sexoIngresado != "M" && edadIngresada <18))
		{
			edadIngresada = prompt("Error. Ingrese la edad nuevamente.");
			edadIngresada = parseFloat(edadIngresada);
		}

		alturaIngresada = prompt("Ingrese la altura (en metros).","");
		alturaIngresada = parseFloat(alturaIngresada);
		while(isNaN(alturaIngresada) == true || alturaIngresada <1.00 || alturaIngresada >2.10)
		{
			alturaIngresada = prompt("Error. Ingrese la altura nuevamente.");
			alturaIngresada = parseFloat(alturaIngresada);
		}
	}
}
*/

/*Pereira Nicolás.
For 11 (a 5 personas nombre , sexo ,edad(validar que solo sean hombres no mayores a 12 y que las mujeres sean ADOLESCENTES), 
altura(rangos que quiera)) ... informar el sexo y nombre de la persona mas alta
*/

/*function mostrar()
{

	var contadorDeEntradas;
	var nombreIngresado;
	var sexoIngresado; 
	var edadIngresada;
	var alturaIngresada;
	var personaMasAlta;
	var sexoPersonaMasAlta;
	var nombrePersonaMasAlta;



	for(contadorDeEntradas =0;contadorDeEntradas <5; contadorDeEntradas++)
	{	
		nombreIngresado = prompt("Ingrese el nombre.","");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error. Ingrese el nombre nuevamente.");
		}

		sexoIngresado = prompt("Ingrese el sexo: F o M.","");
		while(isNaN(sexoIngresado) == false || sexoIngresado != "F" && sexoIngresado != "M")
		{
			sexoIngresado = prompt("Error. Ingrese el sexo nuevamente.");
		}

		edadIngresada = prompt("Ingrese la edad.","");
		edadIngresada = parseFloat(edadIngresada);
		while(isNaN(edadIngresada) == true || (sexoIngresado == "M" && edadIngresada >12) || (sexoIngresado == "F" && edadIngresada <13 || edadIngresada >18))
		{
			edadIngresada = prompt("Error. Ingrese la edad nuevamente.");
			edadIngresada = parseFloat(edadIngresada);
		}

		alturaIngresada = prompt("Ingrese la altura (en metros).","");
		alturaIngresada = parseFloat(alturaIngresada);
		while(isNaN(alturaIngresada) == true || alturaIngresada <1.00 || alturaIngresada >2.10)
		{
			alturaIngresada = prompt("Error. Ingrese la altura nuevamente.");
			alturaIngresada = parseFloat(alturaIngresada);
		}

		if(contadorDeEntradas == 0 || personaMasAlta <alturaIngresada)
		{
			personaMasAlta = alturaIngresada;
			nombrePersonaMasAlta = nombreIngresado;
			sexoPersonaMasAlta = sexoIngresado;
		}
		else
		{
			if(personaMasAlta <alturaIngresada)
			{
				personaMasAlta = alturaIngresada;
				nombrePersonaMasAlta = nombreIngresado;
				sexoPersonaMasAlta = sexoIngresado;
			}
		}
	}

	console.log("La persona más alta es "+sexoPersonaMasAlta+" y se llama "+nombrePersonaMasAlta);
} */




/* Pereira Nicolás.
For 12 (a 5 personas nombre , sexo ,edad(validar que solo sean hombres no mayores a 12 y que las mujeres sean ADOLESCENTES), 
altura(rangos que quiera)) ... informar el sexo y nombre de la persona mas alta. de las mujeres el nombre de la mas joven ,
--de los hombre el nombre del mas bajito , ... solo si los hay


function mostrar()
{	

	var contadorDeEntradas;
	var nombreIngresado;
	var sexoIngresado; 
	var edadIngresada;
	var alturaIngresada;
	var personaMasAlta;
	var sexoPersonaMasAlta;
	var nombrePersonaMasAlta;
	var banderaDeLaEdadMujeres;
	var edadDeLaMujerMasJoven;
	var nombreDeLaMujerMasJoven;
	var banderaDeLaAlturaMasBajaHombres;
	var alturaDelHombreMasBajo;
	var nombreDelHombreMasBajo;



	banderaDeLaEdadMujeres = 0;
	banderaDeLaAlturaMasBajaHombres = 0;


	for(contadorDeEntradas =0;contadorDeEntradas <5; contadorDeEntradas++)
	{	
		nombreIngresado = prompt("Ingrese el nombre.","");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error. Ingrese el nombre nuevamente.");
		}

		sexoIngresado = prompt("Ingrese el sexo: F o M.","");
		while(isNaN(sexoIngresado) == false || sexoIngresado != "F" && sexoIngresado != "M")
		{
			sexoIngresado = prompt("Error. Ingrese el sexo nuevamente.");
		}

		edadIngresada = prompt("Ingrese la edad.","");
		edadIngresada = parseFloat(edadIngresada);
		while(isNaN(edadIngresada) == true || (sexoIngresado == "M" && edadIngresada >12) || (sexoIngresado == "F" && edadIngresada <13 || edadIngresada >18))
		{
			edadIngresada = prompt("Error. Ingrese la edad nuevamente.");
			edadIngresada = parseFloat(edadIngresada);
		}

		alturaIngresada = prompt("Ingrese la altura (en metros).","");
		alturaIngresada = parseFloat(alturaIngresada);
		while(isNaN(alturaIngresada) == true || alturaIngresada <1.00 || alturaIngresada >2.10)
		{
			alturaIngresada = prompt("Error. Ingrese la altura nuevamente.");
			alturaIngresada = parseFloat(alturaIngresada);
		}

		if(contadorDeEntradas == 0 || personaMasAlta <alturaIngresada)
		{
			personaMasAlta = alturaIngresada;
			nombrePersonaMasAlta = nombreIngresado;
			sexoPersonaMasAlta = sexoIngresado;
		}

		switch(sexoIngresado)
		{
			case "M":
				if(banderaDeLaAlturaMasBajaHombres == 0 || alturaDelHombreMasBajo >alturaIngresada)
				{
					nombreDelHombreMasBajo = nombreIngresado;
					alturaDelHombreMasBajo = alturaIngresada;
					banderaDeLaAlturaMasBajaHombres = 1;
				}
				break;
			case "F":
				if(banderaDeLaEdadMujeres == 0 || edadDeLaMujerMasJoven >edadIngresada)
				{
					edadDeLaMujerMasJoven = edadIngresada;
					nombreDeLaMujerMasJoven = nombreIngresado;
					banderaDeLaEdadMujeres = 1;
				}
				break;
		}
	}

	
	console.log("La persona más alta es "+sexoPersonaMasAlta+" y se llama "+nombrePersonaMasAlta);
	
	if(banderaDeLaEdadMujeres != 0)
	{
		console.log("El nombre de la mujer más joven es: "+nombreDeLaMujerMasJoven);
	}
	
	if(banderaDeLaAlturaMasBajaHombres != 0)
	{
		console.log("El nombre del hombre más bajo es: "+nombreDelHombreMasBajo);
	}
}*/



/* Pereira Nicolás. 
For 13 (a 5 personas nombre , sexo ,edad(validar que solo sean hombres no mayores a 12 y 
que las mujeres sean ADOLESCENTES), 
altura(rangos que quiera)) ... informar el sexo y nombre de la persona mas alta. de las mujeres el nombre de la mas joven ,
--de los hombre el nombre del mas bajito , ... solo si los hay. El promedio de edad entre los hombre ,el promedio de edad entre las mujeres, 
la cantidad de personas que miden mas de 1,60 metros, 
y el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts 

*/

function mostrar()
{	

	var contadorDeEntradas;
	var nombreIngresado;
	var sexoIngresado; 
	var edadIngresada;
	var alturaIngresada;
	var personaMasAlta;
	var sexoPersonaMasAlta;
	var nombrePersonaMasAlta;
	var contadorDeMujeres;
	var edadDeLaMujerMasJoven;
	var nombreDeLaMujerMasJoven;
	var contadorDeHombres;
	var alturaDelHombreMasBajo;
	var nombreDelHombreMasBajo;
	var acumuladorDeEdadHombres;
	var acumuladorDeEdadMujeres;
	var promedioDeEdadHombres;
	var promedioEdadMujeres;
	var personasMasAltasUnoSesenta;
	var mujeresMasAltasUnoSesenta;
	var porcentajeMujeresMasAltasUnoSesenta;


	contadorDeMujeres = 0;
	contadorDeHombres = 0;
	acumuladorDeEdadHombres = 0;
	acumuladorDeEdadMujeres = 0;
	personasMasAltasUnoSesenta = 0;
	mujeresMasAltasUnoSesenta = 0;


	for(contadorDeEntradas =0;contadorDeEntradas <5; contadorDeEntradas++)
	{	
		nombreIngresado = prompt("Ingrese el nombre.","");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error. Ingrese el nombre nuevamente.");
		}

		sexoIngresado = prompt("Ingrese el sexo: F o M.","");
		while(isNaN(sexoIngresado) == false || sexoIngresado != "F" && sexoIngresado != "M")
		{
			sexoIngresado = prompt("Error. Ingrese el sexo nuevamente.");
		}

		edadIngresada = prompt("Ingrese la edad.","");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) == true || (sexoIngresado == "M" && edadIngresada >12) || (sexoIngresado == "F" && edadIngresada <13 || edadIngresada >18))
		{
			edadIngresada = prompt("Error. Ingrese la edad nuevamente.");
			edadIngresada = parseInt(edadIngresada);
		}

		alturaIngresada = prompt("Ingrese la altura (en centímetros).","");
		alturaIngresada = parseInt(alturaIngresada);
		while(isNaN(alturaIngresada) == true || alturaIngresada <100 || alturaIngresada >210)
		{
			alturaIngresada = prompt("Error. Ingrese la altura nuevamente.");
			alturaIngresada = parseInt(alturaIngresada);
		}

		if(contadorDeEntradas == 0 || personaMasAlta <alturaIngresada)
		{
			personaMasAlta = alturaIngresada;
			nombrePersonaMasAlta = nombreIngresado;
			sexoPersonaMasAlta = sexoIngresado;
		}

		if(alturaIngresada > 160)
		{
			personasMasAltasUnoSesenta++;
			if(sexoIngresado == "F")
			{
				mujeresMasAltasUnoSesenta++;
			}
		}

		switch(sexoIngresado)
		{
			case "M":
				if(contadorDeHombres == 0 || alturaDelHombreMasBajo >alturaIngresada)
				{
					nombreDelHombreMasBajo = nombreIngresado;
					alturaDelHombreMasBajo = alturaIngresada;
				}
				contadorDeHombres++;
				acumuladorDeEdadHombres = acumuladorDeEdadHombres + edadIngresada;
				break;
			case "F":
				if(contadorDeMujeres == 0 || edadDeLaMujerMasJoven >edadIngresada)
				{
					edadDeLaMujerMasJoven = edadIngresada;
					nombreDeLaMujerMasJoven = nombreIngresado;
				}
				contadorDeMujeres++;
				acumuladorDeEdadMujeres = acumuladorDeEdadMujeres + edadIngresada;
				break;
		}
	}
	


	promedioDeEdadHombres = acumuladorDeEdadHombres / contadorDeHombres;

	promedioEdadMujeres = acumuladorDeEdadMujeres / contadorDeMujeres;
	
	porcentajeMujeresMasAltasUnoSesenta = mujeresMasAltasUnoSesenta / personasMasAltasUnoSesenta *100;



	console.log("La persona más alta es "+sexoPersonaMasAlta+" y se llama "+nombrePersonaMasAlta);
	
	if(contadorDeMujeres != 0)
	{
		console.log("El nombre de la mujer más joven es: "+nombreDeLaMujerMasJoven);
		console.log("El promedio de edad de las mujeres es de "+promedioEdadMujeres+" años.");
		if(mujeresMasAltasUnoSesenta != 0)
		{
			console.log("el porcentaje de mujeres sobre el total de personas que superan el 1.60 es "+porcentajeMujeresMasAltasUnoSesenta+"%.");
		}
	}
	
	if(contadorDeHombres != 0)
	{
		console.log("El nombre del hombre más bajo es: "+nombreDelHombreMasBajo);
		console.log("El promedio de edad de los hombres es de "+promedioDeEdadHombres+" años.");
	}

	
	





}
