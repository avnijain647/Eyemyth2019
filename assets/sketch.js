/*var mic;
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
*/
let mic;
var f;
var Fs, Fc, Fe;
var incr = 0.002;
var start = 0;
var t = 0;
function setup() {
var clientW = document.getElementById('sketch-holder').clientWidth;
    var clientH = document.getElementById('sketch-holder').clientHeight;
    var canvas = createCanvas(clientW, clientH);
    canvas.parent('sketch-holder');  
  //cnv = createCanvas(600, 600);
 mic = new p5.AudioIn()
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic); 
}

function draw() {
  background(0);
  var waveform = fft.waveform();
  
  translate(600/2, 600/2);

for (i = 0; i < waveform.length; i++) {
   f = waveform[i];
    c = waveform[i]*10;
    Fc = map(c, -1, 1, 255, 0);
    Fe = map(c, -1, 1, 0.1, 5);
    Fs = map(c, -1, 1, -0.00001, 0.00000008); //0.00008 for the melody 0.00002 for the audio
   rotate(cos(t)+Fs);
   scale(1.01);
   stroke(Fc);
   strokeWeight(Fe);
   point(t, i);
   t += Fs;
}

start += incr;
t += incr;
}
