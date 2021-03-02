/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	
	var precioProductoUno;
	var precioProductoDos;
	var precioProductoTres;
	var sumaProductos;

	precioProductoUno = document.getElementById('txtIdPrecioUno').value;
	precioProductoUno = parseInt(precioProductoUno);
	precioProductoDos = document.getElementById('txtIdPrecioDos').value;
	precioProductoDos = parseInt(precioProductoDos);
	precioProductoTres = document.getElementById('txtIdPrecioTres').value;
	precioProductoTres = parseInt(precioProductoTres);
	sumaProductos = precioProductoUno+precioProductoDos+precioProductoTres;


	alert("$"+sumaProductos);

}

function Promedio () 

{
	
	var precioProductoUno;
	var precioProductoDos;
	var precioProductoTres;
	var promedioProductos;

	precioProductoUno = document.getElementById('txtIdPrecioUno').value;
	precioProductoUno = parseInt(precioProductoUno);
	precioProductoDos = document.getElementById('txtIdPrecioDos').value;
	precioProductoDos = parseInt(precioProductoDos);
	precioProductoTres = document.getElementById('txtIdPrecioTres').value;
	precioProductoTres = parseInt(precioProductoTres);
	promedioProductos = (precioProductoUno+precioProductoDos+precioProductoTres)/3;

	alert("$"+promedioProductos);

}
function PrecioFinal () 
{
	
	var precioProductoUno;
	var precioProductoDos;
	var precioProductoTres;
	var sumaProductos;
	var precioFinalConIva;

	precioProductoUno = document.getElementById('txtIdPrecioUno').value;
	precioProductoUno = parseInt(precioProductoUno);
	precioProductoDos = document.getElementById('txtIdPrecioDos').value;
	precioProductoDos = parseInt(precioProductoDos);
	precioProductoTres = document.getElementById('txtIdPrecioTres').value;
	precioProductoTres = parseInt(precioProductoTres);	
	sumaProductos = precioProductoUno+precioProductoDos+precioProductoTres;
	precioFinalConIva = sumaProductos + (sumaProductos*21/100);

	alert("El precio final es:"+" $"+precioFinalConIva);
	
}