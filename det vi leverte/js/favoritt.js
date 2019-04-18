//henter verdiene som skal fylles i listen

hentJSON("https://hotell.difi.no/api/json/bergen/lekeplasser?", hentVerdier);


/*			Oppgave 8			*/
function hentVerdier(objekt)
{
	if(objekt != null)
	{
		//oppretter select i div med id velg
		var divVelg = document.getElementById("velg");
		var selector = document.createElement("select");
		selector.id = "velgElement";

		//setter makslengde på boksen til å være 10, ellers like lang som listeinnholdet
		if (objekt.entries.length > 10)
		{
			selector.size = 10;
		}
		else
		{
			selector.size = objekt.entries.length;
		}
		divVelg.appendChild(selector);

		//fyller select-listen med innhold (option)
		for (var i=0; i < objekt.entries.length; i++)
		{
			fyllListe(objekt.entries[i].latitude+","+objekt.entries[i].longitude, objekt.entries[i].navn, selector);
		}
	}
	else
	{
		//fyller listen med en feilmelding dersom det har skjedd noe galt
		fyllListe(0, "En feil har skjedd!");
	}
}

//fyller select med options
function fyllListe(latlong, visningstekst, selector)
{
	var option = document.createElement("option");
	option.text = visningstekst;
	option.onclick = function(){
		//printNermest(finnNermest(selector.options[selector.selectedIndex].value));
		valgtLatLong = selector.options[selector.selectedIndex].value;
		hentJSON("https://hotell.difi.no/api/json/bergen/dokart?", fyllKoordinater);

		};
	option.value = latlong;
	selector.add(option);
}

function printNermest(lavest)
{
	document.getElementById("infoLavestDistanse").innerHTML = "<h2>Nærmeste toalett:</h2><strong>Sted: </strong>" + lavest[1] + "<br><br><strong>Distanse: </strong>" + printDistanse(lavest[0]);
}



//finner det toalettet som er nærmest
function finnNermest()
{
	var distanser = [];
	
	for (var i=0; i < koordinater.length; i++)
	{
		distanser.push({distanse:beregnDistanse(valgtLatLong, koordinater[i].koordinater),navn:koordinater[i].plassering});
	}
	
	var lavestVerdi;
	var lavestSted;
	var lavest = [];
	
	for (var i=0; i < distanser.length; i++)
	{
		if(i == 0)
		{
			lavestVerdi = distanser[i].distanse;
			lavestSted = distanser[i].navn;
		}
		if(distanser[i].distanse < lavestVerdi)
		{
			lavestVerdi = distanser[i].distanse;
			lavestSted = distanser[i].navn;
		}
	}
	lavest.push(lavestVerdi, lavestSted);
	
	document.getElementById("infoLavestDistanse").innerHTML = "<h2>Nærmeste toalett:</h2><strong>Sted: </strong>" + lavest[1] + "<br><br><strong>Distanse: </strong>" + printDistanse(lavest[0]);
}
