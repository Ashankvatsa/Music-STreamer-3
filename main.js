left_wrist_x=0;
song="";
right_wrist_x=0;
left_wrist_y=0;
right_wrist_y=0;
function preload(){
song=loadSound("heat.mp3");
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.position(400,200);
     
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotResults);
}
function draw(){
    image(video,0,0,500,400);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded(){
    console.log("Posente is intialized");
}
function gotResults(results){
    if(results.length>0){
        console.log(results);
        left_wrist_x=results[0].pose.leftWrist.x;
        left_wrist_y=results[0].pose.leftWrist.y;
        right_wrist_x=results[0].pose.rightWrist.x;
        right_wrist_y=results[0].pose.rightWrist.y;
        console.log("left wrist x= "+left_wrist_x+" left wrist y= "+left_wrist_y+
        "right wrist x= "+right_wrist_x+" right wrist y= "+right_wrist_y);
    }
}