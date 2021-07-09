noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, model_load_hogaya);
    poseNet.on('pose', poses_milgaya);
}

function model_load_hogaya() {
    console.log('PoseNet model is initialized!');
}

function draw() {
    background('#00FFBF');
    document.getElementById('square_side').innerHTML = 'Width and Height of a Text will be = ' + difference + 'px';
    fill('#F90093');
    stroke('#F90093');
    textSize(difference);
    text('Anonymous', noseX, noseY);
}

function poses_milgaya(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log('noseX = ' + noseX + ', noseY = ' + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log('leftWristX = ' + leftWristX + ', rightWristX = ' + rightWristX + ', difference = ' + difference);
    }
}