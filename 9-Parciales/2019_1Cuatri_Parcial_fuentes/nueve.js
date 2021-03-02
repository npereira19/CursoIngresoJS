function mostrar()
{
	var paisIngresado;
	var cantidadDehabitantes;
	var temperaturaMinima;
	var temperaturasPares;
	var paisConMenosHabitantes;
	var numeroDelPaisConMenosHabitantes;
	var flagCantidadHabitantes;
	var paisesConMasDeCuarenta;
	var promedioDeHabitantes;
	var contador;
	var acumulador;
	var temperaturaMinimaTotal;
	var flagTemperaturaMinima;
	var paisConTemperaturaMinima;
	var respuesta;


	respuesta = "si";
	flagCantidadHabitantes = 0;
	temperaturasPares = 0;
	paisesConMasDeCuarenta = 0;
	contador = 0;
	flagTemperaturaMinima = 0;
	acumulador = 0;



	while(respuesta == "si")
	{
		contador++;
		paisIngresado = prompt("Ingrese el nombre del país.","");
		
		cantidadDehabitantes = prompt("Ingrese la cantidad de habitantes (en millones).","");
		cantidadDehabitantes = parseInt(cantidadDehabitantes);
		while(cantidadDehabitantes < 1 || cantidadDehabitantes>7000)
		{
			cantidadDehabitantes = prompt("Error. Ingrese una cantidad válida.","");
			cantidadDehabitantes = parseInt(cantidadDehabitantes);
		}
		
		
		temperaturaMinima = prompt("Ingrese la temperatura minima que se registra en el territorio.","");
		temperaturaMinima = parseInt(temperaturaMinima);
		while(temperaturaMinima<-50 || temperaturaMinima>50)
		{
			temperaturaMinima = prompt("Error. Ingrese una temperatura válida.","");
			temperaturaMinima = parseInt(temperaturaMinima);
		}

		
		//a) La cantidad de temperaturas pares
		if(temperaturaMinima%2 == 0)
		{
			temperaturasPares++;
		}

		//b) El nombre del pais con menos habitantes. JUNTAR ESTA FLAG CON LA OTRA
		if(flagCantidadHabitantes == 0)
		{
			flagCantidadHabitantes = 1;
			paisConMenosHabitantes = paisIngresado;
			numeroDelPaisConMenosHabitantes = cantidadDehabitantes;
		}
		else
		{
			if(cantidadDehabitantes<numeroDelPaisConMenosHabitantes)
			{
				numeroDelPaisConMenosHabitantes = cantidadDehabitantes;
				paisConMenosHabitantes = paisIngresado;
			}
		}

		//c) la cantidad de paises que superan los 40 grados.
		if(temperaturaMinima>40)
		{
			paisesConMasDeCuarenta++;
		}

		//f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
		if(flagTemperaturaMinima == 0)
		{
			flagTemperaturaMinima = 1;
			temperaturaMinimaTotal = temperaturaMinima;
			paisConTemperaturaMinima = paisIngresado;
		}
		else
		{
			if(temperaturaMinima<temperaturaMinimaTotal)
			{
				temperaturaMinimaTotal = temperaturaMinima;
				paisConTemperaturaMinima = paisIngresado;
			}
		}


		acumulador = acumulador+cantidadDehabitantes;

		respuesta = prompt("¿Desea realizar otra entrada de datos?","");
	}
	//d) el promedio de habitantes entre los paises
	promedioDeHabitantes = acumulador/contador;

	document.write("<br> La cantidad de temperaturas pares es: "+temperaturasPares); 
	document.write("<br> El país con menos habitantes es: "+paisConMenosHabitantes);
	document.write("<br> La cantidad de paises que superan los 40 grados de temperatura mínima es: "+paisesConMasDeCuarenta);
	document.write("<br> El promedio de habitantes entre los países ingresados es (en millones): "+promedioDeHabitantes);
	document.write(	"<br> La temperatura menor ingresada fue: "+temperaturaMinimaTotal+" y se registró en "+paisConTemperaturaMinima);

}
