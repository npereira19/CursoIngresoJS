/*
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/



function mostrar()
{
	

	var respuesta;
	var nombreIngresado;
	var nacionalidadIngresada;
	var edadIngresada;
	var	sexoIngresado;
	var estadoCivilIngresado;
	var	temperaturaCorporalIngresada;
	var banderaDeLaTemperaturaMasAlta;
	var temperaturaMasAlta;
	var nacionalidadDeLaTemperaturaMasAlta;
	var contadorMayoresDeEdadSolteros;
	var contadorMujeresSolteras;
	var contadorMujeresViudas;
	var	contadorTerceraEdadConFiebre;
	var acumuladorEdadMujeresCasadas;
	var contadorMujeresCasadas;
	var promedioEdadMujeresCasadas;






	respuesta = "si";
	banderaDeLaTemperaturaMasAlta = 0;
	contadorMayoresDeEdadSolteros = 0;
	contadorMujeresSolteras = 0;
	contadorMujeresViudas = 0;
	contadorTerceraEdadConFiebre = 0;
	acumuladorEdadMujeresCasadas = 0;
	contadorMujeresCasadas = 0;





	while(respuesta == "si")
	{

		nombreIngresado = prompt("Ingrese el nombre del pasajero","");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error. Ingrese el nombre del pasajero.","");
		}

		nacionalidadIngresada = prompt("Ingrese la nacionalidad del pasajero","");
		while(isNaN(nacionalidadIngresada) == false)
		{
			nacionalidadIngresada = prompt("Error. Ingrese la nacionalidad del pasajero.","");
		}

		edadIngresada = prompt("Ingrese la edad del pasajero.","");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) == true || edadIngresada <1 || edadIngresada >99)
		{
			edadIngresada = prompt("Error. Ingrese la edad del pasajero nuevamente.","");
			edadIngresada = parseInt(edadIngresada);
		}

		sexoIngresado = prompt("Ingrese el sexo del pasajero: F o M","");
		while(isNaN(sexoIngresado) == false || sexoIngresado != "F" && sexoIngresado != "M")
		{
			sexoIngresado = prompt("Error. Ingrese el sexo del pasajero nuevamente: F o M.","");
		}

		estadoCivilIngresado = prompt("Ingrese el estado civil del pasajero: soltero, casado o viudo.","");
		while(isNaN(estadoCivilIngresado) == false || estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo")
		{
			estadoCivilIngresado = prompt("Error. Ingrese el estado civil del pasajero nuevamente: soltero, casado o viudo.","");
		}

		temperaturaCorporalIngresada = prompt("Ingrese la temperatura corporal del pasajero.","");
		temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		while(isNaN(temperaturaCorporalIngresada) == true || temperaturaCorporalIngresada <35 || temperaturaCorporalIngresada >42)
		{
			temperaturaCorporalIngresada = prompt("Error. Ingrese la temperatura corporal del pasajero nuevamente.","");
			temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		}


		switch(estadoCivilIngresado)
		{

			case "soltero":
				if(edadIngresada >17)
				{
					contadorMayoresDeEdadSolteros++;
				}
				if(sexoIngresado == "F")
				{
					contadorMujeresSolteras++;
				}
				
				break;
			case "casado":
				acumuladorEdadMujeresCasadas = acumuladorEdadMujeresCasadas + edadIngresada;
				contadorMujeresCasadas++;
				break;
			case "viudo":
				if(sexoIngresado == "F")
				{
					contadorMujeresViudas++;
				}
				break;

		}


		if(banderaDeLaTemperaturaMasAlta == 0 || temperaturaMasAlta <temperaturaCorporalIngresada)
		{
			temperaturaMasAlta = temperaturaCorporalIngresada;
			nacionalidadDeLaTemperaturaMasAlta = nacionalidadIngresada;
			banderaDeLaTemperaturaMasAlta = 1;
		}

		if(edadIngresada >60 && temperaturaCorporalIngresada >38)
		{
			contadorTerceraEdadConFiebre++;
		}
	}
	

	console.log("La nacionalidad de la persona con mayor temperatura corporal es: "+nacionalidadDeLaTemperaturaMasAlta);

	if(contadorMayoresDeEdadSolteros != 0)
	{
		console.log("La cantidad de personas mayores de edad solteras es: "+contadorMayoresDeEdadSolteros);
	}

	if(contadorMujeresSolteras != 0)
	{
		console.log("La cantidad de mujeres solteras es: "+contadorMujeresSolteras);
	}

	if(contadorMujeresViudas != 0)
	{
		console.log("La cantidad de mujeres viudas es: "+contadorMujeresViudas);
	}

	if(contadorTerceraEdadConFiebre != 0)
	{
		console.log("La cantidad de personas de la tercera edad es: "+contadorTerceraEdadConFiebre);	
	}

	if(contadorMujeresCasadas != 0)
	{
		promedioEdadMujeresCasadas = acumuladorEdadMujeresCasadas / contadorMujeresCasadas;
		console.log ("el promedio de edad de mujeres casadas es: "+promedioEdadMujeresCasadas+" años.");
	}

	/*
	Bienvenidos.
	En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
	a) la Nacionalidad de la persona con mas temperatura.
	b) Cuantos mayores de edad( más de 17) estan solteros
	c) La cantidad de Mujeres que hay solteras o viudas.
	d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	e) El promedio de edad entre las mujeres casadas.
	*/
}
