var myball, position, database;

function setup(){
    createCanvas(500,500);

        database = firebase.database();

    myball = createSprite(250,250,10,10);
    myball.shapeColor = "red";

    var myballPosition = database.ref("ball/position");
    myballPosition.on("value", readPosition)  //switch on reading mode
    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
    position = data.val();
    myball.x = position.x;  
    myball.y = position.y;
}

function changePosition(x,y){  //executes data "read" in function read
    database.ref('ball/position').set({ 
        'x': position.x + x,
        'y': position.y + y
    })

}
