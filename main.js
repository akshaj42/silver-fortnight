//https://teachablemachine.withgoogle.com/models/H_p3v9S-9/

Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 100
});
camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_img' src="+data_uri+">";
    });
}

console.log("ml5version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/H_p3v9S-9/model.json",modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function check(){
    img=document.getElementById("capture_img");
    classifier.classify(img,getresult);
}

function getresult(error,result){
    if(error){
        console.error(error);
        window.alert("Not able to identify image try clciking the image once again or reload the page!!");
    }

    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(2);
    }
}