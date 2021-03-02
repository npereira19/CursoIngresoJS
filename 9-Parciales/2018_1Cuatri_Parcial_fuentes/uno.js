
function mostrar()
{
	var	anchoRectangulo;	
	var largoRectangulo;
	var perimetroRectangulo;

	anchoRectangulo = prompt("ingrese el ancho del rectangulo.","");
	anchoRectangulo = parseInt(anchoRectangulo);
	largoRectangulo = prompt("Ingrese el largo del rectangulo.","");
	largoRectangulo = parseInt(largoRectangulo);
	perimetroRectangulo = anchoRectangulo*2 + largoRectangulo*2;

	alert("El perímetro es: "+perimetroRectangulo+" metros.");

}
