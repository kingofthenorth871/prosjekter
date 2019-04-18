/*				OPPGAVE 6				*/
function getToaletter()
{
	hentJSON("https://hotell.difi.no/api/json/bergen/dokart?", initToaletter);
}

var infoVinduArray = [];//tabell med infovinduer
var innholdArray = [];//tabell med info som vises i vinduene
var markers = [];//tabell med markers


function initToaletter(toaletter)
{

var sentrer = {lat: 60.3932345, lng: 5.3252363};//Sentrer denne lokasjonen på kartet
var map = new google.maps.Map(document.getElementById('map'),
{
  zoom: 15,//Zoom in 15 på kartet
  center: sentrer//sentrer
});


//Ikon for herre og dame toalett for visning i infovindu
var mann='media/wc_male.png';
var dame='media/wc_female.png';


  for(var i = 0; i < toaletter.entries.length; i++){
    var toalettNr = parseInt(toaletter.entries[i].id);//hent toalett nummer
    var plass = toaletter.entries[i].plassering;//hent navn på plassering

    //posisjoner toaletter
    var pos = {lat: parseFloat(toaletter.entries[i].latitude), lng: parseFloat(toaletter.entries[i].longitude)}

    //Legg til markers på hvert sted
    var marker = new google.maps.Marker({
      position: pos,
      map:map,
      id: i
    });
    //Innhold som skal vises i info vinduet
    var vinduInnhold =  '<div id="content">' + toalettNr+'<br>' + plass +
                                '<p><img style="max-width:20%;"  src="'+mann+'">'+
                                '<img style="max-width:20%;"  src="'+dame+'"></p>';

    innholdArray.push(vinduInnhold);//Legg til vinduinnhold i array
    markers.push(marker);//Legg til markers i array
  }//end forEach


  for (var i = 0; i < innholdArray.length; i++) {
    var infowindow = new google.maps.InfoWindow({content: innholdArray[i]});//Legg til innhold i infovindu
        infoVinduArray.push(infowindow);//Legg til infovindu i array
  }//end forEach

  var currentInfoWindow = null;//Nåværende vindu som er åpen
  for(var i = 0; i < innholdArray.length; i++){
    markers[i].addListener('click', function(){ //funksjon for å klikke på markører med infovindu

      //Lukk vindu hvis et innholdsvindu allerede er åpen
        if (currentInfoWindow != null) {
            currentInfoWindow.close();
          }//end if
        infoVinduArray[this.id].open(map, markers[this.id]);
        currentInfoWindow = infoVinduArray[this.id];
});//end addListener
}//end forEach

}//end initToaletter


//utskrift av liste med toaletter
function printToaletter(objekt)
{
	if(objekt != null)
	{
		//lager en tabell hvor dataen fra kilden legges inn
		var innhold = "<table id='tblToaletter'><tr><th id='tblHeaderToalett'>ID</th><th>Toalett</th><tr>";
		
		//itererer over innholder i objektet
		for (var i=0; i < objekt.entries.length; i++)
		{
			innhold += "<td>"+objekt.entries[i].id+"</td><td>" + objekt.entries[i].plassering + "</td></tr>";
		}
		innhold += "</table>";

		//viser innholdet i en div
		document.getElementById("jsontToaletter").innerHTML = innhold;
	}
	else
	{
		document.getElementById("jsontToaletter").innerHTML = "En feil har skjedd";
	}
}
