'use strict';

let bgVarH;
let bgVarS;
let bgVarV;
let rectFill;
let backLineOpac;
let rotateBoolean;
let rotateValue;
let rectRound;
let backgroundOpac;

function setup() {
    let c = createCanvas(1240, 1754);
    noCursor();
    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
    noStroke();
    bgVarH = 54;
    bgVarS = 73;
    bgVarV = 96;
    rectFill = 0;
    backLineOpac = 0.07;
    rotateBoolean = false;
    rotateValue = 0;
    rectRound = 5;
    backgroundOpac = 1;
}

function draw() {
    //These values will be used as input when generating the rectangles on screen so that any canvas
    //size change will change the proportions of the design.

    let scaleX = width / 640;
    let scaleY = height / 640;

    let xBackground = map(mouseX, 0, width, 0, 100);
    let xFill = map(mouseX, 0, width, 50, 60);
    let yRowHeight = map(mouseY, 0, height, 0.8, 1.5);
    let xColPos = map(mouseX, 0, width, 0, 1);
    let lineSpacing = 11 * scaleY;


    background(bgVarH, bgVarS, bgVarV, backgroundOpac);



    //Generates first row of black rectangles.
    for (let i = 1; i <= 26; i++) {
        fill(rectFill);
        rotate(rotateValue);
        rect(134 * scaleX * (xColPos * 0.9), 184 * scaleY + (i * lineSpacing * yRowHeight), 50 * scaleX, 6 * scaleY, rectRound);
    }

    //Generates second row of black rectangles.
    for (let i = 0; i < 32; i++) {
        fill(rectFill);
        rect(380 * scaleX * xColPos, 130 * scaleY + (i * lineSpacing * yRowHeight), 50 * scaleX, 6 * scaleY, rectRound);
    }

    //Generates row of semi black rectangles accompanying the second row.
    for (let i = 0; i < 27; i++) {
        fill(rectFill);
        rect(460 * scaleX * (xColPos * 0.98), 240 * scaleY + (i * lineSpacing * yRowHeight), 24 * scaleX, 6 * scaleY, rectRound);
    }

    //Generates first row low opacity lines.
    for (let i = 0; i < 14; i++) {
        fill(rectFill, backLineOpac);
        rect(110 * scaleX * (xColPos * 0.92), 267 * scaleY + (i * lineSpacing * yRowHeight), 140 * scaleX, 2.5 * scaleY, rectRound);
    }

    //Interlacing semi opacity lines; the width is exactly half of the first row in the original piece.
    for (let i = 0; i < 7; i++) {
        fill(rectFill, backLineOpac);
        rect(210 * scaleX, 350 * scaleY + (i * lineSpacing * yRowHeight), 70 * scaleX * xColPos, 2.5 * scaleY, rectRound);
    }
    for (let i = 0; i < 7; i++) {
        fill(rectFill, backLineOpac);
        rect(240 * scaleX, 345 * scaleY + (i * lineSpacing * yRowHeight), 70 * scaleX * xColPos, 2.5 * scaleY, rectRound);
    }

    //Right side low opacity lines
    for (let i = 0; i < 9; i++) {
        fill(rectFill, backLineOpac);
        rect(430 * scaleX * (xColPos * 0.95), 310 * scaleY + (i * lineSpacing * yRowHeight), 210 * scaleX, 2.5 * scaleY, rectRound);
    }
}



//The keyPressed function "listens" for keyboard input and executes code accordingly (similar to a switch statement).
//The below keys edit the image in several ways.
function keyPressed() {
    // if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

    if (key == 1) {
        bgVarH = (54);
        bgVarS = (73);
        bgVarV = (96);
        rectFill = (0);
        backLineOpac = 0.07;
    }


    if (key == 2) {
        bgVarH = (0);
        bgVarS = (0);
        bgVarV = (0);
        rectFill = (100);
        backLineOpac = 0.2;
    }

    if (key == 3) {
        bgVarH = (100);
        bgVarS = (0);
        bgVarV = (100);
        rectFill = (0);
        backLineOpac = 0.09;
    }

    if (key == 4) {
        bgVarH = (353);
        bgVarS = (100);
        bgVarV = (100);
        rectFill = (0);
        backLineOpac = 0.04;
    }

    if (key == 'q') {
        rotateValue += 0.0025;
    }

    if (key == 'w') {
        rotateValue -= 0.0025;
    }

    if (key == 'e' && rectRound > 0) {
        rectRound -= 1;
    }

    if (key == 'r') {
        rectRound += 1;
    }

    if (key == 'a') {
        backgroundOpac += 0.1;
    }

    if (key == 's') {
        backgroundOpac -= 0.1;
    }
}
