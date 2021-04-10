let x = 0;
let y = 0;
let x1 = 0;
let x2 = 0;
function setup(){
    y = mouseY / 3;
    x1 = mouseX / 4;
    x2 = mouseX / 4;
    let width = 255;
    let height = 255;
    createCanvas(765, 765);
    background(255, 255, 255);
    noStroke();
}

function mousePressed(){
    x=x + 1;
    y=y + 1;
}

function keyPressed(){
    x=x + 1;
}

function draw(){
    let curSize = 10;
    let half_curSize = curSize / 2;
    let curX = 0;
    let curY = 0;
    let y = mouseY / 3;
    let x1 = (mouseX / 4);
    let x2 = 255 - (mouseX / 4);
    fill(y, x1, x2);
    rect(0, 0, width, height);
    console.log("Red:" + y);
    console.log("Green:" + x1);
    console.log("Blue:" + x2);
    console.log();
    curX=(mouseX - half_curSize);
    curY=(mouseY - half_curSize);
    fill(x1, x2, y);
    rect(curX, curY, curSize, curSize, half_curSize, half_curSize, half_curSize, half_curSize);
}
