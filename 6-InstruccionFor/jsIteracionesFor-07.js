/* Pereira Nicolás. Parcialito 2.
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano
*/




function mostrar()
{

	var respuesta;
	var contadorDeEntradas;
	var tipoDeAnimal;
	var tipoDePelaje;
	var edadDelAnimal;
	var nombreDelAnimal;
	var razaDelAnimal;
	var pesoDelAnimal;
	var estadoClinicoDelAnimal;
	var temperaturaCorporalDelAnimal;
	var contadorDePerros;
 	var nombreDelPerroMasPesado;
 	var pesoDelPerroMasPesado;
 	var contadorDeAnimalesEnfermos;
 	var nombreDelUltimoAnimalOtraCosa;
 	var animalSinPeloConMenorTemperatura;
 	var temperaturaDelSinPeloConMenorTemperatura;
 	var acumuladorDeTemperaturaGatos;
 	var acumuladorDeTemperaturaPerros;
 	var acumuladorDeTemperaturaOtraCosa;
 	var contadorGatos;
 	var contadorOtraCosa;
 	var contadorAnimalesInternados;
 	var contadorDeAnimalesEnAdopcion;
 	var sumaTotalDeKilos;
 	var promedioDeKilosEnTotal;
 	var porcentajePerrosEnfermosSobreElTotal;
 	var banderaDeSinPelosTemperaturaMinima;
 	var tipoMasPromedioTemperatura;
 	var promedioTemperaturaGatos;
 	var promedioTemperaturaPerros;
 	var promedioTemperaturaOtros;
 	var porcentajeDelTotalDePerrosGatos;
 	var gatosSinPelo;
 	var razaDelGatoSinPelosMasLiviano;
 	var pesoGatoSinPelosMasLiviano;
 	var nombreGatoSinPelosMasLiviano;






	respuesta = "si";
	contadorDeEntradas = 0;
	contadorDePerros = 0;
	contadorDeAnimalesEnfermos = 0;
	acumuladorDeTemperaturaGatos = 0;
	acumuladorDeTemperaturaPerros = 0;
	acumuladorDeTemperaturaOtraCosa = 0;
	contadorGatos = 0;
	contadorOtraCosa = 0;
	contadorAnimalesInternados = 0;
	contadorDeAnimalesEnAdopcion = 0;
	sumaTotalDeKilos = 0;
	banderaDeSinPelosTemperaturaMinima = 0;
	gatosSinPelo = 0;
	promedioTemperaturaGatos = 0;
	promedioTemperaturaPerros = 0;
	promedioTemperaturaOtros = 0;
	



	while(respuesta == "si")
	{
		tipoDeAnimal = prompt("Ingrese el tipo de animal: gato, perro u otra cosa.","");
		while(isNaN(tipoDeAnimal) == false || tipoDeAnimal != "gato" && tipoDeAnimal != "perro" && tipoDeAnimal != "otra cosa")
		{
			tipoDeAnimal = prompt("Error. Ingrese un tipo de animal válido: gato, perro u otra cosa.","");
		} 
	
		tipoDePelaje = prompt("Ingrese el tipo de pelaje: corto, largo u sin pelo.","");
		while(isNaN(tipoDePelaje) == false || tipoDePelaje != "corto" && tipoDePelaje != "largo" && tipoDePelaje != "sin pelo")
		{
			tipoDePelaje = prompt("Error. Ingrese un tipo de pelaje válido: corto, largo u sin pelo.","");
		} 

		edadDelAnimal = prompt("Ingrese la edad del animal","");
		edadDelAnimal = parseInt(edadDelAnimal);
		while(isNaN(edadDelAnimal) == true || edadDelAnimal <1 || edadDelAnimal >20 )
		{
			edadDelAnimal = prompt("Error. Ingrese la edad del animal nuevamente.","");
			edadDelAnimal = parseInt(edadDelAnimal);
		} 

		nombreDelAnimal = prompt("Ingrese el nombre del animal.","");
		while(isNaN(nombreDelAnimal) == false)
		{
			nombreDelAnimal = prompt("Error. Ingrese el nombre del animal nuevamente.","");
		} 

		razaDelAnimal = prompt("Ingrese la raza del animal","");
		while(isNaN(razaDelAnimal) == false)
		{
			razaDelAnimal = prompt("Error. Ingrese la raza del animal nuevamente.","");
		} 

		pesoDelAnimal = prompt("Ingrese el peso del animal","");
		pesoDelAnimal = parseInt(pesoDelAnimal);
		while(isNaN(pesoDelAnimal) == true || pesoDelAnimal <1 || pesoDelAnimal >50)
		{
			pesoDelAnimal = prompt("Error. Ingrese el peso del animal nuevamente.","");
			pesoDelAnimal = parseInt(pesoDelAnimal);
		} 

		estadoClinicoDelAnimal = prompt("Ingrese el estado clinico: enfermo, internado u adopcion.","");
		while(isNaN(estadoClinicoDelAnimal) == false || estadoClinicoDelAnimal != "enfermo" && estadoClinicoDelAnimal != "internado" && estadoClinicoDelAnimal != "adopcion")
		{
			estadoClinicoDelAnimal = prompt("Error. Ingrese el estado clinico nuevamente: enfermo, internado u adopcion.","");
		} 

		temperaturaCorporalDelAnimal = prompt("Ingrese la temperatura corporal del animal","");
		temperaturaCorporalDelAnimal = parseInt(temperaturaCorporalDelAnimal);
		while(isNaN(temperaturaCorporalDelAnimal) == true || temperaturaCorporalDelAnimal <35 || temperaturaCorporalDelAnimal >43)
		{
			temperaturaCorporalDelAnimal = prompt("Error. Ingrese la temperatura corporal del animal nuevamente.","");
			temperaturaCorporalDelAnimal = parseInt(temperaturaCorporalDelAnimal);
		}



		switch(tipoDeAnimal)
		{
			case "gato":
				acumuladorDeTemperaturaGatos = acumuladorDeTemperaturaGatos + temperaturaCorporalDelAnimal;
				if(tipoDePelaje == "sin pelo" || pesoGatoSinPelosMasLiviano >pesoDelAnimal)
				{
					razaDelGatoSinPelosMasLiviano = razaDelAnimal;
					pesoGatoSinPelosMasLiviano = pesoDelAnimal;
					nombreGatoSinPelosMasLiviano = nombreDelAnimal;
					gatosSinPelo++;
				}
				contadorGatos++;
				break;
			case "perro":
				if(contadorDePerros == 0 || pesoDelPerroMasPesado <pesoDelAnimal)
				{
					nombreDelPerroMasPesado = nombreDelAnimal;
					pesoDelPerroMasPesado = pesoDelAnimal;
				}
				acumuladorDeTemperaturaPerros = acumuladorDeTemperaturaPerros + temperaturaCorporalDelAnimal;
				contadorDePerros++;
				break;
			case "otra cosa":
				acumuladorDeTemperaturaOtraCosa = acumuladorDeTemperaturaOtraCosa + temperaturaCorporalDelAnimal;
				nombreDelUltimoAnimalOtraCosa = nombreDelAnimal;
				contadorOtraCosa++;
				break;
		}
		
		if((banderaDeSinPelosTemperaturaMinima == 0 && tipoDePelaje == "sin pelo") || (tipoDePelaje == "sin pelo" &&  temperaturaDelSinPeloConMenorTemperatura >temperaturaCorporalDelAnimal))
		{
			animalSinPeloConMenorTemperatura = nombreDelAnimal;
			temperaturaDelSinPeloConMenorTemperatura = temperaturaCorporalDelAnimal;
			banderaDeSinPelosTemperaturaMinima = 1;
		}
				
		switch(estadoClinicoDelAnimal)
		{
			case "enfermo":
				contadorDeAnimalesEnfermos++;
				break;
			case "internado":
				contadorAnimalesInternados++;
				break;
			case "adopcion":
				contadorDeAnimalesEnAdopcion++;
				break;
		}

		sumaTotalDeKilos = sumaTotalDeKilos + pesoDelAnimal;

		contadorDeEntradas++;

		respuesta = prompt("¿Desea ingresar los datos de otro animal?","");
	}




	if(contadorGatos !=0)
    {
		promedioTemperaturaGatos = acumuladorDeTemperaturaGatos / contadorGatos;
    }


	if(contadorOtraCosa != 0)
	{	
		promedioTemperaturaOtros = acumuladorDeTemperaturaOtraCosa / contadorOtraCosa;
	}

	promedioDeKilosEnTotal = sumaTotalDeKilos / contadorDeEntradas;


	if(promedioTemperaturaGatos > promedioTemperaturaPerros && promedioTemperaturaGatos > promedioTemperaturaOtros)
	{
		tipoMasPromedioTemperatura = "gato";
	}
	else
	{
		if(promedioTemperaturaPerros > promedioTemperaturaOtros)
		{
			tipoMasPromedioTemperatura = "perro";
		}
		else
		{
			tipoMasPromedioTemperatura = "otra cosa";
		}
	}

	if(contadorDeAnimalesEnfermos < contadorAnimalesInternados && contadorDeAnimalesEnfermos < contadorDeAnimalesEnAdopcion)
	{
		estadoClinicoMenorCantidad = "enfermos.";
	}     
	else
	{
		if(contadorAnimalesInternados < contadorDeAnimalesEnAdopcion)
		{
			estadoClinicoMenorCantidad = "en internación.";
		}
		else
		{
			estadoClinicoMenorCantidad = "en adopcion.";
		}
	}

	//y nos piden informar solo si existe
	//a)El perro mas pesado
	if(contadorDePerros !=0)
	{
		promedioTemperaturaPerros = acumuladorDeTemperaturaPerros / contadorDePerros;
		console.log("El perro más pesado es "+nombreDelPerroMasPesado);
	}
	//b)El porcentaje de enfermos sobre el total de mascotas
	if(contadorDeAnimalesEnfermos != 0)
	{
		porcentajePerrosEnfermosSobreElTotal = contadorDeAnimalesEnfermos / contadorDeEntradas*100;
		console.log("El porcentaje de animales enfermos sobre el total es de "+porcentajePerrosEnfermosSobreElTotal+"%");
	}
	//c)El nombre de la ultima mascota de tipo "otra cosa"
	if(contadorOtraCosa !=0)
	{
		console.log("El nombre de la ultima mascota otra cosa es "+nombreDelUltimoAnimalOtraCosa);
	}
	//d)El animal sin pelo con menor temperatura corporal
	if(banderaDeSinPelosTemperaturaMinima != 0)
	{
		console.log("El animal sin pelo con menor temperatura corporal es "+animalSinPeloConMenorTemperatura);
	}
	//e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
	console.log("El tipo de animal con mayor promedio de temperatura corporal es: "+tipoMasPromedioTemperatura);
	//f)Sumando gatos y perros que porcentaje del total de mascotas son?
	if(contadorGatos != 0 || contadorDePerros != 0)
	{
		porcentajeDelTotalDePerrosGatos = (contadorGatos + contadorDePerros) /contadorDeEntradas*100;
		console.log("El porcentaje del total que representan los gatos y los perros es de "+porcentajeDelTotalDePerrosGatos+"%.");
	}
	//g)Que estado clinico tiene la menor cantidad de mascotas 
	console.log("El estado clinico con menor cantidad de mascotas es: "+estadoClinicoMenorCantidad);
	//H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
	console.log("El promedio de kilos en total es de "+promedioDeKilosEnTotal+"kg.");
	//i)El nombre y raza del gato sin pelos mas liviano
	if(gatosSinPelo != 0)
	{
		console.log("El nombre del gato sin pelo mas liviano es "+nombreGatoSinPelosMasLiviano+" y es de la raza "+razaDelGatoSinPelosMasLiviano);
	}



}//FIN DE LA FUNCIÓN