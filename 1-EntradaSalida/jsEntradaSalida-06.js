/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//txtIdNumeroUno
	//txtIdNumeroDos
	
	var numeroUno;
	var numeroDos;
	var resultado; 

	numeroUno = document.getElementById('txtIdNumeroUno').value; //el document.getElementById siempre devuelve como valor un texto. Es necesario transformar los datos.
		//numeroUno = parseInt(numeroUno); Se puede parsear después de definir cada variable.
	numeroDos = document.getElementById('txtIdNumeroDos').value;
		//numeroDos = parseInt(numeroDos);
	numeroUno = parseInt(numeroUno); //parseo numeroUno y lo guardo como numeroUno.
	numeroDos = parseInt(numeroDos); //repetir para la otra variable y volver ambos números valores númericos.

	resultado = numeroUno+numeroDos;

	
	alert("El resultado es: "+resultado);
	
	





}

