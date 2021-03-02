/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldoIngresado
	var aumento
	var nuevoSueldo


	sueldoIngresado = document.getElementById('txtIdSueldo').value;
	sueldoIngresado = parseInt(sueldoIngresado);
	aumento = sueldoIngresado*10/100;	
	nuevoSueldo = sueldoIngresado+aumento;

	document.getElementById('txtIdResultado').value = nuevoSueldo

}


/* 9 bis */
function mostrarAumento()
{

	var sueldoIngresado;
	var aumentoIngresado;
	var resultado;

	sueldoIngresado = document.getElementById('txtIdSueldo').value;
	sueldoIngresado = parseInt(sueldoIngresado);
	aumentoIngresado = prompt("Ingrese el porcentaje del aumento:","");
	aumentoIngresado = parseInt(aumentoIngresado);

	resultado = sueldoIngresado+(sueldoIngresado*aumentoIngresado/100);

	document.getElementById('txtIdResultado').value = resultado;

}
