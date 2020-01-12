function setup() {

    if (window.sessionStorage.getItem("answers") == null) {
        var answers = {};
        window.sessionStorage.setItem("answers", JSON.stringify(answers))
    }

    if (window.sessionStorage.getItem("images") == null) {

        var myImages1 = new Array();

        myImages1[0] = "images/images/attr_20.jpg";
        myImages1[1] = "images/images/attr_27.jpg";
        myImages1[2] = "images/images/attr_30.jpg";
        myImages1[3] = "images/images/attr_35.jpg";
        myImages1[4] = "images/images/attr_45.jpg";
        myImages1[5] = "images/images/attr_50.jpg";
        myImages1[6] = "images/images/attr_65.jpg";
        myImages1[7] = "images/images/attr_73.jpg";
        myImages1[8] = "images/images/attr_80.jpg";
        myImages1[9] = "images/images/attr_54.jpg";
        myImages1[10] = "images/images/attr_repuls_20.jpg";
        myImages1[11] = "images/images/attr_repuls_27.jpg";
        myImages1[12] = "images/images/attr_repuls_30.jpg";
        myImages1[13] = "images/images/attr_repuls_35.jpg";
        myImages1[14] = "images/images/attr_repuls_45.jpg";
        myImages1[15] = "images/images/attr_repuls_50.jpg";
        myImages1[16] = "images/images/attr_repuls_54.jpg";
        myImages1[17] = "images/images/attr_repuls_65.jpg";
        myImages1[18] = "images/images/attr_repuls_73.jpg";
        myImages1[19] = "images/images/attr_repuls_80.jpg";
        myImages1[20] = "images/images/fr_20.jpg";
        myImages1[21] = "images/images/fr_27.jpg";
        myImages1[22] = "images/images/fr_30.jpg";
        myImages1[23] = "images/images/fr_35.jpg";
        myImages1[24] = "images/images/fr_45.jpg";
        myImages1[25] = "images/images/fr_50.jpg";
        myImages1[26] = "images/images/fr_54.jpg";
        myImages1[27] = "images/images/fr_65.jpg";
        myImages1[28] = "images/images/fr_73.jpg";
        myImages1[29] = "images/images/fr_80.jpg";
        myImages1[30] = "images/images/repuls_20.jpg";
        myImages1[31] = "images/images/repuls_27.jpg";
        myImages1[32] = "images/images/repuls_30.jpg";
        myImages1[33] = "images/images/repuls_35.jpg";
        myImages1[34] = "images/images/repuls_45.jpg";
        myImages1[35] = "images/images/repuls_50.jpg";
        myImages1[36] = "images/images/repuls_54.jpg";
        myImages1[37] = "images/images/repuls_65.jpg";
        myImages1[38] = "images/images/repuls_73.jpg";
        myImages1[39] = "images/images/repuls_80.jpg";


        window.sessionStorage.setItem("images", JSON.stringify(myImages1))
    }

    count = 40 - (JSON.parse(window.sessionStorage.getItem("images")).length - 1)

    document.getElementById("counter").innerHTML = "You are on image " + count + " of 40"

    randomImg1();

}

function validateFeedback() {
    var userText = document.getElementById("feedback").value;
    if (userText.length < 1) {
        alert("You must either enter feedback or close this tab!")
    } else {
        storeFeedback();
    }

}

function storeFeedback() {

    var firebaseConfig = {
        apiKey: "AIzaSyDloyd9QhqpQciShEQZDXQHJDUTdz5FnPU",
        authDomain: "dissertation-experiment.firebaseapp.com",
        databaseURL: "https://dissertation-experiment.firebaseio.com",
        projectId: "dissertation-experiment",
        storageBucket: "dissertation-experiment.appspot.com",
        messagingSenderId: "198181183945",
        appId: "1:198181183945:web:378269b149458c41ad4818",
        measurementId: "G-Y7ZMXFYRXR"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var feedback = {}
    var userText = document.getElementById("feedback").value;

    feedback["feedback"] = userText;
    const db = firebase.firestore();
    db.collection("feedback").doc().set(feedback)
        .then(function () {
            document.getElementById("feedbackText").innerHTML = "Thank you for your feedback! " + "<br/>" + "You may now close the window";
            document.getElementById("feedbackDiv").style.display = 'none'
        });



}


function writeToDB() {

    var answers = JSON.parse(window.sessionStorage.getItem("answers"));
    var firebaseConfig = {
        apiKey: "AIzaSyDloyd9QhqpQciShEQZDXQHJDUTdz5FnPU",
        authDomain: "dissertation-experiment.firebaseapp.com",
        databaseURL: "https://dissertation-experiment.firebaseio.com",
        projectId: "dissertation-experiment",
        storageBucket: "dissertation-experiment.appspot.com",
        messagingSenderId: "198181183945",
        appId: "1:198181183945:web:378269b149458c41ad4818",
        measurementId: "G-Y7ZMXFYRXR"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    db.collection("/answers/").doc().set(answers)
        .then(function () {
            console.log("Document successfully written!");
            window.location.href = "feedback.html"
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

function randomImg1() {
    var images = JSON.parse(window.sessionStorage.getItem("images"))
    if (images.length == 0) {
        writeToDB();
    }
    console.log(images)
    var rnd = Math.floor(Math.random() * images.length);
    console.log(rnd)
    var image = document.getElementById("image");

    image.src = images[rnd];
    images.splice(rnd, 1);
    window.sessionStorage.setItem("images", JSON.stringify(images))
}

function validate() {
    var radio = document.getElementsByName("Answer");
    var checked = false;
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            console.log(radio[i])
            checked = true;
            break;
            console.log("checked: " + checked);
        } else {
            checked = false;
        }
    }
    if (checked) {
        storeAnswer();
    } else {
        alert("You must select an answer!")
    }
}

function storeAnswer() {

    count = 40 - (JSON.parse(window.sessionStorage.getItem("images")).length - 1);
    document.getElementById("counter").innerHTML = "You are on image " + count + " of 40";
    var answers = JSON.parse(window.sessionStorage.getItem("answers"))
    var radio = document.getElementsByName("Answer");
    var img = document.getElementById("image");

    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            var name = img.src.slice(63, -4);
            answers[name] = radio[i].value;
            radio[i].checked = false;
            break;
        }
    }
    console.log(answers);

    window.sessionStorage.setItem("answers", JSON.stringify(answers));

    randomImg1();
}






