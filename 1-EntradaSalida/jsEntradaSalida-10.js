/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	var importeIngresado
	var descuento;
	var resultado;

	importeIngresado = document.getElementById('txtIdImporte').value;
	importeIngresado = parseInt(importeIngresado);
	descuento = importeIngresado*25/100;
	resultado = importeIngresado-descuento;

	document.getElementById('txtIdResultado').value=resultado
}
//10 bis

function mostrarAumento()
{
	var importeIngresado;
	var descuentoIngresado; 
	var resultado;

	importeIngresado = document.getElementById('txtIdImporte').value;
	importeIngresado = parseInt(importeIngresado);
	descuentoIngresado = prompt("Ingrese el porcentaje del descuento.","");
	descuentoIngresado = parseInt(descuentoIngresado);

	resultado = importeIngresado - (importeIngresado*descuentoIngresado/100);

	document.getElementById('txtIdResultado').value = resultado;


}
