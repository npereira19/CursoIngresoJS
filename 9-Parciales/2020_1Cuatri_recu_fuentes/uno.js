/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/




function mostrar()
{
	
	var contadorEntradas;
	var tipoDeProducto;
	var precioDelProducto;
	var cantidadDeUnidades;
	var marcaDelProducto;
	var fabricanteDelProducto;
	var contadorBarbijos;
	var contadorJabones;
	var contadorAlcoholes;
	var precioJabonMasCaro;
	var unidadesDelJabonMasCaro;
	var fabricanteDelJabonMasCaro;
	var acumuladorUnidadesBarbijo;
	var acumuladorUnidadesJabones;
	var acumuladorUnidadesAlcoholes;
	var tipoMasUnidades;
	var promedioDeCompraTipoMasUnidades;







	contadorBarbijos = 0;
	contadorJabones = 0;
	contadorAlcoholes = 0;
	acumuladorUnidadesBarbijo = 0;
	acumuladorUnidadesJabones = 0;
	acumuladorUnidadesAlcoholes = 0;







	for(contadorEntradas = 0; contadorEntradas <5; contadorEntradas++)
	{
		tipoDeProducto = prompt("Ingrese el tipo de producto a comprar: barbijo, jabon o alcohol","");
		while(isNaN(tipoDeProducto) == false|| tipoDeProducto != "barbijo" && tipoDeProducto != "jabon" && tipoDeProducto != "alcohol")
		{
			tipoDeProducto = prompt("Error. Ingrese el tipo de producto nuevamente: barbijo, jabon o alcohol.","");
		}

		precioDelProducto = prompt("Ingrese el precio del producto por unidad.","");
		precioDelProducto = parseInt(precioDelProducto);
		while(isNaN(precioDelProducto) == true || precioDelProducto <100 || precioDelProducto >300 )
		{
			precioDelProducto = prompt("Error. Ingrese el precio del producto por unidad nuevamente.","");
			precioDelProducto = parseInt(precioDelProducto);
		}

		cantidadDeUnidades = prompt("Ingrese la cantidad de unidades a comprar.","");
		cantidadDeUnidades = parseInt(cantidadDeUnidades);
		while(isNaN(cantidadDeUnidades) == true || cantidadDeUnidades <1 || cantidadDeUnidades >1000 )
		{
			cantidadDeUnidades = prompt("Error. Ingrese la cantidad de unidades a comprar nuevamente.","");
			cantidadDeUnidades = parseInt(cantidadDeUnidades);
		}

		marcaDelProducto = prompt("Ingrese la marca del producto.","");
		while(isNaN(marcaDelProducto) == false)
		{
			marcaDelProducto = prompt("Error. Ingrese Ingrese la marca del producto nuevamente.","");
		}

		fabricanteDelProducto = prompt("Ingrese el fabricante del producto.","");
		while(isNaN(fabricanteDelProducto) == false)
		{
			fabricanteDelProducto = prompt("Error. Ingrese el fabricante del producto nuevamente.","");
		}


		
		switch(tipoDeProducto)
		{
			case "barbijo":
				acumuladorUnidadesBarbijo = acumuladorUnidadesBarbijo + cantidadDeUnidades;
				contadorBarbijos++;
				break;
			case "jabon":
				acumuladorUnidadesJabones = acumuladorUnidadesJabones + cantidadDeUnidades;
				if(contadorJabones == 0 || precioJabonMasCaro <precioDelProducto)
				{
					precioJabonMasCaro = precioDelProducto;
					unidadesDelJabonMasCaro = cantidadDeUnidades;
					fabricanteDelJabonMasCaro = fabricanteDelProducto;
				}
				contadorJabones++;
				break;
			case "alcohol":
				acumuladorUnidadesAlcoholes = acumuladorUnidadesAlcoholes + cantidadDeUnidades;
				contadorAlcoholes++;
				break;
		}


	}

	

	if(acumuladorUnidadesBarbijo > acumuladorUnidadesJabones && acumuladorUnidadesBarbijo > acumuladorUnidadesAlcoholes)
		{
			tipoMasUnidades = "barbijo";
			promedioDeCompraTipoMasUnidades = acumuladorUnidadesBarbijo / contadorBarbijos;
		}
		else
		{
			if(acumuladorUnidadesJabones > acumuladorUnidadesAlcoholes)
			{
				tipoMasUnidades = "jabon"
				promedioDeCompraTipoMasUnidades = acumuladorUnidadesJabones / contadorJabones;
			}
			else
			{
				tipoMasUnidades = "alcohol";
				promedioDeCompraTipoMasUnidades = acumuladorUnidadesAlcoholes / contadorAlcoholes;
			}
		}



		if(contadorJabones != 0)
		{
			console.log("Del jabon mas caro se vendieron "+unidadesDelJabonMasCaro+" unidades, y el fabricante es "+fabricanteDelJabonMasCaro);
		}

	console.log("El tipo de producto con más unidades vendidas en total fue: "+tipoMasUnidades+" con un promedio por compra de "+promedioDeCompraTipoMasUnidades+" unidades.");

	if(contadorBarbijos != 0)
	{
		console.log("Se vendieron un total de "+acumuladorUnidadesBarbijo+" unidades de barbijos.");
	}
/*Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/





}
