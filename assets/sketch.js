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
