/*				OPPGAVE 6				*/

//henter listen med lekeplasser og skriver de til tabellen
hentJSON("https://hotell.difi.no/api/json/bergen/lekeplasser?", printLekeplasser);

function getLekeplasser()
{
	hentJSON("https://hotell.difi.no/api/json/bergen/lekeplasser?", initLekeplasser);
}

var infoVinduArray = [];
var innholdArray = [];
var markers = [];

function initLekeplasser(lekeplasser) {

var sentrer = {lat: 60.395053, lng: 5.319800};//Sentrer denne posisjonen på kartet
var map = new google.maps.Map(document.getElementById('kart'),
{
  zoom: 12, //zoom inn
  center: sentrer//Sentrer på kartet
});

var lekeIkon = 'media/lekeIkon.png';//ikon for alle lekeplasser

  for(var i = 0; i < lekeplasser.entries.length; i++){
	var lekeID = parseInt(lekeplasser.entries[i].id);//hent lekeplass nummer
	var lekePlassNavn = lekeplasser.entries[i].navn;//hent lekeplass navn

	//posisjoner lekeplasser
	var pos = {lat: parseFloat(lekeplasser.entries[i].latitude), lng: parseFloat(lekeplasser.entries[i].longitude)}

	//Legg til markers på hvert sted
	var marker = new google.maps.Marker({
	  position: pos,
	  map:map,
	  id: i
	});
	//Innhold som skal vises i info vinduet: lekeplass ID, lekeplass navn og lekeplass ikon
	var vinduInnhold =  '<div id="content">' + lekeID+'<br>' + lekePlassNavn +
								'<p><img style="max-width:20% "src="'+lekeIkon+'"></p>';

	innholdArray.push(vinduInnhold);//Legg til vinduinnhold i array
	markers.push(marker);//Legg til markers i neste array
  }//end forEach


  for (var i = 0; i < innholdArray.length; i++) {
	var infowindow = new google.maps.InfoWindow({content: innholdArray[i], maxWidth:180, maxWidth:180});//Legg til innhold i infovindu
		infoVinduArray.push(infowindow);//Legg til infovindu i ny array
  }//end forEach

  var currentInfoWindow = null;//Nåværende vindu som er åpen
  for(var i = 0; i < innholdArray.length; i++){
	markers[i].addListener('click', function(){ //funksjon for å klikke på markører som viser infovindu

	//Lukk vindu hvis et innholdsvindu allerede er åpen
	  if (currentInfoWindow != null) {
		  currentInfoWindow.close();
		}//end if
		infoVinduArray[this.id].open(map, markers[this.id]);//Viser innhold på hver markør
		currentInfoWindow = infoVinduArray[this.id];
	});//end addListener
}//end for
}//end initMap


function printLekeplasser(objekt)
{
	if(objekt != null)
	{
		//lager en tabell hvor dataen fra kilden legges inn
		var innhold = "<table class='tblStyle'><tr><th class='tblHeader'>ID</th><th class='tblHeader'>Lekeplass</th><tr>";

		//itererer over innholder i objektet
		for (var i=0; i < objekt.entries.length; i++)
		{
			innhold += "<td>"+objekt.entries[i].id+"</td><td>" + objekt.entries[i].navn + "</td></tr>";
		}

		innhold += "</table>";

		//viser innholdet i en div
		document.getElementById("jsonLekeplass").innerHTML = innhold;
	}
	else
	{
		document.getElementById("jsonLekeplass").innerHTML = "En feil har skjedd";
	}
}
