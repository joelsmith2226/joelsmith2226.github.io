// Joel Smith
// Music Visualizer

// GLOBALS
var fft;
var button;
var shapeButton;
var nextSong;
var circularShape;
var w;
var songs;
var trackNum;
var rotation;
var magnify;
var magDir;
var midRing;
var highRing;
var bands;
var stars;

// CLASSES
class Star{
  constructor(height, width) {
    this.x = random(-width/1.5, width/1.5);
    this.y = random(-height/1.5, height/1.5);
    this.z = random(width);
    this.pz = this.z;

  }
  update() {
    this.z -= 10;
    if (this.z < 1) {
      this.x = random(-width/1.5, width/1.5);
      this.y = random(-height/1.5, height/1.5);
      this.z = random(width);
      this.pz = this.z;
    }
  }

  show() {
     fill(255);
     noStroke();
     let sx = map(this.x/this.z, 0, 1, 0, width);
     let sy = map(this.y/this.z, 0, 1, 0, height);
     let r = map(this.z, 0, width, 8, 0);
     //ellipse(sx, sy, r, r);
     stroke(255);
     let px = map(this.x/this.pz, 0, 1, 0, width);
     let py = map(this.y/this.pz, 0, 1, 0, height);
     line(px,py, sx, sy);
     this.pz = this.z;

  }
}

// FUNCTIONS

function toggleSong() {
   if (song.isPlaying()){
      song.pause();
   } else {
      song.play()
   }
}

function toggleShape() {
   circularShape = !circularShape;
}

function preload() {
   song1 = loadSound('can-you-feel-it.mp3');
   song2 = loadSound('lucid-dreams.mp3');
   song3 = loadSound('trombones.mp3');
   song4 = loadSound('SynthSaga.mp3');
   songs = [song1, song2, song3, song4]
}

function changeSong() {
   trackNum += 1
   if (trackNum >= songs.length){
      trackNum = 0;
   }
   song.pause();
   song = songs[trackNum];
   song.play();
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight-40);
  cnv.style('display', 'block');
  angleMode(DEGREES);

  // Buttons
  button = createButton('On/Off')
  button.mousePressed(toggleSong);
  shapeButton = createButton('Flat/Circle');
  shapeButton.mousePressed(toggleShape);
  button.mousePressed(toggleSong);
  nextSong = createButton("Next Song")
  nextSong.mousePressed(changeSong);
  button.position(width/2 - button.width, height);
  shapeButton.position(width/2, height);
  nextSong.position(width - nextSong.width, height);

  // Global defs
  trackNum = 0;
  circularShape = true;
  bands = 128;
  fft = new p5.FFT(0.78, bands);
  w = width / (bands * 1.5);
  song = songs[trackNum];
  magDir = 1;
  rotation = [0,0,0];
  midRing = height/5;
  highRing = height/3;
  stars = new Array(400);
  for (var i = 0; i < 400; i++){
    stars[i] = new Star(windowHeight, windowWidth);
  }
}

function draw() {
  background(0);

  var spectrum = fft.analyze();
  noStroke(0);
  if (circularShape){
     translate(width/2, height/2);
     drawCircle(spectrum);
     translate(-width/2, -height/2);
  } else {
    drawFlat(spectrum);
  }
  // stars
  translate(width/2, height/2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function drawFlat(spectrum){
  colorMode(HSB, bands);
  var maxF = Math.max(spectrum);
  for (var i = 0; i < spectrum.length; i++) {
     var amp = spectrum[i];
     var y = map(amp, 0, 255, height, 10);
     fill(i,255,255);
     rect(width/2 + i*w,y,w-2,height-y);
     rect(width/2 - i*w,y,w-2,height-y);
  }
}

function drawCircle(spectrum){
  noStroke();
  for (var i = 0; i < spectrum.length; i++) {
     if (i < spectrum.length/3) {
        colorMode(HSB, bands/3);
        lowFreqAnimation(i, spectrum);
     } else if (i < 2*spectrum.length/3) {
        colorMode(HSB, 2*bands/3);
        midFreqAnimation(i, spectrum);
     } else {
        colorMode(HSB, bands);
        highFreqAnimation(i, spectrum);
     }
   }
}

   function lowFreqAnimation(i, spectrum){
      rotate(rotation[0]);
      var amp = spectrum[i];
      var angle = map(i, 0, spectrum.length/3, 0, 180);
      var r = map(amp, 0, 256, 0, 100);
      var x = r * cos(angle);
      var y = r * sin(angle);
      stroke(i, 255, 255);
      line(0, 0, x, y);
      line(0, 0, -x, -y);
      rotate(-rotation[0]);
      rotation[0] += 0.1;
   }

   function midFreqAnimation(i, spectrum){
      //translate(width/2, height/2);
      rotate(rotation[1]);
      var amp = spectrum[i];
      var angle = map(i, spectrum.length/3, 2*spectrum.length/3, 0, 180);
      var r = map(amp, 0, 256, 0, 100);
      var x = r * cos(angle);
      var y = r * sin(angle);
      if (x > 0 & y > 0){
         translateDrawLineReturn(x, y, midRing*x/r, midRing*y/r);
         translateDrawLineReturn(-x, -y, -midRing*x/r, -midRing*y/r);
      }
      rotate(-rotation[1]);
      rotation[1] -= 0.1;
   }
      function highFreqAnimation(i, spectrum){
         //translate(width/2, height/2);
         rotate(rotation[2]);
         var amp = spectrum[i];
         var angle = map(i, 2*spectrum.length/3, spectrum.length, 0, 360);
         var r = map(amp, 0, 256, 0, 100);
         var x = r * cos(angle);
         var y = r * sin(angle);

         if (x > 0 & y > 0){
            translateDrawLineReturn(x, y, highRing*x/r, highRing*y/r);
            translateDrawLineReturn(-x, -y, -highRing*x/r, -highRing*y/r);
         }
         rotate(-rotation[2]);
         rotation[2] += 0.1;
      }

      function translateDrawLineReturn(x, y, tx, ty){
         translate(tx, ty);
         line(0,0, x, y);
         translate(-tx, -ty);
      }


      function translateDrawLineRetur2n(x, y, rad, angle, amp){
         arc(x, y, rad, rad, angle, angle + amp, OPEN)
      }
