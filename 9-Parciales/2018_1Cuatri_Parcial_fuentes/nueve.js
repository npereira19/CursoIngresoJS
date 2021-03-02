/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.
*/



function mostrar()
{
	var marcaDeProducto;
	var pesoDelProducto;
	var	temperaturaDeAlmacenamiento;
	var	cantidadTemperaturasPares;
	var	productoMasPesado;
	var flagPesoDelProducto;
	var	menosDeCero;
	var	promedioDePesos;
	var	pesoMaximo;
	var pesoMinimo;
	var flagMaximoMinimo;
	var contador;
	var respuesta;

	respuesta = "si";
	cantidadTemperaturasPares = 0;
	flagPesoDelProducto = 0;
	menosDeCero = 0;
	contador = 0;
	acumuladorDePesos = 0;
	


	while(respuesta == "si")
	{
		contador++;

		marcaDeProducto = prompt("Ingrese la marca del producto.","");
		
		pesoDelProducto = prompt("Ingrese el peso del producto.","");
		pesoDelProducto = parseInt(pesoDelProducto);
		while(isNaN(pesoDelProducto) == true || pesoDelProducto<1 || pesoDelProducto>100)
		{
			pesoDelProducto = prompt("Error. Ingrese un peso válido.","");
			pesoDelProducto = parseInt(pesoDelProducto);
		}

		temperaturaDeAlmacenamiento = prompt("Ingrese la temperatura de almacenamiento del producto.","");
		temperaturaDeAlmacenamiento = parseInt(temperaturaDeAlmacenamiento);
		while(isNaN(temperaturaDeAlmacenamiento) == true || temperaturaDeAlmacenamiento<-30 || temperaturaDeAlmacenamiento>30)
		{
			temperaturaDeAlmacenamiento = prompt("Error. Ingrese una temperatura de almacenamiento válida.","");
			temperaturaDeAlmacenamiento = parseInt(temperaturaDeAlmacenamiento);
		}

		//b) La marca del producto más pesado
		if(flagPesoDelProducto == 0)
		{
			flagPesoDelProducto = 1;
			productoMasPesado = marcaDeProducto;
			pesoMaximo = pesoDelProducto;
			pesoMinimo = pesoDelProducto;
		}
		else
		{
			if(pesoDelProducto>pesoMaximo)
			{
				pesoMaximo = pesoDelProducto;
				productoMasPesado = marcaDeProducto;
			}
			
			if(pesoDelProducto<pesoMinimo)
			{
				pesoMinimo = pesoDelProducto;
			}
		}

		//a) La cantidad de temperaturas pares.
		if(temperaturaDeAlmacenamiento%2 == 0)
		{
			cantidadTemperaturasPares++;
		}
		
		// La cantidad de productos que se conservan a menos de 0 grados.
		if(temperaturaDeAlmacenamiento < 0)
		{	
			menosDeCero++;
		}
		
		
		acumuladorDePesos = acumuladorDePesos + pesoDelProducto;
		
		respuesta = prompt("¿Desea ingresar otro producto?");

	}
	
	//El promedio del peso de todos los productos.
	promedioDePesos = acumuladorDePesos/contador;

	document.write("La cantidad de temperaturas pares es: "+cantidadTemperaturasPares);
	document.write("<br> La marca del producto más pesado es: "+productoMasPesado);
	document.write("<br> La cantidad de productos que se conservan a menos de 0 grados son: "+menosDeCero);
	document.write("<br> El promedio del peso de todos los productos ingresados es: "+promedioDePesos);
	document.write("<br> El peso máximo ingresado es de "+pesoMaximo+"kg, y el mínimo es de "+pesoMinimo+"kg.");













}
