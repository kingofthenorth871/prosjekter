//henter data og legger det i variablen toaletter
var toaletter;
hentJSON("https://hotell.difi.no/api/json/bergen/dokart?", hentData);

function hentData(objekt)
{
	toaletter = objekt;
}


/* Infoknapp */

function clickprog(id){
  console.log(id);
  var t = document.getElementById(id)
  if(t.style.visibility) {
    if(t.style.visibility === "hidden"){
      t.style.visibility = "visible";
    }
    else{
      t.style.visibility = "hidden";
    }
  }
  else{
    t.style.visibility = "hidden";
  }
  }


/* Objekt Script */

//toalettene i json format hentet inn å satt inn i en variabel.

var latitudeInnhold = [];
var idInnhold = [];
var longtitudeInnhold = [];
var plasseringInnhold = [];




//henter relevante elementer fra checkBoxene og gjør de om til et format som kan brukes videre i oppgaven

function hentForm(){

var mann;
var kvinne;
var rullestoltilgang;
var stellerom;
var gratis;

if(document.getElementById("checkboxmann").checked == true)
{
      mann = 1;
}
if (document.getElementById("checkboxmann").checked == false)
{
      mann = "NULL";
}
if(document.getElementById("checkboxkvinne").checked == true)
{
      kvinne = 1;
}
if (document.getElementById("checkboxkvinne").checked == false)
{
      kvinne = "NULL";
}
if(document.getElementById("checkboxrullestoltilgang").checked == true)
{
      rullestoltilgang = 1;
}
if (document.getElementById("checkboxrullestoltilgang").checked == false)
{
      rullestoltilgang = "NULL";
}
if(document.getElementById("checkboxstellerom").checked == true)
{
      stellerom = 1;
}
if (document.getElementById("checkboxstellerom").checked == false)
{
      stellerom = "NULL";
}
if(document.getElementById("checkboxgratis").checked == true)
{
      maksPris = "NULL";
}


var maksPris = document.getElementById("makspris").value;
var åpenklokkeslett = document.getElementById("åpenklokkeslett").value;
var åpent = document.getElementById("åpent").checked;

var resultat = {mann, kvinne, rullestoltilgang, stellerom, gratis, maksPris, åpenklokkeslett, åpent}

return resultat;

}


//metode som filtrerer etter hva vi har slått inn i checkboksene og søkeboksene. Sjekker for innholdet i variabelen toaletter at alt som er slått
// inn i checkboksene og searchboksene stemmer overrens med hver entry. dvs for hver entry unshifter vi enten "true" eller "false" inn i en liste,
//videre sjekker vi denne listen opp mot en annen liste som kun inneholder "true". Om begge listene stemmer overrens legger vi entrien det er snakk om
//videre i en variabel som senere blir returert i en liste.

  function avansertSøk(){

	var innhold = "<table class='tblStyle'><tr><th class='tblHeader'>ID</th><th class='tblHeader'>Plassering</th><tr>";

  var filter = hentForm();

  var list =[];

  var truthchecker =["true","true","true","true","true","true","true", "true"];       //liste hvor vi pusher inn enten true eller false om alt etter om vilkårene er oppfylt for det aktuelle toalettet.

  var truthchecker2 =["true","true","true","true","true","true","true", "true"];     //liste vi ikke endrer men som kun brukes til å sammenligne den originale listen med.


  var array = Object.keys(filter);

  var arrayTruthchecker = Object.keys(truthchecker);

  var arrayTruthchecker2 = Object.keys(truthchecker2);


  if (filter[array[0]]==true){

    list.entries[0]="1"
  }

  if (filter[array[1]]==true){

    list.entries[1]="1"
  }

  if (filter[array[2]]==true){

    list.entries[2]="1"
  }

  if (filter[array[3]]==true){

    list.entries[3]="1"
  }

  latitudeInnhold = [];
  longtitudeInnhold = [];
  idInnhold = [];
  plasseringInnhold = [];

// itererer over alle toalettene for å sjekke om de stemmer overrens med vilkårene våre.
for (var i=0; i < toaletter.entries.length; i++){

//sjekker om dato og tidspunkt stemmer overrens med tidspunktet hær og nå.
if(document.getElementById("åpent").checked == true){

var date = new Date();

var hours = date.getHours();

var minutes = date.getMinutes();

var tidspunktNå = hours + minutes/100;

var day = date.getDay();

var toaletterTid = toaletter.entries[i].tid_hverdag;

var splitid_hverdag = toaletterTid.split("-", 2);

var tidspunktFra =  parseFloat(splitid_hverdag[0]);
var tidspunktTil = parseFloat(splitid_hverdag[1]);

var toaletterTidLørdag = toaletter.entries[i].tid_lordag;

var splitid_lørdag = toaletterTidLørdag.split("-", 2);

var tidspunktFraLørdag = parseFloat(splitid_lørdag[0]);
var tidspunktTilLørdag = parseFloat(splitid_lørdag[1]);

var toaletterTidSøndag = toaletter.entries[i].tid_sondag;

var splitid_søndag = toaletterTidSøndag.split("-", 2);

var tidspunktFraSøndag=  parseFloat(splitid_søndag[0]);
var tidspunktTilSøndag = parseFloat(splitid_søndag[1]);


if (day ==1 || day==2 || day==3 || day==4 ||day==5) {

      if(tidspunktNå<tidspunktFra || tidspunktNå>tidspunktTil) {
         truthchecker.unshift("false");
			}

			if(tidspunktNå>tidspunktFra && tidspunktNå<tidspunktTil) {
         truthchecker.unshift("true");
			 }

			 if(tidspunktFra=="NULL") {
		 		 truthchecker.unshift("false");
		 	 }

}

if (day==6) {

	if(tidspunktNå<tidspunktFraLørdag || tidspunktNå>tidspunktTilLørdag) {
		 truthchecker.unshift("false");
	}

	if(tidspunktNå>tidspunktFraLørdag && tidspunktNå<tidspunktTilLørdag) {
		 truthchecker.unshift("true");
	 }

	 if(tidspunktFraLørdag=="NULL") {
 		 truthchecker.unshift("false");
 	 }

}

if (day ==0) {

	if(tidspunktNå<tidspunktFraSøndag || tidspunktNå>tidspunktTilSøndag) {
		 truthchecker.unshift("false");
	}

	if(tidspunktNå>tidspunktFraSøndag && tidspunktNå<tidspunktTilSøndag) {
		 truthchecker.unshift("true");
	 }

	 if(tidspunktFraSøndag=="NULL") {
 		 truthchecker.unshift("false");
 	 }

}


}


if(document.getElementById("åpent").checked == false){
  truthchecker.unshift("true");
}


//sjekker den aktuelle dag å ser om toalettet er åpent innenfor det tidspunktet vi spesifiserer
if(document.getElementById("åpenklokkeslett").value==""){
truthchecker.unshift("true");
}

if(document.getElementById("åpenklokkeslett").value!=""){

	var date = new Date();

	var hours = date.getHours();

	var minutes = date.getMinutes();

	var tidspunktNå = hours + minutes/100;

	var day = date.getDay();

	var toaletterTid = toaletter.entries[i].tid_hverdag;

	var splitid_hverdag = toaletterTid.split("-", 2);

	var tidspunktFra =  parseFloat(splitid_hverdag[0]);
	var tidspunktTil = parseFloat(splitid_hverdag[1]);

	var toaletterTidLørdag = toaletter.entries[i].tid_lordag;

	var splitid_lørdag = toaletterTidLørdag.split("-", 2);

	var tidspunktFraLørdag =  parseFloat(splitid_lørdag[0]);
	var tidspunktTilLørdag = parseFloat(splitid_lørdag[1]);

	var toaletterTidSøndag = toaletter.entries[i].tid_sondag;

	var splitid_søndag = toaletterTidSøndag.split("-", 2);

	var tidspunktFraSøndag=  parseFloat(splitid_søndag[0]);
	var tidspunktTilSøndag = parseFloat(splitid_søndag[1]);

var day = date.getDay();


  var inputFraÅpenKlokkeslett = document.getElementById("åpenklokkeslett").value;

// i dag
if(inputFraÅpenKlokkeslett>tidspunktNå){

//hverdag
if (day ==1 || day==2 || day==3 || day==4 ||day==5) {

	if(toaletter.entries[i].tid_hverdag=="NULL"){
		 truthchecker.unshift("false");
	 }

	 if(tidspunktFra<inputFraÅpenKlokkeslett && tidspunktTil>inputFraÅpenKlokkeslett && toaletter.entries[i].tid_hverdag!="NULL") {
	 	 truthchecker.unshift("true");
	 }

	 if(tidspunktFra>inputFraÅpenKlokkeslett || tidspunktTil<inputFraÅpenKlokkeslett && toaletter.entries[i].tid_hverdag!="NULL") {
		 truthchecker.unshift("false");
	 }
	 }

//lørdag
		 if(day==6){
      if(toaletter.entries[i].tid_lordag=="NULL"){
		     truthchecker.unshift("false");
			 }

			 if(inputFraÅpenKlokkeslett>tidspunktFraLørdag && inputFraÅpenKlokkeslett<tidspunktTilLørdag&&toaletter.entries[i].tid_lordag!="NULL") {
		 		 truthchecker.unshift("true");
		 	 }

		 	 if(inputFraÅpenKlokkeslett<tidspunktFraLørdag || inputFraÅpenKlokkeslett>tidspunktTilLørdag&&toaletter.entries[i].tid_lordag!="NULL") {
		  		 truthchecker.unshift("false");
		  	 }

		 }

//søndag
		  if(day==0) {

				if(toaletter.entries[i].tid_sondag=="NULL"){
			     truthchecker.unshift("false");
				 }

				if(inputFraÅpenKlokkeslett>tidspunktFraSøndag && inputFraÅpenKlokkeslett<tidspunktTilSøndag&&toaletter.entries[i].tid_sondag!="NULL") {
					 truthchecker.unshift("true");
				 }

				 if(inputFraÅpenKlokkeslett<tidspunktFraSøndag || inputFraÅpenKlokkeslett>tidspunktTilSøndag&&toaletter.entries[i].tid_sondag!="NULL") {
					 truthchecker.unshift("false");
				 }
			}

}

//om inputter er mindre enn tidspunktet nå, så sjekker funksjonen om tidspunktet er innenfor dagen etter.
if(inputFraÅpenKlokkeslett<tidspunktNå) {


	if (day ==1 || day==2 || day==3 || day==4) {

		if(toaletter.entries[i].tid_hverdag=="NULL"){

 truthchecker.unshift("false");
		}

		 if(tidspunktFra<inputFraÅpenKlokkeslett && tidspunktTil>inputFraÅpenKlokkeslett&&toaletter.entries[i].tid_hverdag!="NULL") {
		 	 truthchecker.unshift("true");
		 }

		 if(tidspunktFra>inputFraÅpenKlokkeslett || tidspunktTil<inputFraÅpenKlokkeslett&&toaletter.entries[i].tid_hverdag!="NULL") {
			 truthchecker.unshift("false");
		 }
		 }


		 if(day==5) {

			 if(toaletter.entries[i].tid_lordag=="NULL"){

	  truthchecker.unshift("false");
	 		}

			 if(inputFraÅpenKlokkeslett>tidspunktFraLørdag && inputFraÅpenKlokkeslett<tidspunktTilLørdag&&toaletter.entries[i].tid_lordag!="NULL") {
					truthchecker.unshift("true");
				}

				if(inputFraÅpenKlokkeslett<tidspunktFraLørdag&&toaletter.entries[i].tid_lordag!="NULL" || inputFraÅpenKlokkeslett>tidspunktTilLørdag&&toaletter.entries[i].tid_lordag!="NULL") {
					truthchecker.unshift("false");
				}
		 }

		 if(day==6) {

			 if(toaletter.entries[i].tid_sondag=="NULL"){
      truthchecker.unshift("false");
	 		}

			 if(inputFraÅpenKlokkeslett>tidspunktFraSøndag && inputFraÅpenKlokkeslett<tidspunktTilSøndag&&toaletter.entries[i].tid_sondag!="NULL") {
					truthchecker.unshift("true");
				}

				if(inputFraÅpenKlokkeslett<tidspunktFraSøndag&&toaletter.entries[i].tid_sondag!="NULL" || inputFraÅpenKlokkeslett>tidspunktTilSøndag&&toaletter.entries[i].tid_sondag!="NULL") {
					truthchecker.unshift("false");
				}
		 }

		 if (day ==0) {

			 if(toaletter.entries[i].tid_hverdag=="NULL"){
      truthchecker.unshift("false");
	 		}

				if(tidspunktFra<inputFraÅpenKlokkeslett && tidspunktTil>inputFraÅpenKlokkeslett&&toaletter.entries[i].tid_hverdag!="NULL") {
					truthchecker.unshift("true");
				}

				if(tidspunktFra>inputFraÅpenKlokkeslett&&toaletter.entries[i].tid_hverdag!="NULL" || tidspunktTil<inputFraÅpenKlokkeslett&&toaletter.entries[i].tid_hverdag!="NULL") {
					truthchecker.unshift("false");
				}
				}

}

}

//sjekker at maksprisen er innenfor prisen til det aktuelle totalettet
var prisVariabel = document.getElementById("makspris").value;

var prisVariabel2 = Number(prisVariabel);

var prisvariabelToaletter = Number(toaletter.entries[i].pris);


if(document.getElementById("makspris").value==""){
truthchecker.unshift("true");
}

if(document.getElementById("makspris").value!=""){


if(prisVariabel2<prisvariabelToaletter){

  truthchecker.unshift("true");
}

if(prisvariabelToaletter>prisVariabel2){

truthchecker.unshift("false");

}

}

//sjekker at det er gratis å bruke toalettet om vi ticker 'gratis'
  if(document.getElementById("checkboxgratis").checked == true) {
    if(toaletter.entries[i].pris=="NULL"){

        truthchecker.unshift("true");

    }

    if(toaletter.entries[i].pris=="0"){

        truthchecker.unshift("true");

    }

    if(toaletter.entries[i].pris!="NULL" && toaletter.entries[i].pris!="0"){

        truthchecker.unshift("false");

    }
  }
  if(document.getElementById("checkboxgratis").checked == false){
    truthchecker.unshift("true");
  }

//sjekker at toalettet har stellerom om vi ticker for dette
if(document.getElementById("checkboxstellerom").checked == true) {
  if(list.entries[3]==toaletter.entries[i].stellerom){

      truthchecker.unshift("true");

  }

  if(list.entries[3]!=toaletter.entries[i].stellerom){

      truthchecker.unshift("false");

  }
}
if(document.getElementById("checkboxstellerom").checked == false){
  truthchecker.unshift("true");
}

//sjekker at toalettet har rullestoltilgang om vi ticker for dette
if(document.getElementById("checkboxrullestoltilgang").checked == true) {

if(list.entries[2]==toaletter.entries[i].rullestol){

  truthchecker.unshift("true");
}

if(list.entries[2]!=toaletter.entries[i].rullestol){

truthchecker.unshift("false");
}
}

if(document.getElementById("checkboxrullestoltilgang").checked == false){
truthchecker.unshift("true");
}


//sjekker at toalettet er tilgjengelig for kvinner om vi ticker for dette
  if(document.getElementById("checkboxkvinne").checked == true) {

  if(list.entries[1]==toaletter.entries[i].dame){

    truthchecker.unshift("true");
  }

  if(list.entries[1]!=toaletter.entries[i].dame){

  truthchecker.unshift("false");
  }
}

if(document.getElementById("checkboxkvinne").checked == false){
  truthchecker.unshift("true");
}


//sjekker at toalettet er tilgjengelig for menn om vi ticker for dette
  if(document.getElementById("checkboxmann").checked == true) {

  if(list.entries[0]==toaletter.entries[i].herre){

    truthchecker.unshift("true");
  }

  if(list.entries[0]!=toaletter.entries[i].herre){

  truthchecker.unshift("false");
  }
}

if(document.getElementById("checkboxmann").checked == false){
  truthchecker.unshift("true");
}

//setter de 8 vilkårne fra den dynamiske listen inn i variabler
var indextruth0 = truthchecker[0];
var indextruth1 = truthchecker[1];
var indextruth2 = truthchecker[2];
var indextruth3 = truthchecker[3];
var indextruth4 = truthchecker[4];
var indextruth5 = truthchecker[5];
var indextruth6 = truthchecker[6];
var indextruth7 = truthchecker[7];

//setter de 8 vilkårne fra den statiske listen inn i variabler
var index2truth0 = truthchecker2[0];
var index2truth1 = truthchecker2[1];
var index2truth2 = truthchecker2[2];
var index2truth3 = truthchecker2[3];
var index2truth4 = truthchecker2[4];
var index2truth5 = truthchecker2[5];
var index2truth6 = truthchecker2[6];
var index2truth7 = truthchecker2[7];


//sjekker så variablene opp mot hverandre, om samtlige stemmer så sender vi det aktuelle toalettets attributter videre i lister som brukes til å oppdatere markørene på kartet
if(indextruth0==index2truth0&&indextruth1==index2truth1&&indextruth2==index2truth2&&indextruth3==index2truth3&&indextruth4==index2truth4&&indextruth5==index2truth5&&indextruth6==index2truth6&&indextruth7==index2truth7)
{
innhold += "<tr><td>"+toaletter.entries[i].id+"</td><td>"+ toaletter.entries[i].plassering + "</td></tr>";
latitudeInnhold.push(toaletter.entries[i].latitude);
idInnhold.push(toaletter.entries[i].id);
longtitudeInnhold.push(toaletter.entries[i].longitude);
plasseringInnhold.push(toaletter.entries[i].plassering);


}

}

// oppdaterer også en liste på nettsiden med ID og plassering til de toalettetene som oppfyller vilkårene.

document.getElementById("tabellen").innerHTML = innhold + "</table>";
 initMap();

  }


//sjekker hva vi har skrevet inn i en søkeboks. Sjekker alle bokstavene i søkeboksen
// opp imot hva som er av bokstaver i tilsvarende index som indexen til bokstavene i søkeboksen.
// sjekker at alt stemmer overrens, er det tilfellet så sender vi videre entrien fra toaletter.
function enkeltSøk(){

var innhold = "<table class='tblStyle'><tr><th class='tblHeader'>ID</th><th class='tblHeader'>Plassering</th><th class='tblHeader'>Adresse</th><tr>";

var returnInnhold = [];
latitudeInnhold = [];
longtitudeInnhold = [];
idInnhold = [];
plasseringInnhold = [];

      var input;
      var filter;
      var ul;
      var li;
      var ki;
      var b;
      var  a;
      var k;
      var i;
      var match;
      var match2;

      input = document.getElementById('enkeltSøk');
      filter = input.value.toUpperCase();

for (var i=0; i < toaletter.entries.length; i++) {

  li = toaletter.entries[i].plassering.toUpperCase();
  ki = toaletter.entries[i].adresse.toUpperCase();

  var match = 1;
  var match2 = 1;

    for(j=0 ; j< filter.length; j++){
        a = li.charAt(j);
        k = ki.charAt(j);
        b = filter.charAt(j);

  if(a!=b){

  match = 2;
}

if (k!=b){

match2 = 2;
}

  }

     if(match == 1 || match2 ==1){

       latitudeInnhold.push(toaletter.entries[i].latitude);
       idInnhold.push(toaletter.entries[i].id);
       longtitudeInnhold.push(toaletter.entries[i].longitude);
       plasseringInnhold.push(toaletter.entries[i].plassering);

	innhold += "<tr><td>"+toaletter.entries[i].id+"</td><td>"+ toaletter.entries[i].plassering + "</td><td>"+ toaletter.entries[i].adresse + "</td></tr>";

//oppdaterer markørene med å kalle initMap funksjonen
initMap();
     }

}

// oppdaterer listen etter endt søk

document.getElementById("tabellen").innerHTML = innhold+ "</table>";
return returnInnhold;

}

//søkefunksjon hvor vi slår inn søkekriteriene manuelt i samme søkefelt, kjører regex'er for å
// komme fram til hva vi søker etter. Endrer søkefeltene i den avanserte søkefunksjonen, kjører
// den avanserte søkefunksjonen og nullstiller feltene til den avanserte søkefunksjonen når
// vi kjører funksjonen.
function hurtigsøk(toaletter){

var start=0;

start = document.getElementById("hurtigSøk").value;

var afterSplit3;

var afterSplit2 = start.match(/(åpent )(\d){1,2}(.\d\d){0,1}/);
if(afterSplit2) {
 afterSplit3 = afterSplit2[0].split("åpent ");
}

if(afterSplit3!=null) {

	document.getElementById("åpenklokkeslett").value = afterSplit3[1];
}

//sjekker for pris
var pris = start.match(/pris\S*\s*(\d*)/);


if(pris!=null){

	document.getElementById("makspris").value = pris[1];
}

// sjekker om vi har ticket for mann
var mann = start.match(/mann/gi);

mann +="";

// sjekker om vi har ticket for kvinne
var kvinne = start.match(/kvinne/gi);

kvinne +="";

// sjekker om vi har ticket for rullestoltilgang
var rullestoltilgang = start.match(/rulle/gi);

rullestoltilgang += "";

// sjekker om vi har ticket for stellerom
var stellerom = start.match(/stellerom/gi);

stellerom += "";

// sjekker om vi har ticket for gratis
var gratis = start.match(/gratis/gi);

gratis += "";

// sjekker om vi har ticket for åpent nå
var åpenNå = start.match(/åpen nå/gi);

åpenNå += "";


// sjekker alle variablene og ticker av de aktuelle feltene for den avanserte søkefunksjonen
if (mann.includes("mann")==true){
	document.getElementById("checkboxmann").checked = true;
}

if (kvinne.includes("kvinne")==true){
	document.getElementById("checkboxkvinne").checked = true;
}

if (rullestoltilgang.includes("rullestoltilgang")==true){
	document.getElementById("checkboxrullestoltilgang").checked = true;
}

if (stellerom.includes("stellerom")==true){
	document.getElementById("checkboxstellerom").checked = true;
}

if (gratis.includes("gratis")==true){
	document.getElementById("checkboxgratis").checked = true;
}

if (åpenNå.includes("åpen nå")==true||åpenNå.includes("åpent")==true){
	document.getElementById("åpent").checked = true;
}

// kjører den avanserte søkefunksjonen
avansertSøk();

//Nullstiller alle feltene i den avanserte søkefunksjonen
document.getElementById("åpent").checked = false;
document.getElementById("checkboxgratis").checked = false;
document.getElementById("checkboxstellerom").checked = false;
document.getElementById("checkboxrullestoltilgang").checked = false;
document.getElementById("checkboxkvinne").checked = false;
document.getElementById("checkboxmann").checked = false;
document.getElementById("åpenklokkeslett").value = null;
document.getElementById("makspris").value = null;

}


var infoVinduArray = [];//tabell med infovinduer
var innholdArray = [];//tabell med info som vises i vinduene
var markers = [];//tabell med markers



function initMap() {

   infoVinduArray = [];//tabell med infovinduer
    innholdArray = [];//tabell med info som vises i vinduene
    markers = [];

var sentrer = {lat: 60.3932345, lng: 5.3252363};//Sentrer denne lokasjonen på kartet

var map = new google.maps.Map(document.getElementById('kart'),
{
 zoom: 15,//Zoom in 15 på kartet
 center: sentrer//sentrer
});




//Ikon for herre og dame toalett for visning i infovindu
var mann='wc_male.png';
var dame='wc_female.png';


 for(var i = 0; i < latitudeInnhold.length; i++){
   var toalettNr = parseInt(idInnhold[i]);//hent toalett nummer
   var plass = plasseringInnhold[i];//hent navn på plassering

   //posisjoner toaletter
   var pos = {lat: parseFloat(latitudeInnhold[i]), lng: parseFloat(longtitudeInnhold[i])}

   //var pos = {lat: latitude, lng: longitude)}



   //Legg til markers på hvert sted
   marker = new google.maps.Marker({
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

}//end initMap
