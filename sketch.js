'use strict';

function setup() {
    let c = createCanvas(640, 640);
    noCursor();

    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
    noStroke();
}

function draw() {
    background(54, 71, 96);

    //These values will be used as input when generating the rectangles on screen so that any canvas
    //size change will change the proportions of the design.
    let scaleX = width / 640;
    let scaleY = height / 640;
    

    for(let i = 0; i < 21; i++){
     fill(0, 0, 0);
     //Distance between rectangles should be 0.0171875‬ in relation to canvas height.
    rect(134 * scaleX, 184 * scaleY + (i * 11 * scaleY), width * 0.0609375, height * 0.0078125);
    }
}



function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
