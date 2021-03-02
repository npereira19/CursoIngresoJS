/*Pereira Nicolás. 1 parcialito.
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.

*/


function mostrar()
{
	
	var contadorEntradas;
	var continenteIngresado;
	var paisIngresado;
	var cantidadDeHabitantesIngresado;
	var nivelDePobreza;
	var temperaturaMinimaIngresada;
	var contadorDeTemperaturasPares;
	var contadorDeTemperaturasImparesEuropa;
	var cantidadDePersonasDelPaisConMenosHabitantes;
	var nombreDelPaisConMenosHabitantes;
	var contadorPaisesMasDeCuarentaGrados;
	var contadorPaisesAmericaConMenosDeCero;
	var acumuladorTotalDeHabitantes;
	var promedioDeHabitantesTotal;
	var acumuladorDeHabitantesEnPaisesDeMasCuarenta;
	var promedioDeHabitantesMasCuarentaGrados;
	var temperaturaMinimaTotal;
	var paisTemperaturaMinimaTotal;
	var acumuladorHabitantesAmerica;
	var acumuladorHabitantesAsia;
	var acumuladorHabitantesEuropa;
	var acumuladorHabitantesAfrica;
	var acumuladorHabitantesOceania;




	contadorDeTemperaturasPares = 0;
	contadorDeTemperaturasImparesEuropa = 0;
	contadorPaisesMasDeCuarentaGrados = 0;
	contadorPaisesAmericaConMenosDeCero = 0;
	acumuladorTotalDeHabitantes = 0;
	acumuladorDeHabitantesEnPaisesDeMasCuarenta = 0;
	acumuladorHabitantesAmerica = 0;
	acumuladorHabitantesAsia = 0;
	acumuladorHabitantesEuropa = 0;
	acumuladorHabitantesAfrica = 0;
	acumuladorHabitantesOceania = 0;


	for(contadorEntradas = 0; contadorEntradas <5; contadorEntradas++)
	{
		continenteIngresado = prompt("Ingrese el continente donde se encuentra el país a registrar.","");
		while(isNaN(continenteIngresado)== false || continenteIngresado != "America" && continenteIngresado != "Asia" && continenteIngresado != "Europa" && continenteIngresado != "Africa" && continenteIngresado != "Oceania")
		{
			continenteIngresado = prompt("Error. Ingrese nuevamente el continente donde se encuentra el país a registrar.","");
		}

		paisIngresado = prompt("Ingrese el nombre del país.","");
		while(isNaN(paisIngresado)== false)
		{
			paisIngresado = prompt("Error. Ingrese nuevamente el nombre del país.","");
		}

		cantidadDeHabitantesIngresado = prompt("Ingrese la cantidad de habitantes (en millones).","");
		cantidadDeHabitantesIngresado = parseInt(cantidadDeHabitantesIngresado);
		while(isNaN(cantidadDeHabitantesIngresado)== true || cantidadDeHabitantesIngresado <1 || cantidadDeHabitantesIngresado >7000)
		{
			cantidadDeHabitantesIngresado = prompt("Error. Ingrese nuevamente la cantidad de habitantes (en millones).","");
			cantidadDeHabitantesIngresado = parseInt(cantidadDeHabitantesIngresado);
		}

		nivelDePobreza = prompt("Ingrese el nivel de pobreza del país a registrar: pobre, rico o muy rico.","");
		while(isNaN(nivelDePobreza)== false || (nivelDePobreza != "pobre" && nivelDePobreza != "rico" && nivelDePobreza != "muy rico") || ( nivelDePobreza== "pobre" && continenteIngresado == "Europa"))
		{
			nivelDePobreza = prompt("Error. Ingrese nuevamente el nivel de pobreza del país a registrar: pobre, rico o muy rico.","");
		}

		temperaturaMinimaIngresada = prompt("Ingrese la temperatura minima registrada.","");
		temperaturaMinimaIngresada = parseInt(temperaturaMinimaIngresada);
		while(isNaN(temperaturaMinimaIngresada)== true || temperaturaMinimaIngresada <-50 || temperaturaMinimaIngresada >50)
		{
			temperaturaMinimaIngresada = prompt("Error. Ingrese nuevamente la temperatura minima registrada.","");
			temperaturaMinimaIngresada = parseInt(temperaturaMinimaIngresada);
		}

		if(contadorEntradas == 0 || temperaturaMinimaTotal >temperaturaMinimaIngresada)
		{
			temperaturaMinimaTotal = temperaturaMinimaIngresada;
			paisTemperaturaMinimaTotal = paisIngresado;
		}

		if(temperaturaMinimaIngresada%2 == 0)
		{
			contadorDeTemperaturasPares++;
		}
		else
		{
			if(continenteIngresado == "Europa")
			{
				contadorDeTemperaturasImparesEuropa++;
			}
		}
		
		if(temperaturaMinimaIngresada >40)
		{
			contadorPaisesMasDeCuarentaGrados++;
			acumuladorDeHabitantesEnPaisesDeMasCuarenta = acumuladorDeHabitantesEnPaisesDeMasCuarenta + cantidadDeHabitantesIngresado;

		}
		else 
		{
			if(temperaturaMinimaIngresada <0 && continenteIngresado == "America")
			{
				contadorPaisesAmericaConMenosDeCero++;
			}
		}

		if(contadorEntradas == 0 || cantidadDePersonasDelPaisConMenosHabitantes >cantidadDeHabitantesIngresado)
		{
			cantidadDePersonasDelPaisConMenosHabitantes = cantidadDeHabitantesIngresado;
			nombreDelPaisConMenosHabitantes = paisIngresado;	
		}
		
		

		switch(continenteIngresado)
		{
			case "America":
				acumuladorHabitantesAmerica = acumuladorHabitantesAmerica + cantidadDeHabitantesIngresado;
				break;
			case "Asia":
				acumuladorHabitantesAsia = acumuladorHabitantesAsia + cantidadDeHabitantesIngresado;
				break;
			case "Europa":
				acumuladorHabitantesEuropa = acumuladorHabitantesEuropa + cantidadDeHabitantesIngresado;
				break;
			case "Africa":
				acumuladorHabitantesAfrica = acumuladorHabitantesAfrica + cantidadDeHabitantesIngresado;
				break;
			case "Oceania":
				acumuladorHabitantesOceania = acumuladorHabitantesOceania + cantidadDeHabitantesIngresado;
				break;
		}


		acumuladorTotalDeHabitantes = acumuladorTotalDeHabitantes + cantidadDeHabitantesIngresado;
	}
	//f)el promedio de habitantes entre los paises ingresados 
	promedioDeHabitantesTotal = acumuladorTotalDeHabitantes / contadorEntradas;
 	
	/*i) que continente tiene mas habitantes.*/
	if(acumuladorHabitantesAmerica > acumuladorHabitantesAsia && acumuladorHabitantesAmerica > acumuladorHabitantesEuropa && acumuladorHabitantesAmerica > acumuladorHabitantesAfrica && acumuladorHabitantesAmerica > acumuladorHabitantesOceania)
	{
		continenteMasHabitantes = "America";
	}
	else
	{
		if(acumuladorHabitantesAsia > acumuladorHabitantesEuropa && acumuladorHabitantesAsia > acumuladorHabitantesAfrica && acumuladorHabitantesAsia > acumuladorHabitantesOceania)
		{
			continenteMasHabitantes = "Asia";
		}
		else
		{
			if(acumuladorHabitantesEuropa > acumuladorHabitantesAfrica && acumuladorHabitantesEuropa > acumuladorHabitantesOceania)
			{
				continenteMasHabitantes = "Europa";
			}
			else
			{
				if(acumuladorHabitantesAfrica > acumuladorHabitantesOceania)
				{
					continenteMasHabitantes = "Africa";
				}
				else
				{
					continenteMasHabitantes = "Oceania";
				}
			}
		}
	}
	//a)La cantidad de temperaturas pares
	if(contadorDeTemperaturasPares !=0)
	{
		console.log("La cantidad de temperaturas pares es: "+contadorDeTemperaturasPares);
	}
	//b)la cantidad de temperaturas impares de europa
	if(contadorDeTemperaturasImparesEuropa !=0)
	{
		console.log("La cantidad de temperaturas impares de Europa es :"+contadorDeTemperaturasImparesEuropa);
	}
	//c)El nombre del pais con menos habitantes
	console.log("El nombre del pais con menos habitantes es: "+nombreDelPaisConMenosHabitantes);
	//d)la cantidad de paises que superan los 40 grados.
	if(contadorPaisesMasDeCuarentaGrados !=0)
	{
		promedioDeHabitantesMasCuarentaGrados = acumuladorDeHabitantesEnPaisesDeMasCuarenta / contadorPaisesMasDeCuarentaGrados;
		console.log("La cantidad de paises que superan los 40 grados de temperatura minima son :"+contadorPaisesMasDeCuarentaGrados);
		console.log("El promedio de habitantes de los paises que superan los 40 grados de temperatura minima es: "+promedioDeHabitantesMasCuarentaGrados);
	}
	//e)la cantidad de paises de america que tienen menos de 0 grados
	if(contadorPaisesAmericaConMenosDeCero != 0)
	{
		console.log("La cantidad de paises de América que registran una temperatura minima menor a 0 son "+contadorPaisesAmericaConMenosDeCero);
	}
	//f)el promedio de habitantes entre los paises ingresados 
	console.log("El promedio de habitantes total es de: "+promedioDeHabitantesTotal);
	//g)el promedio de habitantes entre los paises que superan los 40 grados 
	
	//H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
	console.log("La temperatura minima que se ingresada fue de "+temperaturaMinimaTotal+" y se registró en "+paisTemperaturaMinimaTotal);
	//i) que continente tiene mas habitantes.
	console.log("El continente que tiene más habitantes es: "+continenteMasHabitantes);
}//FIN DE LA FUNCIÓN