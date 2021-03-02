/*
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/


function mostrar()
{
	
	var cantidadEntradas;
	var tipoDeProductoIngresado;
	var precioDelProducto;
	var cantidadDeUnidadesIngresadas;
	var marcaDelProducto;
	var fabricanteDelProducto;
	var contadorAlcoholes;
	var precioAlcoholMasBarato;
	var cantidadDeUnidadesAlcoholMasBarato;
	var fabricanteAlcoholMasBarato;
	var contadorBarbijos;
	var contadorJabones;
	var contadorAlcoholes;
	var acumuladorCantidadBarbijos;
	var acumuladorCantidadJabones;
	var acumuladorCantidadAlcoholes;
	var tipoMasUnidades;
	var promedioCompraDelTipoMasUnidades;
	






	contadorBarbijos = 0;
	contadorJabones = 0;
	contadorAlcoholes = 0;
	acumuladorCantidadBarbijos = 0;
	acumuladorCantidadJabones = 0;
	acumuladorCantidadAlcoholes = 0;







	for(cantidadEntradas = 0; cantidadEntradas <5; cantidadEntradas++)
	{

		tipoDeProductoIngresado = prompt("Ingrese el tipo de producto: barbijo, jabon o alcohol.","");
		while(isNaN(tipoDeProductoIngresado) == false || tipoDeProductoIngresado != "barbijo" && tipoDeProductoIngresado != "jabon" && tipoDeProductoIngresado != "alcohol")
		{
			tipoDeProductoIngresado = prompt("Error. Ingrese el tipo de producto nuevamente: barbijo, jabon o alcohol.","");
		}

		precioDelProducto = prompt("Ingrese el precio por unidad.","");
		precioDelProducto = parseInt(precioDelProducto);
		while(isNaN(precioDelProducto) == true || precioDelProducto <100  || precioDelProducto >300)
		{
			precioDelProducto = prompt("Error. Ingrese el precio por unidad nuevamente.","");
			precioDelProducto = parseInt(precioDelProducto);
		}

		cantidadDeUnidadesIngresadas = prompt("Ingrese la cantidad de unidades.","");
		cantidadDeUnidadesIngresadas = parseInt(cantidadDeUnidadesIngresadas);
		while(isNaN(cantidadDeUnidadesIngresadas) == true || cantidadDeUnidadesIngresadas <1  || cantidadDeUnidadesIngresadas >1000)
		{
			cantidadDeUnidadesIngresadas = prompt("Error. Ingrese la cantidad de unidades nuevamente.","");
			cantidadDeUnidadesIngresadas = parseInt(cantidadDeUnidadesIngresadas);
		}

		marcaDelProducto = prompt("Ingrese la marca del producto.","");
		while(isNaN(marcaDelProducto) == false)
		{
			marcaDelProducto = prompt("Error. Ingrese la marca del producto nuevamente.","");
		}

		fabricanteDelProducto = prompt("Ingrese el fabricante del producto.","");
		while(isNaN(fabricanteDelProducto) == false)
		{
			fabricanteDelProducto = prompt("Error. Ingrese el fabricante del producto nuevamente.","");
		}


		switch(tipoDeProductoIngresado)
		{
			case "barbijo":
				acumuladorCantidadBarbijos = acumuladorCantidadBarbijos + cantidadDeUnidadesIngresadas;
				contadorBarbijos++;
				break;
			case "jabon":
				acumuladorCantidadJabones = acumuladorCantidadJabones + cantidadDeUnidadesIngresadas;
				contadorJabones++;
				break;
			case "alcohol":
				acumuladorCantidadAlcoholes = acumuladorCantidadAlcoholes + cantidadDeUnidadesIngresadas;
				if(contadorAlcoholes == 0 || precioAlcoholMasBarato >precioDelProducto)
				{
					precioAlcoholMasBarato = precioDelProducto;
					cantidadDeUnidadesAlcoholMasBarato = cantidadDeUnidadesIngresadas;
					fabricanteAlcoholMasBarato = fabricanteDelProducto;
				}
				contadorAlcoholes++;
				break;
		}
	}

	if(acumuladorCantidadBarbijos >acumuladorCantidadJabones && acumuladorCantidadBarbijos >acumuladorCantidadAlcoholes)
	{
		tipoMasUnidades = "barbijo";
		promedioCompraDelTipoMasUnidades = acumuladorCantidadBarbijos / contadorBarbijos;
	}
	else
	{
		if(acumuladorCantidadJabones >acumuladorCantidadAlcoholes)
		{
			tipoMasUnidades = "jabon";
			promedioCompraDelTipoMasUnidades = acumuladorCantidadJabones / contadorJabones;
		}
		else
		{
			tipoMasUnidades = "alcohol";
			promedioCompraDelTipoMasUnidades = acumuladorCantidadAlcoholes / contadorAlcoholes;
		}
	}





	//e debe Informar al usuario lo siguiente:
	if(contadorAlcoholes != 0)
	{
		console.log("Del alcohol mas barato se vendieron "+cantidadDeUnidadesAlcoholMasBarato+" unidades y su fabricante es "+fabricanteAlcoholMasBarato);
	}

	//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
	//b) Del tipo con mas unidades, el promedio por compra
	console.log("El tipo con mas unidades vendidas es "+tipoMasUnidades+" y el promedio de compra del mismo fue de "+promedioCompraDelTipoMasUnidades+" unidades.");
	//c) Cuántas unidades de jabones hay en total
	if(contadorJabones != 0)
	{
		console.log("Se vendieron un total de "+acumuladorCantidadJabones+" unidades de jabon.");
	}

}
