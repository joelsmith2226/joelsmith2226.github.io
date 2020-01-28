// Joel Smith
// Music Visualizer

var song;
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
   songs = [song1, song2, song3]
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
  colorMode(HSB);
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
  fft = new p5.FFT(0.78, 64);
  w = width / 64;
  song = songs[trackNum];
  magDir = 1;
  rotation = 0;
}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  noStroke(0);
  if (circularShape){
     drawCircle(spectrum);
 } else {
    drawFlat(spectrum);
 }
}

function drawFlat(spectrum){
  var maxF = Math.max(spectrum);
  for (var i = 0; i < spectrum.length; i++) {
     var amp = spectrum[i];
     var y = map(amp, 0, maxF, height, 0);
     fill(i,255,255);
     rect(i*w,y,w-2,height-y)
  }
}

function drawCircle(spectrum){
  noStroke();
  var maxF = Math.max(spectrum);
  translate(width/2, height/2);

  // Animation
  rotate(rotation);
  rotation += 1;
  scale(magnify);
  if (magnify > 5 || magnify < 0.4) {
     magDir *= -1;
  }
  magnify += 0.2 * magDir;



  for (var i = 0; i < spectrum.length; i++) {
     var amp = spectrum[i];
     var x = i;
     var y = map(amp, 0, maxF, height, 0);
     if (circularShape) {
        var angle = map(i, 0, spectrum.length, 0, 360);
        var r = map(amp, 0, 256, 20, 100);
        x = r * cos(angle);
        y = r * sin(angle);
     }
     stroke(i, 255, 255);
     line(0, 0, x, y);
   }
}
