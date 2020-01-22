// Creates variables in local storage for user answers and image arrays if this is the first time the page is loaded
// then displays an image
function setup() {
    if (window.sessionStorage.getItem("answers") == null) {
        var answers = {};
        window.sessionStorage.setItem("answers", JSON.stringify(answers))
    }

    if (window.sessionStorage.getItem("images") == null) {
        var myImages1 = new Array();
        var testImages = new Array();

        testImages[0] = "images/images/practice/practice1.jpg"
        testImages[1] = "images/images/practice/practice2.jpg"
        testImages[2] = "images/images/practice/practice3.jpg"
        testImages[3] = "images/images/practice/practice4.jpg"
        testImages[4] = "images/images/practice/practice5.jpg"
        testImages[5] = "images/images/practice/practice6.jpg"
        testImages[6] = "images/images/practice/practice7.jpg"
        testImages[7] = "images/images/practice/practice8.jpg"


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

        window.sessionStorage.setItem("practiceImages", JSON.stringify(testImages))
        window.sessionStorage.setItem("images", JSON.stringify(myImages1))
    }

    var counter = 0;
    window.sessionStorage.setItem("counter", counter);

    total = (JSON.parse(window.sessionStorage.getItem("images")).length + JSON.parse(window.sessionStorage.getItem("practiceImages")).length)
    count = total - ((JSON.parse(window.sessionStorage.getItem("images")).length + JSON.parse(window.sessionStorage.getItem("practiceImages")).length) - 1);
    window.sessionStorage.setItem("total", total)


    document.getElementById("counter").innerHTML = "You are on image " + count + " of " + total
    randomImg1();

}

// checks there is feedback in text box before submitting to database
function validateFeedback() {
    var userText = document.getElementById("feedback").value;
    if (userText.length < 1) {
        alert("You must either enter feedback or close this tab!")
    } else {
        // storeFeedback();
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

        feedback["feedback"] = userText;
        const db = firebase.firestore();
        db.collection("feedback").doc().set(feedback)
            .then(function () {
                document.getElementById("feedbackText").innerHTML = "Thank you for your feedback! " + "<br/>" + "You may now close the window";
                document.getElementById("feedbackDiv").style.display = 'none'
            });
    }
}

// writes user answers to database then loads page for feedback
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

// picks random image from array of image files to be displayed
function randomImg1() {
    var practiceImages = JSON.parse(window.sessionStorage.getItem("practiceImages"));
    var counter = JSON.parse(window.sessionStorage.getItem("counter"))
    var image = document.getElementById("image");
    var images = JSON.parse(window.sessionStorage.getItem("images"));
    image.style.transform = 'rotate(' + rand * 90 + 'deg)'

    counter += 1
    window.sessionStorage.setItem("counter", counter)

    var rand = Math.floor(Math.random() * 4)

    // checks if practice images are still to be completed and if not moves on to experimental images
    if (practiceImages.length > 0) {
        image.src = practiceImages[0];
        practiceImages.splice(0, 1);
        window.sessionStorage.setItem("practiceImages", JSON.stringify(practiceImages));

    } else {
        if (counter % 8 == 1) {
            image.src = "images/images/practice_break.png"
        } else {
            if (images.length == 0) {
                writeToDB();
            }
            var rnd = Math.floor(Math.random() * images.length);
            counter += 1;
            image.src = images[rnd];
            images.splice(rnd, 1);
            window.sessionStorage.setItem("images", JSON.stringify(images))
        }
    }

}


// checks that an answer has been selected
function validate() {
    var radio = document.getElementsByName("Answer");
    var checked = false;
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            checked = true;
            break;
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

// stores answer selected from radio buttons
function storeAnswer() {

    total = window.sessionStorage.getItem("total")

    count = total - ((JSON.parse(window.sessionStorage.getItem("images")).length + JSON.parse(window.sessionStorage.getItem("practiceImages")).length) - 1);
    document.getElementById("counter").innerHTML = "You are on image " + count + " of " + total;
    var answers = JSON.parse(window.sessionStorage.getItem("answers"))
    var radio = document.getElementsByName("Answer");
    var img = document.getElementById("image");

    if (img.src.search("practice") == -1) {
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                var name = img.src.slice(63, -4);
                answers[name] = radio[i].value;
                radio[i].checked = false;
                window.sessionStorage.setItem("answers", JSON.stringify(answers));
                break;
            }
        }

    }

    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            radio[i].checked = false;
        }
    }

    console.log(answers)

    randomImg1();


}
