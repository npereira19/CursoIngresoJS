/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */


 //A Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
/*function CalcularPrecio () 
{
 
	var cantidadLamparas;
	var precioBruto;
	var marcaLampara;
	var descuento;
	var porcentaje;
	var precioFinal;

	
	cantidadLamparas = document.getElementById('txtIdCantidad').value;
	cantidadLamparas = parseInt(cantidadLamparas);
	precioBruto = 35*cantidadLamparas;
	marcaLampara = document.getElementById('Marca').value;
	descuento = 0;


	if(cantidadLamparas>5)
	{
		porcentaje = 50;
	}
	else
	{
		if(cantidadLamparas==5)
		{
			if(marcaLampara=="ArgentinaLuz")
			{
				porcentaje = 40;
			}
			else
			{
				porcentaje=30;
			}
		}
		else
		{
			if(cantidadLamparas==4)
			{
				if(marcaLampara=="ArgentinaLuz" || marcaLampara=="FelipeLamparas")
				{
					porcentaje = 25;
				}
				else
				{
					porcentaje = 20;
				}
			}
			else
			{
				if(cantidadLamparas == 3)
				{
					if(marca=="ArgentinaLuz")
					{
						porcentaje=15;
					}
					else
					{
						if(marca=="FelipeLamparas")
						{
							porcentaje = 10
						}
						else
						{
							porcentaje  = 5
						}
					}
				}
				else
				{
					porcentaje = 0
				}
			}
		}

	}


	descuento = precioBruto*porcentaje/100;
	precioFinal = precioBruto - descuento; 
	document.getElementById('txtIdprecioDescuento').value = precioFinal;

}*/

/*	Solo Switch
	6 o más descuento del 50%
	5 "ArgentinaLuz" 40 %, el resto 30%
	4 "ArgentinaLuz"/ "FelipeLamparas" descuento 25, el resto 20
	3 "ArgentinaLuz" descuento 15, FelipeLamparas 10, otra marca 5

function CalcularPrecio () 
{	

	var cantidadLamparas;
	var precioBruto;
	var marcaLampara;
	var descuento;
	var porcentaje;
	var precioFinal;

	cantidadLamparas = document.getElementById('txtIdCantidad').value;
	cantidadLamparas = parseInt(cantidadLamparas);
	precioBruto = 35*cantidadLamparas;
	marcaLampara = document.getElementById('Marca').value;
	descuento = 0;

	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje = 0;
			break;
		case 3:
			switch(marcaLampara)
			{
				case "ArgentinaLuz":
					porcentaje = 15;
					break;
				case "FelipeLamparas":
					porcentaje = 10;
					break;
				default:
					porcentaje = 5;
					break;
			}
			break;
		case 4:
			switch(marcaLampara)
			{	
				case "ArgentinaLuz":
				case "FelipeLamparas":
					porcentaje = 25;
					break;
				default:
					porcentaje = 20;
					break;
			}
			break;
		case 5:
			switch(marcaLampara)
			{	
				case "ArgentinaLuz":
					porcentaje = 40;
					break;
				default:
					porcentaje = 30;
					break;
			}
			break;
		default:
			porcentaje = 50;
			break;
	}

	descuento = precioBruto*porcentaje/100;
	precioFinal = precioBruto - descuento; 
	document.getElementById('txtIdprecioDescuento').value = precioFinal;

}*/

/*	Switch(cantidad) con if(marca) adentro
	6 o más descuento del 50%
	5 "ArgentinaLuz" 40 %, el resto 30%
	4 "ArgentinaLuz"/ "FelipeLamparas" descuento 25, el resto 20
	3 "ArgentinaLuz" descuento 15, FelipeLamparas 10, otra marca 5

function CalcularPrecio ()
{

	var cantidadLamparas;
	var precioBruto;
	var marcaLampara;
	var descuento;
	var porcentaje;
	var precioFinal;

	cantidadLamparas = document.getElementById('txtIdCantidad').value;
	cantidadLamparas = parseInt(cantidadLamparas);
	precioBruto = 35*cantidadLamparas;
	marcaLampara = document.getElementById('Marca').value;
	descuento = 0;

	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje = 0;
			break;
		case 3:
			if (marcaLampara == "ArgentinaLuz")
			{
				porcentaje = 15;
			}
			else
			{
				if(marcaLampara == "FelipeLamparas")
				{
					porcentaje = 10;
				}
				else
				{
					porcentaje = 5;
				}

			}
			break;
		case 4:
			if(marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")
			{
				porcentaje = 25;
			}
			else
			{
				porcentaje = 20;
			}
			break;
		case 5:
			if(marcaLampara == "ArgentinaLuz")
			{
				porcentaje = 40;
			}
			else
			{
				porcentaje = 30;
			}
			break;
		default:
			porcentaje = 50;
			break;



	}

	descuento = precioBruto*porcentaje/100;
	precioFinal = precioBruto - descuento; 
	document.getElementById('txtIdprecioDescuento').value = precioFinal;


}*/


/*	if (cantidad) con Switch adentro (marca)
	6 o más descuento del 50%
	5 "ArgentinaLuz" 40 %, el resto 30%
	4 "ArgentinaLuz"/ "FelipeLamparas" descuento 25, el resto 20
	3 "ArgentinaLuz" descuento 15, FelipeLamparas 10, otra marca 5
	E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
	*/

function CalcularPrecio ()
{

	var cantidadLamparas;
	var precioBruto;
	var marcaLampara;
	var descuento;
	var porcentaje;
	var precioFinal;
	var impuesto;
	var precioConImpuesto;

	cantidadLamparas = document.getElementById('txtIdCantidad').value;
	cantidadLamparas = parseInt(cantidadLamparas);
	precioBruto = 35*cantidadLamparas;
	marcaLampara = document.getElementById('Marca').value;
	descuento = 0;

	if(cantidadLamparas == 1 || cantidadLamparas == 2)
	{
		porcentaje = 0;
	}
	else
		if(cantidadLamparas == 3)
		{
			switch(marcaLampara)
			{
				case "ArgentinaLuz":
					porcentaje = 15;
					break;
				case "FelipeLamparas":
					porcentaje = 10;
					break;
				default:
					porcentaje = 5;
					break;
			}
		}
		else
		{
			if(cantidadLamparas == 4)
			{
				switch(marcaLampara)
				{
					case "ArgentinaLuz":
					case "FelipeLamparas":
						porcentaje = 25;
						break;
					default:
						porcentaje = 20;
						break;
				}
			}
			else
			{
				if(cantidadLamparas == 5)
				{	
					switch(marcaLampara)
					{
						case "ArgentinaLuz":
							porcentaje = 40;
							break;
						default:
							porcentaje = 30;
							break;
					}
				}
				else
				{
					porcentaje = 50;
				}
			}
		}

	descuento = precioBruto*porcentaje/100;
	precioFinal = precioBruto - descuento; 
	impuesto = precioFinal*10/100
	if(precioFinal > 120)
	{
		precioConImpuesto = precioFinal+impuesto;
		alert("usted pago "+impuesto+" de IIBB");
		 
	}
	else
	{
		precioConImpuesto = precioFinal;
	}

	document.getElementById('txtIdprecioDescuento').value = precioConImpuesto;




}

