let amOscillator = new Tone.AMOscillator(100, 'sine', 'sine').start();
let gain = new Tone.Gain().toDestination();
let pan = new Tone.Panner().connect(gain);
let ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.1,
  decay: 0.15,
  sustain: 1.0,
  release: 0.8
}).connect(pan);
amOscillator.connect(ampEnv);
//was gonna make an explosion w this, but decided against it
//const metalSynth = new Tone.MetalSynth().toDestination();

let slider;
let keyboardDude;

function preload() {
  keyboardDude = loadImage("assets/graphics/bumbumletsgomeme.jpg");
}
//the notes are from a meme from last year
//I'd do the pitch thing done in lecture, but
//it's be a lot to keep up with, considering
//how often I have to change it for this, so
//I changed each pitch manually
function mousePressed() {
    console.log("Mouse Pressed");
    image(keyboardDude, 200, 200);
    amOscillator.frequency.setValueAtTime(100);
    ampEnv.triggerAttackRelease('4n');
    amOscillator.frequency.setValueAtTime(120, '+1');
    ampEnv.triggerAttackRelease('4n', '+1');
    amOscillator.frequency.setValueAtTime(100, '+1.5');
    ampEnv.triggerAttackRelease('4n', '+1.5');
    amOscillator.frequency.setValueAtTime(120, '+2');
    ampEnv.triggerAttackRelease('4n', '+2');
    amOscillator.frequency.setValueAtTime(120, '+2.5');
    ampEnv.triggerAttackRelease('4n', '+2.5');
    amOscillator.frequency.setValueAtTime(100, '+3');
    ampEnv.triggerAttackRelease('4n', '+3');
    amOscillator.frequency.setValueAtTime(80, '+4');
    ampEnv.triggerAttackRelease('4n', '+4');
    amOscillator.frequency.setValueAtTime(100, '+5');
    ampEnv.triggerAttackRelease('4n', '+5');
    amOscillator.frequency.setValueAtTime(90, '+5.5');
    ampEnv.triggerAttackRelease('4n', '+5.5');
    amOscillator.frequency.setValueAtTime(70, '+6');
    ampEnv.triggerAttackRelease('4n', '+6');

}

function setup() {
  createCanvas(400, 400);
  background(220);
  imageMode(CENTER);
  //image(keyboardDude, 200, 200);
  //slider = new Nexus.Slider("#slider");
  //distortion.toDestination();
  /*slider.on('change', (v) => {
    distortion.distortion = v;
  })*/
}

function keyPressed() {
  if (keyCode == 32)
  {
    Tone.start();
  }
}

function draw() {

  if((frameCount%60)==0)
  {
    //do something once/sec, but i want to keep the notes as they are

  }

  text("press space to start tone :)", 100, 100);
}