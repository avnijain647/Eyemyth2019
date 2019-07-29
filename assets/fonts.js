


$(".yellowfont").css("font-family", function() {


  var textArray = [
      'Space Mono',
      'VT323'
  ];

  var rando = Math.floor(Math.random()*textArray.length);
  return textArray[rando];

});

const words = ["DESIGN RESEARCH FOR DESIGNERS 101", "Game Engine", "Realtime Graphics", "CONNECTED CREATIVITY", "Digital Art", "ETHICS FOR A NEW GENERATION", "Digital Sculpting", "AI FOR ARTISTS & DESIGNERS", "Projectionism", "RESPONSIBLE FUTURISM", "Transmedia Production", "THE LOSS OF CREATIVITY", "Immersive Media" "GENERATIVE ART TOOLKIT" "Web Comics" "SPECULATIVE DESIGN 201" "Media Installations"  "BEING INDIE & FINDING SUCCESS" "Sensors & Interactivity" "INTELLECTUAL PROPERTY"
"DESIGN FOR SOCIAL CHANGE","STUDYING ABROAD IN LOCAL TIMES"];

function setup() {

  for (var i = 0; i < data.getRowCount(); i++) {
    if(data.getString(i, 0) != "") {
      col1[i] = data.getString(i, 0);
    }

    if(data.getString(i, 1) != "") {
      col2[i] = data.getString(i, 1);
    }

    if(data.getString(i, 2) != "") {
      col3[i] = data.getString(i, 2);
    }

    if(data.getString(i, 3) != "") {
      col4[i] = data.getString(i, 3);
    }
  }
  word1 = Math.floor(Math.random() * (words.length)
document.getElementsByClassName('yellowfont')[0].innerHTML = word1;
}
