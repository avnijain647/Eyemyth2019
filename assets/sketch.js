let mic, fft;
var kuler;
function setup() {
	var clientW = document.getElementById('sketch-holder').clientWidth;
	var clientH = document.getElementById('sketch-holder').clientHeight;
	var canvas = createCanvas(clientW, clientH);
	canvas.parent('sketch-holder');
	console.log(clientW + " " + clientH);
	background(200);
	mic = new p5.AudioIn();
	mic.start();
	fft = new p5.FFT();
	fft.setInput(mic);
	noFill();
	  // createCanvas(710, 400);
	  // strokeWeight(20);
	  // stroke(255, 100);

	  // x[x.length - 1] = width / 2; // Set base x-coordinate
	  // y[x.length - 1] = height; // Set base y-coordinate
}

function draw() {
		background(0);
	let spectrum = fft.analyze();
	 stroke(200);

// fill(200);

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


// function draw() {
//   background(0);
//   if(mouseIsPressed){
//     fill(0);
//   } else{
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
// }

// function draw() {
//   background(0);
//   if(mouseIsPressed){
//     fill(0);
//   } else{
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
//
//
//   reachSegment(0, mouseX, mouseY);
//   for (let i = 1; i < numSegments; i++) {
//     reachSegment(i, targetX, targetY);
//   }
//   for (let j = x.length - 1; j >= 1; j--) {
//     positionSegment(j, j - 1);
//   }
//   for (let k = 0; k < x.length; k++) {
//     segment(x[k], y[k], angle[k], (k + 1) * 2);
//   }
// }
//
// function positionSegment(a, b) {
//   x[b] = x[a] + cos(angle[a]) * segLength;
//   y[b] = y[a] + sin(angle[a]) * segLength;
// }
//
// function reachSegment(i, xin, yin) {
//   const dx = xin - x[i];
//   const dy = yin - y[i];
//   angle[i] = atan2(dy, dx);
//   targetX = xin - cos(angle[i]) * segLength;
//   targetY = yin - sin(angle[i]) * segLength;
// }
//
//
// function segment(x, y, a, sw) {
//   strokeWeight(sw);
//   push();
//   translate(x, y);
//   rotate(a);
//   line(0, 0, segLength, 0);
//   pop();
// }

// function setup() {
//   var clientW = document.getElementById('sketch-holder').offsetWidth;
//   var clientH = document.getElementById('sketch-holder').offsetHeight;
//   var canvas = createCanvas(clientW, clientH);
//   canvas.parent('sketch-holder');
// }
