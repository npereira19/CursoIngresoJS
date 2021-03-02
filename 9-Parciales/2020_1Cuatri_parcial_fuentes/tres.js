/*
Enunciado parcial 2020, ejercicio 3. Pereira Nicolás CORREGIDO.
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/


function mostrar()
{

	var respuesta;
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaCorporalIngresada;
	var banderaDelaTemperaturaMasAlta;
	var temperaturaCorporalMasAlta;
	var nombreDePersonaConTemperaturaMasAlta;
	var contadorPersonasMayoresViudas;
	var contadorHombresSolteros;
	var contadorHombresViudos;
	var personasMayoresConFiebre;
	var acumuladorEdadHombresSolteros;
	var promedioedadHombresSolteros;




	respuesta = "si";
	banderaDelaTemperaturaMasAlta = 0;
	contadorPersonasMayoresViudas = 0;
	contadorHombresSolteros = 0;
	contadorHombresViudos = 0;
	personasMayoresConFiebre = 0;
	acumuladorEdadHombresSolteros = 0;












	while(respuesta == "si")
	{

		nombreIngresado = prompt("Ingrese el nombre del pasajero.","");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error. Ingrese el nombre del pasajero nuevamente.","");
		}

		edadIngresada = prompt("Ingrese la edad del pasajero.","");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) == true || edadIngresada <1  || edadIngresada >99)
		{
			edadIngresada = prompt("Error. Ingrese la edad del pasajero nuevamente.","");
			edadIngresada = parseInt(edadIngresada);
		}

		sexoIngresado = prompt("Ingrese el sexo del pasajero: F o M.","");
		while(isNaN(sexoIngresado) == false || sexoIngresado != "F" && sexoIngresado != "M")
		{
			sexoIngresado = prompt("Error. Ingrese el sexo del pasajero nuevamente: F o M.","");
		}

		estadoCivilIngresado = prompt("Ingrese el estado civil del pasajero: soltero, casado o viudo.","");
		while(isNaN(estadoCivilIngresado) == false || estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo")
		{
			estadoCivilIngresado = prompt("Error. Ingrese  el estado civil del pasajero nuevamente: soltero, casado o viudo.","");
		}

		temperaturaCorporalIngresada = prompt("Ingrese la temperatura corporal del pasajero.","");
		temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		while(isNaN(temperaturaCorporalIngresada) == true || temperaturaCorporalIngresada <35  || temperaturaCorporalIngresada >42)
		{
			temperaturaCorporalIngresada = prompt("Error. Ingrese la temperatura corporal del pasajero nuevamente.","");
			temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		}


		switch(estadoCivilIngresado)
		{
			case "soltero":
				if(sexoIngresado == "M")
				{
					contadorHombresSolteros++;
					acumuladorEdadHombresSolteros = acumuladorEdadHombresSolteros + edadIngresada;
				}
				break;
			case "casado":

				break;
			case "viudo":
				if(sexoIngresado >17)
				{
					contadorPersonasMayoresViudas++;
				}
				if(sexoIngresado == "M")
				{
					contadorHombresViudos++;
				}

				break;
		}


		if(banderaDelaTemperaturaMasAlta == 0 || temperaturaCorporalMasAlta <temperaturaCorporalIngresada)
		{
			temperaturaCorporalMasAlta = temperaturaCorporalIngresada;
			nombreDePersonaConTemperaturaMasAlta = nombreIngresado;
			banderaDelaTemperaturaMasAlta = 1;
		}

		if(edadIngresada >60 && temperaturaCorporalIngresada >38)
		{
			personasMayoresConFiebre++;
		}


		respuesta = prompt("¿Desea ingresar los datos de otro pasajero?","");
	}

	console.log("La persona con la temperatura más alta es: "+nombreDePersonaConTemperaturaMasAlta);

	if(contadorPersonasMayoresViudas != 0)
	{
		console.log("la cantidad de personas mayores de edad que estan viudas son: "+contadorPersonasMayoresViudas);
	}

	if(contadorHombresSolteros != 0)
	{
		console.log("la cantidad de hombres solteros es: "+contadorHombresSolteros);
		promedioedadHombresSolteros = acumuladorEdadHombresSolteros / contadorHombresSolteros;
		console.log("El promedio de edad de los hombres solteros es: "+promedioedadHombresSolteros+" años.");
	}
	if(contadorHombresViudos != 0)
	{
		console.log("La cantidad de hombres viudos es: "+contadorHombresViudos);
	}
	if(personasMayoresConFiebre != 0)
	{
		console.log("La cantidad de personas de la tercera edad con fiebre son: "+personasMayoresConFiebre);
	}




	/*
	Enunciado parcial 2020, ejercicio 3. Pereira Nicolás CORREGIDO.
	Bienvenidos.
	En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
	a) El nombre de la persona con mas temperatura.
	b) Cuantos mayores de edad estan viudos
	c) La cantidad de hombres que hay solteros o viudos.
	d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	e) El promedio de edad entre los hombres solteros.
	*/








	
}
