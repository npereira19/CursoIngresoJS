function mostrar()
{
	
	var contadorNumeros; //Para el "for", se define dentro de la función. Se utiliza "i" (indice o iteración) por convención.
	var numeroRandom;
	var contadorDe1;
	var contadorDe2;
	var contadorDe3;
	var contadorDe4;
	var contadorDe5;
	var contadorDe6;
	var contadorDe7;
	var contadorDe8;
	var contadorDe9;
	var contadorDe10;

	contadorDe1 = 0;
	contadorDe2 = 0;
	contadorDe3 = 0;
	contadorDe4 = 0;
	contadorDe5 = 0;
	contadorDe6 = 0;
	contadorDe7 = 0;
	contadorDe8 = 0;
	contadorDe9 = 0;
	contadorDe10 = 0;
	

	for(contadorNumeros = 0 ; contadorNumeros < 10000; contadorNumeros++) //Es igual al while. Toda la data va dentro de un mismo renglón para mantener la info junta. 
	{
		numeroRandom = Math.floor(Math.random()*10) + 1;
		console.log(numeroRandom);
		switch(numeroRandom)
		{
			case 1:
				contadorDe1++;
				break;
			case 2:
				contadorDe2++;
				break;
			case 3:
				contadorDe3++;
				break;
			case 4:
				contadorDe4++;
				break;
			case 5:
				contadorDe5++;
				break;
			case 6:
				contadorDe6++;
				break;
			case 7:
				contadorDe7++;
				break;
			case 8:
				contadorDe8++;
				break;
			case 9:
				/*if(contador<40)
				{
					continue;
				}*///esto sirve para que el numero 9 no se muestre hasta que el contador llegue a 40.
				contadorDe9++;
				break;
			case 10:
				contadorDe10++;
				break;
		}

	}//for
	console.log("#1: "+(contadorDe1/contadorNumeros*100));
	console.log("#2: "+(contadorDe2/contadorNumeros*100));
	console.log("#3: "+(contadorDe3/contadorNumeros*100));
	console.log("#4: "+(contadorDe4/contadorNumeros*100));
	console.log("#5: "+(contadorDe5/contadorNumeros*100));
	console.log("#6: "+(contadorDe6/contadorNumeros*100));
	console.log("#7: "+(contadorDe7/contadorNumeros*100));
	console.log("#8: "+(contadorDe8/contadorNumeros*100));
	console.log("#9: "+(contadorDe9/contadorNumeros*100));
	console.log("#10: "+(contadorDe10/contadorNumeros*100));

}