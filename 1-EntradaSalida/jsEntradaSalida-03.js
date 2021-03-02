/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//nombreIngresado= txtIdNombre.value; //el value hace que en el alert aparezca el valor ingresado. 
	nombreIngresado=document.getElementById('txtIdNombre').value; //realiza la misma acción que la linea 7. Buscar el ID en el html 
	alert(nombreIngresado);


}


