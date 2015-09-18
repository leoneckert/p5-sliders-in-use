var sineS;

var sineS2;


var simpleS;
var simpleS2;
var simpleS3;

var simpleS3;


function setup() {
  createCanvas(800, 800);
  sineS = new SineSlider(40, 80, 700, 10, 0.09, 0, 0);
  sineS2 = new SineSlider(40, 320, 700, 300, 0.01, 0, 0);

  simpleS = new SimpleSlider(40, 200, 700, 0, 0);
  simpleS2 = new SimpleSlider(500, 600, 200, 0, 0);
  simpleS2.value = 255;
  simpleS3 = new SimpleSlider(500, 700, 200, 0, 0);
  simpleS3.value = 0;
  simpleS4 = new SimpleSlider(40, 700, 200, 255, 255);
  simpleS4.value = 0;


}

function draw() {
  background(255 - sineS.value, 255 - sineS2.value, 255 - simpleS.value);
  sineS2.intensity = map(simpleS2.value, 1.275, 255, 0, 300);
  print(simpleS3.value);
  sineS.frequency = map(simpleS3.value, 0, 255, 0.09, 0.4);

  sineS.display();
  sineS2.display();
  simpleS.display();


  simpleS2.display();
  simpleS3.display();

  background(0, 255 - simpleS4.value);
  simpleS4.strokeC = 255 - simpleS4.value;

  simpleS4.display();

}