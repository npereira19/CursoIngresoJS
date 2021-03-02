/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
	
function comenzar()
{
	var numeroSecreto; 

	numeroSecreto = Math.floor(Math.random() * 100) + 1;
 	console.log(numeroSecreto);
 	

}

function verificar()
{
	var contadorIntentos;
 	var numeroIngresado;
	
	contadorIntentos = 0;	
	numeroIngresado = document.getElementById('txtIdNumero').value;
	numeroIngresado = parseInt(numeroIngresado);

	if(numeroIngresado == numeroSecreto)
	{
		contadorIntentos = contadorIntentos + 1;		
		alert("Usted es un ganador!!!! Y tan solo en "+contadorIntentos+" intentos.");
		document.getElementById('txtIdIntentos').value = contadorIntentos;
	}
	else
	{
		if(numeroIngresado < numeroSecreto)
		{
			contadorIntentos = contadorIntentos + 1;
			document.getElementById('txtIdIntentos').value = contadorIntentos;
			alert("Falta...");		
		}
		else
		{
			contadorIntentos = contadorIntentos + 1;
			document.getElementById('txtIdIntentos').value = contadorIntentos;
			alert("Se pasó...");
		}
		
	}
	


}