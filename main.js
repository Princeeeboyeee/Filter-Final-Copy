noseX=0;
noseY=0;

function preload(){
clown_nose=loadImage('https://i.postimg.cc/tC0jW4mT/clownnose.png');
}

function setup(){
    canvas=createCanvas(400, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
image(video, 0, 0, 400, 300);
//circle(noseX, noseY, 20);
//fill(255,0,0);
//stroke(0,0,0);
image(clown_nose, noseX, noseY, 50, 40);
}

function take_snapshot(){
    save('Snapshot.png');
}

function modelLoaded(){
    console.log( 'poseNet is Initialized' );
}

function gotPoses(results){
    if(results.length>0){
     console.log(results);
     noseX=results[0].pose.nose.x;
     noseY=results[0].pose.nose.y;
     console.log("noseX= " + noseX);
     console.log("noseY= " + noseY);
    }
}