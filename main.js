function preload(){}

function setup(){
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HK9O-5RC0/model.json', ModelLoaded);
}

function ModelLoaded(){
    console.log("Model Loaded!");
}

function draw(){
    image(video, 0, 0, 350, 350);
    classifier.classify(video, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}