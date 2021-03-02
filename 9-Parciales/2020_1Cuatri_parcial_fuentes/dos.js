/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
Curso de ingreso UTN FRA*/


function mostrar()
{
	
	var respuesta;
	var tipoDeProducto;
	var cantidadDeBolsas;
	var precioPorBolsa;
 	var cantidadDeBolsasTotalesCompradas;
 	var porcentajeDescuento;
 	var importeBruto;
 	var acumuladorBolsasArena;
 	var acumuladorBolsasCal;
 	var acumuladorBolsasCemento;
 	var banderaTipoMasCaro;
 	var precioConDescuento;
 	var tipoMasBolsas;


	respuesta = "si";
	cantidadDeBolsasTotalesCompradas = 0;
	importeBruto = 0;
	acumuladorBolsasArena = 0;
	acumuladorBolsasCal = 0;
	acumuladorBolsasCemento = 0;
	banderaTipoMasCaro = 0;




	while(respuesta == "si")
	{

		tipoDeProducto = prompt("Ingrese el tipo de producto: arena, cal o cemento.","");
		while(isNaN(tipoDeProducto) == false || tipoDeProducto != "arena" && tipoDeProducto != "cal" && tipoDeProducto != "cemento")
		{
			tipoDeProducto = prompt("Error. Ingrese el tipo de producto nuevamente: arena, cal o cemento.","");
		}

		cantidadDeBolsas = prompt("Ingrese la cantidad de bolsas.","");
		cantidadDeBolsas = parseInt(cantidadDeBolsas);
		while(isNaN(cantidadDeBolsas) == true || cantidadDeBolsas <1)
		{
			cantidadDeBolsas = prompt("Error. Ingrese la cantidad de bolsas nuevamente.","");
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

 		if(banderaTipoMasCaro == 0 || precioDelProductoMasCaro <precioPorBolsa)
 		{
 			tipoMasCaro = tipoDeProducto;
 			precioDelProductoMasCaro = precioPorBolsa;
 			banderaTipoMasCaro = 1;
 		}


		importeBruto = importeBruto + cantidadDeBolsas*precioPorBolsa;

		cantidadDeBolsasTotalesCompradas = cantidadDeBolsasTotalesCompradas + cantidadDeBolsas;

		respuesta = prompt("¿Desea ingresar los datos de otra compra?","");
	}


	if(acumuladorBolsasArena >acumuladorBolsasCal && acumuladorBolsasArena >acumuladorBolsasCemento)
	{
		tipoMasBolsas = "arena";
	}
	else
	{
		if(acumuladorBolsasCal >acumuladorBolsasCemento)
		{
			tipoMasBolsas = "cal";	
		}
		else
		{
			tipoMasBolsas = "cemento";
		}
	}


	if(cantidadDeBolsasTotalesCompradas >10 && cantidadDeBolsasTotalesCompradas <30)
	{
		porcentajeDescuento = 15;
	}
	else
	{
		if(cantidadDeBolsasTotalesCompradas >29)
		{
			porcentajeDescuento = 25;
		}
		else 
		{
			porcentajeDescuento = 0;
		}
	}

 /*Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

	console.log("El precio total a pagar es de: $"+importeBruto);

	if( porcentajeDescuento != 0)
	{
		precioConDescuento = importeBruto - importeBruto*porcentajeDescuento/100;
		console.log("El total del precio con descuento es de: $"+precioConDescuento);
	}

	console.log("El producto con más cantidad de bolsas vendidas es "+tipoMasBolsas);
	console.log("El tipo de producto con la bolsa más cara es: "+tipoMasCaro)









}
