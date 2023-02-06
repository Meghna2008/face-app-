Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});


Webcam.attach("#webcam");

function snap(){
    Webcam.snap(function(url){
        document.getElementById("snapView").innerHTML = '<img id="capture_image" src="'+url+'" />'
    });
}

console.log("model version :", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/n9hqejyQh/", modelloaded);

function modelloaded(){
    console.log("model is successfully loaded")
}



