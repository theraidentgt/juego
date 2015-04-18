window.onload = function()
{
	var rangoMaximo = Math.floor((Math.random() * 200) + 50);
	var intentos =0;
	console.log("adivina" + rangoMaximo);
	nom_div("intentos").innerHTML = "Intento # " + intentos+ " de 20";
	nom_div("rangoAdivina").innerHTML = "El número se encuntra entre: "+(rangoMaximo-Math.floor((Math.random()*20)+5))+" y "+(rangoMaximo+Math.floor((Math.random()*20)+5));
	nom_div("comprobar").addEventListener('click', function(event)
	{
		if(intentos < 20)
		{
			intentos++;
			nom_div("intentos").innerHTML = "Intento # "+intentos+" de 20";
			if(nom_div("adivina").value > rangoMaximo + 20)
			{
				nom_div("pista").innerHTML = "Frio";	
			}
			else if(nom_div("adivina").value > rangoMaximo + 10)
			{
				nom_div("pista").innerHTML = "Caliente";		
			}
			else if(nom_div("adivina").value > rangoMaximo + 2)
			{
				nom_div("pista").innerHTML = "Muy Caliente";		
			}			
			else if(nom_div("adivina").value < rangoMaximo + 20)
			{
				nom_div("pista").innerHTML = "Frio";		
			}
			else if(nom_div("adivina").value < rangoMaximo + 10)
			{
				nom_div("pista").innerHTML = "Caliente";		
			}
			else if(nom_div("adivina").value < rangoMaximo + 2)
			{
				nom_div("pista").innerHTML = "Muy Caliente";		
			}			
			if(nom_div("adivina").value == rangoMaximo)
			{
				nom_div("ganador").innerHtml = "you win";
				alert("you win");
				location.reload();	
			}	

		}
		else
		{
			alert("you lose");
			location.reload();
		}
	});	
	
	function nom_div(div)
	{
		return document.getElementById(div);
	}	
}