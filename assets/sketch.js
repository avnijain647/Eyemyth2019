let mic, fft;
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
	let spectrum = fft.analyze();
	 stroke(200);

fill(200);

		 beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, 600, 0));
			// kuler = map(spectrum[i], 210, 255, 10, 0);
			// strokeWeight(i/5000);
  }
  endShape();

	// }
//	rect(mouseX, mouseY, kuler, kuler);
}

start += incr;
t += incr;
}
