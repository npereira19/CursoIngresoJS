function mostrar()
{
	
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
	
	if(edad==15)
	{
		alert("Niña bonita");		
	}//estructura correcta del if

}//FIN DE LA FUNCIÓN





 /*Testing



 if(edad)
 {
 	alert("verdadero");
 }
 else
 {
 	alert("falso"); 
 }

 el if, todo lo que detecte como 0, es falso. Todo aquello que sea diferente a 0, es verdadero. 

 False es una forma de decir 0 dentro del programa.