/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var largoDelTerreno;
	var anchoDelTerreno;
	var perimetroDelTerreno;
	var alambreNeceseario;


	largoDelTerreno = document.getElementById('txtIdLargo').value;
	largoDelTerreno = parseFloat(largoDelTerreno);
	anchoDelTerreno = document.getElementById('txtIdAncho').value;
	anchoDelTerreno = parseFloat(anchoDelTerreno);
	perimetroDelTerreno = largoDelTerreno*2+anchoDelTerreno*2
	alambreNeceseario = perimetroDelTerreno*3;

	alert("Se necesitan comprar "+alambreNeceseario+" metros de alambre.");

}
function Circulo () 
{

	var radioDelTerreno;
	var diametroDelTerreno;
	var circunferenciaDelTerreno;
	var alambreNeceseario;


	radioDelTerreno = document.getElementById('txtIdRadio').value;
	radioDelTerreno = parseFloat(radioDelTerreno);
	diametroDelTerreno = radioDelTerreno * 2;
	circunferenciaDelTerreno = diametroDelTerreno*3.14;
	alambreNeceseario = circunferenciaDelTerreno*3;

	alert("Se necesitan comprar "+alambreNeceseario+" metros de alambre.");

}
function Materiales () 
{

	var largoDelTerreno;
	var anchoDelTerreno;
	var areaDelTerreno;
	var bolsasCementoNecesarias;
	var BolsasCalNecesarias;


	largoDelTerreno = document.getElementById('txtIdLargo').value;
	largoDelTerreno = parseInt(largoDelTerreno);
	anchoDelTerreno = document.getElementById('txtIdAncho').value;
	anchoDelTerreno = parseInt(anchoDelTerreno);
	areaDelTerreno = largoDelTerreno*anchoDelTerreno;
	bolsasCementoNecesarias = areaDelTerreno*2;
	BolsasCalNecesarias = areaDelTerreno*3;

	alert("Para un terreno de "+areaDelTerreno+"m2, se necesitan "+bolsasCementoNecesarias+" bolsas de cemento, y "+BolsasCalNecesarias+" bolsas de cal.");

}