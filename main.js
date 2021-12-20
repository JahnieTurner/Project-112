Prediction1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});


camera = document.getElementById("camera")
Webcam.attach("#camera")

function takesnapshot() {
    Webcam.snap(function(image) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + image + '">'
    })
}
console.log("ml5 version", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9pR59P77T/model.json", modelLoaded)

function modelLoaded() {
    console.log("model is loaded")
}

function check() {
    img = document.getElementById("captured_image")
    classifier.classify(img, gotResult)
}

function gotResult(error, result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
        Prediction1 = result[0].label
        speak()

        document.getElementById("result_emotion_name").innerHTML = Prediction1


        if (Prediction1 == "OK") {
            document.getElementById("update_emoji").innerHTML = "&#128076"
        }
        if (Prediction1 == "Thumbs Up") {
            document.getElementById("update_emoji").innerHTML = "&#128077"
        }
        if (Prediction1 == "Peace") {
            document.getElementById("update_emoji").innerHTML = "&#9996"
        }
        if (Prediction1 == "Hi") {
            document.getElementById("update_emoji").innerHTML = "&#128400"
        }
        if (Prediction1 == "Vulcan Salute") {
            document.getElementById("update_emoji").innerHTML = "&#128406"
        }
        if (Prediction1 == "Love You") {
            document.getElementById("update_emoji").innerHTML = "&#128304"
        }

    }
}