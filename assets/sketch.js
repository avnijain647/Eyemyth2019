var mic;
function setup(){
    var clientW = document.getElementById('sketch-holder').clientWidth;
    var clientH = document.getElementById('sketch-holder').clientHeight;
    var canvas = createCanvas(clientW, clientH);
    canvas.parent('sketch-holder');  
    mic = new p5.AudioIn()
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
}
function draw(){
    background(0);
    var waveform = fft.waveform();
    stroke(255,0,0); // waveform is red
    strokeWeight(1);
    for (var i = 0; i< waveform.length; i++){
        line( i, height+100 + waveform[i]*100, i+1, height/2 + waveform[i]*100 );

    }
}


/*let mic, fft;
var kuler;

var incr = 0.002;
var start = 0;
var t = 0;

function setup() {
   // var clientW = document.getElementById('sketch-holder').clientWidth;
   // var clientH = document.getElementById('sketch-holder').clientHeight;
   var canvas = createCanvas(600, 600);
   // canvas.parent('sketch-holder');
   // console.log(clientW + " " + clientH);
   background(200);
   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
   noFill();
}

function draw() {
   background(0);
   let spectrum = fft.analyze();
   stroke(200);

}


translate(600/2, 600/2);

for (i = 0; i < spectrum.length; i++) {
   var c = spectrum[i]*1;
   var Fc = map(c, 0, 400, 255, 0);
   var Fe = map(c, 0, 400, 2, 15);
   var Fs = map(c, 0, 400, 0, 0.000019); //0.00008 for the melody 0.00002 for the audio
   rotate(sin(t)+Fs);
   scale(1.01);
   stroke(Fc);
   strokeWeight(Fe);
   point(t, i);
   t += Fs;
}

start += incr;
t += incr;


//    
//		 beginShape();
//  for (i = 0; i < spectrum.length; i++) {
//    vertex(i, map(spectrum[i], 0, 255, 600, 0));
//
//  }
//  endShape();
//
//}
*/