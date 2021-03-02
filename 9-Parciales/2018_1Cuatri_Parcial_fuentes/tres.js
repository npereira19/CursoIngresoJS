function mostrar()
{

	var valorIngresado;
	var porcentajeDescuento;
	var precioFinal;

	valorIngresado = prompt("Ingrese el valor del producto.","");
	while(isNaN(valorIngresado))
	{
		valorIngresado = prompt("Error. Ingrese un valor númerico.","");
	}
	valorIngresado = parseInt(valorIngresado);

	porcentajeDescuento = prompt("Ingrese el porcentaje de descuento.","");
	while(isNaN(porcentajeDescuento))
	{
		porcentajeDescuento = prompt("Error. Ingrese un valor númerico.");
	}
	porcentajeDescuento = parseInt(porcentajeDescuento);

	precioFinal = valorIngresado - valorIngresado*porcentajeDescuento/100;

	document.getElementById('elPrecioFinal').value = precioFinal;


}
