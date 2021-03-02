/*

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
//a) El importe total a pagar , bruto sin descuento y...
/7b) el importe total a pagar con descuento(solo si corresponde)
//d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
//f) El tipo mas caro

*/


function mostrar()
{
	var respuesta;
	var tipoDeProducto;
	var	cantidadDeBolsas; 
	var	precioPorBolsa;
	var sumaTotalDeBolsas;
	var	importeBruto;
	var acumuladorBolsasArena;
	var acumuladorBolsasCal;
	var acumuladorBolsasCemento;
	var	tipoMasUnidades;
	var banderaDelProductoMasCaro;
	var precioConDescuento;







	respuesta = "si";
	sumaTotalDeBolsas = 0;
	importeBruto = 0;
	acumuladorBolsasArena = 0;
	acumuladorBolsasCal = 0;
	acumuladorBolsasCemento = 0;
	banderaDelProductoMasCaro = 0;








	while(respuesta == "si")
	{
		tipoDeProducto = prompt("Ingrese el tipo de producto a comprar: arena, cal o cemento","");
		while(isNaN(tipoDeProducto) == false|| tipoDeProducto != "arena" && tipoDeProducto != "cal" && tipoDeProducto != "cemento")
		{
			tipoDeProducto = prompt("Error. Ingrese el tipo de producto nuevamente: arena, cal o cemento.","");
		}

		cantidadDeBolsas = prompt("Ingrese la cantidad de bolsas a comprar.","");
		cantidadDeBolsas = parseInt(cantidadDeBolsas);
		while(isNaN(cantidadDeBolsas) == true || cantidadDeBolsas <1)
		{
			cantidadDeBolsas = prompt("Error. Ingrese la cantidad de bolsas a comprar nuevamente.","");
			cantidadDeBolsas = parseInt(cantidadDeBolsas);
		}


		precioPorBolsa = prompt("Ingrese el precio por bolsa.","");
		precioPorBolsa = parseInt(precioPorBolsa);
		while(isNaN(precioPorBolsa) == true || precioPorBolsa <1)
		{
			precioPorBolsa = prompt("Error. Ingrese el precio por bolsa nuevamente.","");
			precioPorBolsa = parseInt(precioPorBolsa);
		}



		switch(tipoDeProducto)
		{
			case "arena":
				acumuladorBolsasArena = acumuladorBolsasArena + cantidadDeBolsas;
				break;
			case "cal":
				acumuladorBolsasCal = acumuladorBolsasCal + cantidadDeBolsas;
				break;
			case "cemento":
				acumuladorBolsasCemento = acumuladorBolsasCemento + cantidadDeBolsas;
				break;
		}

		if(banderaDelProductoMasCaro == 0 || precioDelTipoMasCaro <precioPorBolsa)
		{
			tipoMasCaro = tipoDeProducto;
			precioDelTipoMasCaro = precioPorBolsa;
			banderaDelProductoMasCaro = 1;
		}


		importeBruto = importeBruto + cantidadDeBolsas*precioPorBolsa;

		sumaTotalDeBolsas = sumaTotalDeBolsas + cantidadDeBolsas;

		respuesta = prompt("¿Desea realizar otra compra?","");
	}


	if(sumaTotalDeBolsas >10 && sumaTotalDeBolsas <30)
	{
		porcentajeDescuento = 15;
	}
	else
	{
		if(sumaTotalDeBolsas >29)
		{
				porcentajeDescuento = 25;
		}
		else
		{
			porcentajeDescuento = 0;
		}
	}


	if(acumuladorBolsasArena > acumuladorBolsasCal && acumuladorBolsasArena > acumuladorBolsasCemento)
	{
			tipoMasUnidades = "arena";
	}
	else
	{
		if(acumuladorBolsasCal > acumuladorBolsasCemento)
		{
			tipoMasUnidades = "cal"
		}
		else
		{
			tipoMasUnidades = "cemento";
		}
	}

	/*

	Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
	Tipo validad("arena";"cal";"cemento")
	Cantidad de bolsas,
	Precio por bolsa (más de cero ),
	al terminar la compra el cliente accede a un descuento segun las bolsas en total
	Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
	Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
	//a) El importe total a pagar , bruto sin descuento y...
	/7b) el importe total a pagar con descuento(solo si corresponde)
	//d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
	//f) El tipo mas caro

	*/


	console.log("El importe total a pagar es: $"+importeBruto);

	if(porcentajeDescuento != 0)
	{
		precioConDescuento = importeBruto - importeBruto*porcentajeDescuento/100
		console.log("El importe con descuento a pagar es de: $"+precioConDescuento);
	}

	console.log("El tipo de producto más vendido fue: "+tipoMasUnidades);

	console.log("el tipo más caro fue: "+tipoMasCaro);






}
		