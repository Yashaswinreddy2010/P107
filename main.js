function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/pN0L7752k/",modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}