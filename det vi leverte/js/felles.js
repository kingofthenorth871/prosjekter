/* Mobil-menyknapp */
function clickmeny(id){
  console.log(id);
  var t = document.getElementById(id)
  if(t.style.display) {
    if(t.style.display === "none"){
      t.style.display = "block";
    }
    else{
      t.style.display = "none";
    }
  }
  else{
    t.style.display = "none";
  }
  }

/*				MENYKNAPPER DESKTOP				*/  
function klikkHjem()
{
	 window.open("index.html","_self"); 
}
function klikkToalettsok()
{
	window.open("toalettsok.html","_self");
}
function klikkLekeplasser()
{
	window.open("lekeplasser.html","_self");
}
function klikkFavoritt()
{
	window.open("favoritt.html","_self"); 
}
function klikkArbeidsledighet()
{
	window.open("arbeidsledighet.html","_self"); 
}



/*					GLOBALE VARIABLER					*/
var sokeResultat = [];
var sokeObjekt = [];
var koordinater = [];
var valgtLatLong = "";


/*					Oppgave 2					*/

//henter JSON-objekt fra ekstern url og kaller funksjon med dataen som parameter
function hentJSON(url, callback)
{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200)
		{
			var innhold = this.responseText;
			var obj = JSON.parse(innhold);
			
			if(obj)
			{
				if( typeof callback === 'function')
				{
					callback(obj);
				}
			}
			else
			{
				callback(null);
			}
		}
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}



/*   Oppgave 7 */

// Beregner distansen mellom to punkter ved bruk av Haversine-formelen
function beregnDistanse(latlong1, latlong2)
{
	//Deler opp kordinatene i bredde-(lat) og lengdegrader(long)
	var lat1 = latlong1.split(',')[0];
	var long1 = latlong1.split(',')[1];
	var lat2 = latlong2.split(',')[0];
	var long2 = latlong1.split(',')[1];
	
	//Jordens radius i kilometer
	var radius = 6371; 
	
	//Matematiske beregninger ved bruke Haversine-formelen
	var rad1 = gradTilRadial(lat1);
	var rad2 = gradTilRadial(lat2);
	var delta1 = gradTilRadial(lat2-lat1);
	var delta2 = gradTilRadial(long2-long1);

	var a = Math.sin(delta1/2) * Math.sin(delta1/2) +
	Math.cos(rad1) * Math.cos(rad2) *
	Math.sin(delta2/2) * Math.sin(delta2/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

	var d = radius * c;
	
	return(d);
}

function gradTilRadial(grad)
{
	return grad * (Math.PI/180)
}

//fyller opp "koordinater" med koordinater til de ulike toalettene
function fyllKoordinater(objekt)
{
	for (var i=0; i < objekt.entries.length; i++)
	{
		koordinater.push({id:objekt.entries[i].id,koordinater: objekt.entries[i].latitude+","+objekt.entries[i].longitude, plassering:objekt.entries[i].plassering});
	}
	finnNermest();
}


//viser distansen visuelt for brukeren med logiske størrelser
function printDistanse(distanse)
{	
	distanse = Math.round(distanse * 1000)/1000;
	
	uttekst = "";
	
	if(distanse<1)
	{
		uttekst+= distanse * 1000 + " meter";
	}
	else if(distanse>10)
	{
		uttekst+= distanse/10 + " mil";
	}
	else
	{
		uttekst+= distanse + " kilometer";
	}
	return uttekst;
}







