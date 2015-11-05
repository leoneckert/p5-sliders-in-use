//trying out how to branch project with Kat, yeah!

var sineS;

var sineS2;


var simpleS;
var simpleS2;
var simpleS3;

var simpleS3;


function setup() {
  createCanvas(800, 800);
  sineS = new SineSlider(50, 100, 700, 10, 0.09, 0, 0);
  sineS2 = new SineSlider(50, 340, 700, 300, 0.01, 0, 0);

  simpleS = new SimpleSlider(50, 220, 700, 0, 0);
  
  simpleS2 = new SimpleSlider(550, 620, 200, 0, 0);
  simpleS2.value = 255;
  simpleS3 = new SimpleSlider(550, 720, 200, 0, 0);
  simpleS3.value = 255;
  simpleS4 = new SimpleSlider(50, 720, 200, 255, 255);
  simpleS4.value = 0;


}



function draw() {
  

 
  
  background(255 - sineS.value, 255 - sineS2.value, 255 - simpleS.value);
  sineS2.intensity = map(simpleS2.value,0, 255, 0, 300);
  sineS.frequency = map(simpleS3.value, 0, 255, 0.03, 0.09);

  sineS.display();
  sineS2.display();
  simpleS.display();


  simpleS2.display();
  simpleS3.display();

  background(0, 255 - simpleS4.value);
  //simpleS4.strokeC = 255 - simpleS4.value;

  simpleS4.display();
  
  
   if(sineS.value + sineS2.value + simpleS.value > 670){
    sineS.strokeC = 255;
    sineS.fillC = 255;
    sineS2.strokeC = 255;
    sineS2.fillC = 255;
    simpleS.strokeC = 255;
    simpleS.fillC = 255;
    simpleS2.strokeC = 255;
    simpleS2.fillC = 255;
    simpleS3.strokeC = 255;
    simpleS3.fillC = 255;
    simpleS4.strokeC = 255;
    simpleS4.fillC = 0;
  }else{
    sineS.strokeC = 0;
    sineS.fillC = 0;
    sineS2.strokeC = 0;
    sineS2.fillC = 0;
    simpleS.strokeC = 0;
    simpleS.fillC = 0;
    simpleS2.strokeC = 0;
    simpleS2.fillC = 0;
    simpleS3.strokeC = 0;
    simpleS3.fillC = 0;
    
    simpleS4.fillC = 255;
    simpleS4.strokeC = 255 - simpleS4.value;
  }

}