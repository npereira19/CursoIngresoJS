/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;
	var apellido; 

	nombreIngresado = "Maria";
	apellido = "Lopez";

	nombreIngresado = prompt("Ingrese su nombre: " , "Nadie");
	apellido = prompt("Ingrese su apellido: " , "Nadie");

	//tomar un dato por ID
	//nombreIngresado=document.getElementById('txtIdNombre').value;
	//para mostrar dato por ID
	document.getElementById('txtIdNombre').value = nombreIngresado + " " + apellido;
	alert("su nombre es: " + nombreIngresado + ", " + apellido);
	console.log("su nombre es: " + nombreIngresado + ", " + apellido)

}

