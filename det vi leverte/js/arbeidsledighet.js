
//TING FRA HTML //
// lukker dropdownen om brukeren klikker utenfor
window.onclick = function(event) {
if (!event.target.matches('.dropdownArbeidsledighet')) {

var j= 0;

var menuItems = document.getElementsByClassName("dropdownArbeidsledighet");

for (j = 0; j < menuItems.length; j++) {
  var ÅpnetMeny = menuItems[j];
  if (ÅpnetMeny.classList.contains('show')) {
	ÅpnetMeny.classList.remove('show');
  }
}
}


}


/* Når brukeren klikker på knappen,
Skift mellom å vise eller ikke vise dropdown innholdet */
function visInnhold() {
  document.getElementById("menyItems1").classList.toggle("show");
}

/* ved brukerklikk,
skifter mellom å skule/vise innholdet */
function visInnhold2() {
document.getElementById("menyItems2").classList.toggle("show");
}



//End

//datasettet jeg tar inn

var ssb = {
	"dataset": {
		"status": {
			"26": "..",
			"27": ".."
		},
		"dimension": {
			"Kjonn": {
				"label": "kjønn",
				"category": {
					"index": {
						"0": 0
					},
					"label": {
						"0": "Begge kjønn"
					}
				}
			},
			"Alder": {
				"label": "alder",
				"category": {
					"index": {
						"15-74": 0
					},
					"label": {
						"15-74": "15-74 år"
					}
				}
			},
			"Tid": {
				"label": "måned",
				"category": {
					"index": {
						"2017M02": 0,
						"2017M03": 1,
						"2017M04": 2,
						"2017M05": 3,
						"2017M06": 4,
						"2017M07": 5,
						"2017M08": 6,
						"2017M09": 7,
						"2017M10": 8,
						"2017M11": 9,
						"2017M12": 10,
						"2018M01": 11,
						"2018M02": 12,
						"2018M03": 13
					},
					"label": {
						"2017M02": "2017M02",
						"2017M03": "2017M03",
						"2017M04": "2017M04",
						"2017M05": "2017M05",
						"2017M06": "2017M06",
						"2017M07": "2017M07",
						"2017M08": "2017M08",
						"2017M09": "2017M09",
						"2017M10": "2017M10",
						"2017M11": "2017M11",
						"2017M12": "2017M12",
						"2018M01": "2018M01",
						"2018M02": "2018M02",
						"2018M03": "2018M03"
					}
				}
			},
			"ContentsCode": {
				"label": "statistikkvariabel",
				"category": {
					"index": {
						"Arbeidslause2": 0,
						"Arbeidslause4": 1
					},
					"label": {
						"Arbeidslause2": "Arbeidslause (AKU) (1 000 personar), sesongjustert",
						"Arbeidslause4": "Arbeidslause i prosent av arbeidsstyrken (AKU), sesongjustert"
					},
					"unit": {
						"Arbeidslause2": {
							"base": "1 000 personar",
							"decimals": 0
						},
						"Arbeidslause4": {
							"base": "prosent",
							"decimals": 1
						}
					}
				},
				"link": {
					"describedby": [
						{
							"extension": {
								"Arbeidslause2": "urn:ssb:conceptvariable:vardok:1123",
								"Arbeidslause4": "urn:ssb:conceptvariable:vardok:1123"
							}
						}
					]
				}
			},
			"id": [
				"Kjonn",
				"Alder",
				"Tid",
				"ContentsCode"
			],
			"size": [
				1,
				1,
				14,
				2
			],
			"role": {
				"time": [
					"Tid"
				],
				"metric": [
					"ContentsCode"
				]
			}
		},
		"label": "Sysselsetting og arbeidsløyse for personar 15-74 år, etter kjønn, alder, måned og statistikkvariabel",
		"source": "Statistisk sentralbyrå",
		"updated": "2018-04-27T10:12:00Z",
		"value": [
			118,
			4.3,
			123,
			4.4,
			124,
			4.5,
			123,
			4.5,
			119,
			4.3,
			116,
			4.2,
			113,
			4.1,
			112,
			4,
			110,
			4,
			112,
			4,
			112,
			4,
			111,
			4,
			108,
			3.9,
			null,
			null
		]
	}
}




//funskjoner som setter en tallverdi til de aktuelle månedene det er snakk om
function februarFunction() {

  visInnhold();
  document.getElementById("måned fra").value = "0";
}

function marsFunction() {

  visInnhold();
  document.getElementById("måned fra").value = "1";
}

function aprilFunction() {

  visInnhold();
  document.getElementById("måned fra").value = "2";
}

function mayFunction() {

  visInnhold();
  document.getElementById("måned fra").value = "3";
}

function juniFunction() {

  visInnhold();
  document.getElementById("måned fra").value = "4";
}

function juliFunction() {

  visInnhold();
  document.getElementById("måned fra").value = "5";
}

function augustFunction() {

  visInnhold();
  document.getElementById("måned fra").value = "6";
}

function septemberFunction() {

  visInnhold();
  document.getElementById("måned fra").value = "7";
}

function oktoberFunction() {

  visInnhold();
  document.getElementById("måned fra").value = "8";
}

function novemberFunction() {

  visInnhold();
  document.getElementById("måned fra").value = "9";
}

function desemberFunction() {

  visInnhold();
  document.getElementById("måned fra").value = "10";
}

function januar2018Function() {

  visInnhold();
  document.getElementById("måned fra").value = "11";
}

function februar2018Function() {

  visInnhold();
  document.getElementById("måned fra").value = "12";
}


function februarFunction2() {

  visInnhold2();
  document.getElementById("måned til").value = "0";
}

function marsFunction2() {

  visInnhold2();
  document.getElementById("måned til").value = "1";
}

function aprilFunction2() {

  visInnhold2();
  document.getElementById("måned til").value = "2";
}

function mayFunction2() {

  visInnhold2();
  document.getElementById("måned til").value = "3";
}

function juniFunction2() {

  visInnhold2();
  document.getElementById("måned til").value = "4";
}

function juliFunction2() {

  visInnhold2();
  document.getElementById("måned til").value = "5";
}

function augustFunction2() {

  visInnhold2();
  document.getElementById("måned til").value = "6";
}

function septemberFunction2() {

  visInnhold2();
  document.getElementById("måned til").value = "7";
}

function oktoberFunction2() {

  visInnhold2();
  document.getElementById("måned til").value = "8";
}

function novemberFunction2() {

  visInnhold2();
  document.getElementById("måned til").value = "9";
}

function desemberFunction2() {

  visInnhold2();
  document.getElementById("måned til").value = "10";
}

function januar2018Function2() {

  visInnhold2();
  document.getElementById("måned til").value = "11";
}

function februar2018Function2() {

  visInnhold2();
  document.getElementById("måned til").value = "12";
}


//funksjon som brukes til å nullstille canvasen som vi bruker til å lage diagrammet vårt på
function resetCanvas(){

  document.getElementById('Chart').remove();

  var mycanvas = document.createElement("canvas");
  mycanvas.id = "Chart";

  document.getElementById('graph-container').append(mycanvas);

};


//lager selve diagrammet som viser alle dataene vi har selektert fra datasettet.
function genererChart() {

resetCanvas();

          var labels = labelCreator1();

	        var values = valueCreator1();
			//styrer størrelsen på canvas
	        var canvas = document.getElementById('Chart');
					canvas.width = 900;
					canvas.height = 300;

	        var context = canvas.getContext('2d');

	        var width = 50; //bredden på søylen
	        var barPosition = 40; // posisjonen til den første søylen

	        for (var i =0; i<values.length; i++) {

						  if (values[i]<100) {
	            context.fillStyle = '#1E90FF';
	            var høyde = values[i]*50;
	            context.fillRect(barPosition,canvas.height - høyde,width,høyde);
              }

							if (values[i]>100) {
	            context.fillStyle = '#1E90FF';
	            var høyde = values[i]*2;
	            context.fillRect(barPosition,canvas.height - høyde,width,høyde);
              }

	            barPosition +=  width+35;

	            /* lager måneden for søylen */
	            context.fillStyle = '#1E90FF';
	            context.fillText(labels[i],barPosition-90,canvas.height - høyde -10);


       if (values[i]>100) {
							context.fillStyle = '#1E90FF';
							context.fillText(values[i]+'000',barPosition-90,canvas.height - høyde -30);

}

      if (values[i]<100){

				 context.fillStyle = '#1E90FF';
				 context.fillText(values[i]+'%',barPosition-90,canvas.height - høyde -30);


			}

	        }


}


var verdier = [];
var verdier2 = [];

//lager en liste over alle mpnedene som vi har i datasettet, tar også å legger verdiene fra datasettet, prosent og antall over i variabler
// som brukes senere til å regne ut gjennomsnitt og median se verdier og verdier2 ovenfor
function labelCreator1() {

  var list =[];

	if (document.getElementById("median").checked==true ) {
		list.unshift("Median")
	}

  if (document.getElementById("gjennomsnitt").checked==true ) {
    list.unshift("Gjennomsnitt")
  }

  if (document.getElementById("måned fra").value<13 && document.getElementById("måned til").value>=12 ) {
    list.unshift("Februar 2018")
    verdier.unshift(ssb.dataset.value[25])
    verdier2.unshift(ssb.dataset.value[24])
  }

  if (document.getElementById("måned fra").value<12 && document.getElementById("måned til").value>=11 ) {
    list.unshift("Januar 2018")
    verdier.unshift(ssb.dataset.value[23])
    verdier2.unshift(ssb.dataset.value[22])
  }

  if (document.getElementById("måned fra").value<11 && document.getElementById("måned til").value>=10 ) {
    list.unshift("Desember 2017")
    verdier.unshift(ssb.dataset.value[21])
    verdier2.unshift(ssb.dataset.value[20])
  }

  if (document.getElementById("måned fra").value<10 && document.getElementById("måned til").value>=9 ) {
    list.unshift("November 2017")
    verdier.unshift(ssb.dataset.value[19])
    verdier2.unshift(ssb.dataset.value[18])
  }

  if (document.getElementById("måned fra").value<9 && document.getElementById("måned til").value>=8 ) {
    list.unshift("Oktober 2017")
    verdier.unshift(ssb.dataset.value[17])
    verdier2.unshift(ssb.dataset.value[16])
  }

  if (document.getElementById("måned fra").value<8 && document.getElementById("måned til").value>=7 ) {
    list.unshift("September 2017")
    verdier.unshift(ssb.dataset.value[15])
    verdier2.unshift(ssb.dataset.value[14])
  }

  if (document.getElementById("måned fra").value<7 && document.getElementById("måned til").value>=6 ) {
    list.unshift("August 2017")
    verdier.unshift(ssb.dataset.value[13])
    verdier2.unshift(ssb.dataset.value[12])
  }

  if (document.getElementById("måned fra").value<6 && document.getElementById("måned til").value>=5 ) {
    list.unshift("Juli 2017")
    verdier.unshift(ssb.dataset.value[11])
    verdier2.unshift(ssb.dataset.value[10])
  }

  if (document.getElementById("måned fra").value<5 && document.getElementById("måned til").value>=4 ) {
    list.unshift("Juni 2017")
    verdier.unshift(ssb.dataset.value[9])
    verdier2.unshift(ssb.dataset.value[8])
  }

  if (document.getElementById("måned fra").value<4 && document.getElementById("måned til").value>=3 ) {
    list.unshift("May 2017")
    verdier.unshift(ssb.dataset.value[7])
    verdier2.unshift(ssb.dataset.value[6])
  }

  if (document.getElementById("måned fra").value<3 && document.getElementById("måned til").value>=2 ) {
    list.unshift("April 2017")
    verdier.unshift(ssb.dataset.value[5])
    verdier2.unshift(ssb.dataset.value[4])
  }

  if (document.getElementById("måned fra").value<2 && document.getElementById("måned til").value>=1 ) {
    list.unshift("Mars 2017")
    verdier.unshift(ssb.dataset.value[3])
    verdier2.unshift(ssb.dataset.value[2])
  }

  if (document.getElementById("måned fra").value<1 && document.getElementById("måned til").value>=0 &&document.getElementById("måned fra").value!="" &&document.getElementById("måned til").value!="" ) {
    list.unshift("Februar 2017")
    verdier.unshift(ssb.dataset.value[1])
    verdier2.unshift(ssb.dataset.value[0])
  }

return list

}

//lager dataen som vi setter inn i diagrammet vårt. Sjekker vilkår, dvs hva vi har valgt av måneder og checkboxer før den sender dataen videre i en liste.
function valueCreator1() {

  var list =[];

  var total2 = 0;
  var total=0;
  var entries = 0;
  for(var i in verdier) {
    total2 += verdier[i];
    entries += 1;
    total = total2/entries;
  }

  var total4 = 0;
  var total3=0;
  var entries = 0;
  for(var i in verdier2) {
    total4 += verdier2[i];
    entries += 1;
    total3 = total4/entries;
  }

  var med = median(verdier);
  var med2 =median(verdier2);


if (document.getElementById("prosent").checked==true){


  if(document.getElementById("median").checked==true) {
    list.unshift(med.toFixed(3))
  }

  if (document.getElementById("gjennomsnitt").checked==true ) {
    list.unshift(total.toFixed(3))
  }

  if (document.getElementById("måned fra").value<13 && document.getElementById("måned til").value>=12 ) {
    list.unshift(ssb.dataset.value[25])
  }

  if (document.getElementById("måned fra").value<12 && document.getElementById("måned til").value>=11 ) {
    list.unshift(ssb.dataset.value[23])
  }

  if (document.getElementById("måned fra").value<11 && document.getElementById("måned til").value>=10 ) {
    list.unshift(ssb.dataset.value[21])
  }

  if (document.getElementById("måned fra").value<10 && document.getElementById("måned til").value>=9 ) {
    list.unshift(ssb.dataset.value[19])
  }

  if (document.getElementById("måned fra").value<9 && document.getElementById("måned til").value>=8 ) {
    list.unshift(ssb.dataset.value[17])
  }

  if (document.getElementById("måned fra").value<8 && document.getElementById("måned til").value>=7 ) {
    list.unshift(ssb.dataset.value[15])
  }

  if (document.getElementById("måned fra").value<7 && document.getElementById("måned til").value>=6 ) {
    list.unshift(ssb.dataset.value[13])
  }

  if (document.getElementById("måned fra").value<6 && document.getElementById("måned til").value>=5 ) {
    list.unshift(ssb.dataset.value[11])
  }

  if (document.getElementById("måned fra").value<5 && document.getElementById("måned til").value>=4 ) {
    list.unshift(ssb.dataset.value[9])
  }

  if (document.getElementById("måned fra").value<4 && document.getElementById("måned til").value>=3 ) {
    list.unshift(ssb.dataset.value[7])
  }

  if (document.getElementById("måned fra").value<3 && document.getElementById("måned til").value>=2 ) {
    list.unshift(ssb.dataset.value[5])
  }

  if (document.getElementById("måned fra").value<2 && document.getElementById("måned til").value>=1 ) {
    list.unshift(ssb.dataset.value[3])
  }

  if (document.getElementById("måned fra").value<1 && document.getElementById("måned til").value>=0 &&document.getElementById("måned fra").value!="" &&document.getElementById("måned til").value!="" ) {
    list.unshift(ssb.dataset.value[1])
  }

}

if (document.getElementById("antall").checked==true) {

  if(document.getElementById("median").checked==true) {
    list.unshift(med2.toFixed(0))
  }

  if (document.getElementById("gjennomsnitt").checked==true ) {
    list.unshift(total3.toFixed(0))
  }

  if (document.getElementById("måned fra").value<13 && document.getElementById("måned til").value>=12 ) {
    list.unshift(ssb.dataset.value[24])
  }

  if (document.getElementById("måned fra").value<12 && document.getElementById("måned til").value>=11 ) {
    list.unshift(ssb.dataset.value[22])
  }

  if (document.getElementById("måned fra").value<11 && document.getElementById("måned til").value>=10 ) {
    list.unshift(ssb.dataset.value[20])
  }

  if (document.getElementById("måned fra").value<10 && document.getElementById("måned til").value>=9 ) {
    list.unshift(ssb.dataset.value[18])
  }

  if (document.getElementById("måned fra").value<9 && document.getElementById("måned til").value>=8 ) {
    list.unshift(ssb.dataset.value[16])
  }

  if (document.getElementById("måned fra").value<8 && document.getElementById("måned til").value>=7 ) {
    list.unshift(ssb.dataset.value[14])
  }

  if (document.getElementById("måned fra").value<7 && document.getElementById("måned til").value>=6 ) {
    list.unshift(ssb.dataset.value[12])
  }

  if (document.getElementById("måned fra").value<6 && document.getElementById("måned til").value>=5 ) {
    list.unshift(ssb.dataset.value[10])
  }

  if (document.getElementById("måned fra").value<5 && document.getElementById("måned til").value>=4 ) {
    list.unshift(ssb.dataset.value[8])
  }

  if (document.getElementById("måned fra").value<4 && document.getElementById("måned til").value>=3 ) {
    list.unshift(ssb.dataset.value[6])
  }

  if (document.getElementById("måned fra").value<3 && document.getElementById("måned til").value>=2 ) {
    list.unshift(ssb.dataset.value[4])
  }

  if (document.getElementById("måned fra").value<2 && document.getElementById("måned til").value>=1 ) {
    list.unshift(ssb.dataset.value[2])
  }

  if (document.getElementById("måned fra").value<1 && document.getElementById("måned til").value>=0 &&document.getElementById("måned fra").value!="" &&document.getElementById("måned til").value!="" ) {
    list.unshift(ssb.dataset.value[0])
  }

}

return list

}


//funksjon som regner ut medianen
function median(numbers) {

    numbers.sort(function(a,b) {return a - b;} );

    var half = Math.floor(numbers.length/2);

    if(numbers.length % 2)
        return numbers[half];
    else
        return (numbers[half-1] + numbers[half]) / 2;
}

//funksjon som gjør at checkbox knappen antall er eksklusiv i forhold til den andre knappen prosent
function exclusive(){

if (document.getElementById("antall").checked == true) {
  document.getElementById("prosent").checked = false;
}
if (document.getElementById("antall").checked == false &&document.getElementById("prosent").checked == false) {
  document.getElementById("antall").checked =true;
}

}

//funksjon som gjør at checkbox knappen prosent er eksklusiv i forhold til den andre knappen antall
function exclusive2() {
  if (document.getElementById("prosent").checked == true) {
    document.getElementById("antall").checked = false;
  }

  if (document.getElementById("prosent").checked == false &&document.getElementById("antall").checked == false) {
    document.getElementById("prosent").checked =true;
  }
}
