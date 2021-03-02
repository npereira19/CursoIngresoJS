/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	
	var temperaturaEnFahrenheit;
	var temperaturaEnCentigrados;


	temperaturaEnFahrenheit = document.getElementById('txtIdTemperatura').value;
	temperaturaEnFahrenheit = parseInt(temperaturaEnFahrenheit);
	temperaturaEnCentigrados = (temperaturaEnFahrenheit-32)/1.8;

	alert(temperaturaEnFahrenheit+" grados Fahrenheit son "+temperaturaEnCentigrados+" grados centígrados.");

}

function CentigradosFahrenheit () 
{

	var temperaturaEnCentigrados;
	var temperaturaEnFahrenheit;


	temperaturaEnCentigrados = document.getElementById('txtIdTemperatura').value;
	temperaturaEnCentigrados = parseInt(temperaturaEnCentigrados);
	temperaturaEnFahrenheit = (temperaturaEnCentigrados *1.8)+32;

	alert(temperaturaEnCentigrados+" grados centígrados son "+temperaturaEnFahrenheit+" grados Fahrenheit.");
	
}
