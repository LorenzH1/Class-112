Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90,

    constraints: { 
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier("MobileNet", modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}
function Check(){
    image = document.getElementById("capture_image");
    classifier.classify(image, gotResult);
}
function gotResult(error, results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}
