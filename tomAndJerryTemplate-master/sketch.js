var tom, tomRunning;




function preload() {
tomImage = loadAnimation("tomTwo.png, tomThree.png", tomRunning);
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(500,400);
    tom.addAnimation("Tom running", tomRunning);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
