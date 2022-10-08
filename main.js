song1=""
song2=""
song1_status=""
song2_status=""
lwristX=0
lwristY=0
rwristX=0
rwristY=0
function preload(){
 song1=loadSound("music.mp3")
 song2=loadSound("music2.mp3")      
}

function setup(){
    canvas=createCanvas(600,550)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}
function draw(){
    image(video,0,0,600,550)
}
function modelLoaded(){
    console.log("posenet is initialized")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        lwristX=results[0].pose.leftWrist.x
        lwristY=results[0].pose.leftWrist.y
        console.log("leftWristX="+lwristX+"leftWristY="+lwristY)
    
        rwristX=results[0].pose.rightWrist.x
        rwristY=results[0].pose.rightWrist.y
        console.log("rightWristX="+rwristX+"rightWristY="+rwristY)
    }

}