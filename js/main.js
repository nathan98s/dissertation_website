// Creates variables in local storage for user answers and image arrays if this is the first time the page is loaded
// then displays an image
function setup() {
    if (window.sessionStorage.getItem("answers") == null) {
        var answers = {};
        window.sessionStorage.setItem("answers", JSON.stringify(answers))
    }

    if (window.sessionStorage.getItem("images") == null) {
        var myImages = new Array();
        var testImages = new Array();

        testImages[0] = ["images/images/practice/data-40-4-b-p.jpg", "images/images/practice/data-50-4r-e-p.jpg"];
        testImages[1] = ["images/images/practice/data-50-4r-e-p.jpg", "images/images/practice/data-40-4-b-p.jpg"];
        testImages[2] = ["images/images/practice/data-60-5-b-p.jpg", "images/images/practice/data-70-5r-e-p.jpg"];
        testImages[3] = ["images/images/practice/data-70-5r-e-p.jpg", "images/images/practice/data-60-5-b-p.jpg"];


        myImages[0] = ["images/images/A&R-30-3-at.jpg", "images/images/COL-30-3-at.jpg"]
        myImages[1] = ["images/images/COL-30-3-at.jpg", "images/images/A&R-30-3-at.jpg"]
        myImages[2] = ["images/images/A&R-30-3-st.jpg", "images/images/COL-30-3-st.jpg"]
        myImages[3] = ["images/images/COL-30-3-st.jpg", "images/images/A&R-30-3-st.jpg"]
        myImages[4] = ["images/images/A&R-30-4-at.jpg", "images/images/COL-30-4-at.jpg"]
        myImages[5] = ["images/images/COL-30-4-at.jpg", "images/images/A&R-30-4-at.jpg"]
        myImages[6] = ["images/images/A&R-30-4-st.jpg", "images/images/COL-30-4-st.jpg"]
        myImages[7] = ["images/images/COL-30-4-st.jpg", "images/images/A&R-30-4-st.jpg"]
        myImages[8] = ["images/images/A&R-30-5-at.jpg", "images/images/COL-30-5-at.jpg"]
        myImages[9] = ["images/images/COL-30-5-at.jpg", "images/images/A&R-30-5-at.jpg"]
        myImages[10] = ["images/images/A&R-30-5-st.jpg", "images/images/COL-30-5-st.jpg"]
        myImages[11] = ["images/images/COL-30-5-st.jpg", "images/images/A&R-30-5-st.jpg"]
        myImages[12] = ["images/images/A&R-30-6-at.jpg", "images/images/COL-30-6-at.jpg"]
        myImages[13] = ["images/images/COL-30-6-at.jpg", "images/images/A&R-30-6-at.jpg"]
        myImages[14] = ["images/images/A&R-30-6-st.jpg", "images/images/COL-30-6-st.jpg"]
        myImages[15] = ["images/images/COL-30-6-st.jpg", "images/images/A&R-30-6-st.jpg"]
        myImages[16] = ["images/images/A&R-45-3-at.jpg", "images/images/COL-45-3-at.jpg"]
        myImages[17] = ["images/images/COL-45-3-at.jpg", "images/images/A&R-45-3-at.jpg"]
        myImages[18] = ["images/images/A&R-45-3-st.jpg", "images/images/COL-45-3-st.jpg"]
        myImages[19] = ["images/images/COL-45-3-st.jpg", "images/images/A&R-45-3-st.jpg"]
        myImages[20] = ["images/images/A&R-45-4-at.jpg", "images/images/COL-45-4-at.jpg"]
        myImages[21] = ["images/images/COL-45-4-at.jpg", "images/images/A&R-45-4-at.jpg"]
        myImages[22] = ["images/images/A&R-45-4-st.jpg", "images/images/COL-45-4-st.jpg"]
        myImages[23] = ["images/images/COL-45-4-st.jpg", "images/images/A&R-45-4-st.jpg"]
        myImages[24] = ["images/images/A&R-45-5-at.jpg", "images/images/COL-45-5-at.jpg"]
        myImages[25] = ["images/images/COL-45-5-at.jpg", "images/images/A&R-45-5-at.jpg"]
        myImages[26] = ["images/images/A&R-45-5-st.jpg", "images/images/COL-45-5-st.jpg"]
        myImages[27] = ["images/images/COL-45-5-st.jpg", "images/images/A&R-45-5-st.jpg"]
        myImages[28] = ["images/images/A&R-45-6-at.jpg", "images/images/COL-45-6-at.jpg"]
        myImages[29] = ["images/images/COL-45-6-at.jpg", "images/images/A&R-45-6-at.jpg"]
        myImages[30] = ["images/images/A&R-45-6-st.jpg", "images/images/COL-45-6-st.jpg"]
        myImages[31] = ["images/images/COL-45-6-st.jpg", "images/images/A&R-45-6-st.jpg"]
        myImages[32] = ["images/images/A&R-60-3-at.jpg", "images/images/COL-60-3-at.jpg"]
        myImages[33] = ["images/images/COL-60-3-at.jpg", "images/images/A&R-60-3-at.jpg"]
        myImages[34] = ["images/images/A&R-60-3-st.jpg", "images/images/COL-60-3-st.jpg"]
        myImages[35] = ["images/images/COL-60-3-st.jpg", "images/images/A&R-60-3-st.jpg"]
        myImages[36] = ["images/images/A&R-60-4-at.jpg", "images/images/COL-60-4-at.jpg"]
        myImages[37] = ["images/images/COL-60-4-at.jpg", "images/images/A&R-60-4-at.jpg"]
        myImages[38] = ["images/images/A&R-60-4-st.jpg", "images/images/COL-60-4-st.jpg"]
        myImages[39] = ["images/images/COL-60-4-st.jpg", "images/images/A&R-60-4-st.jpg"]
        myImages[40] = ["images/images/A&R-60-5-at.jpg", "images/images/COL-60-5-at.jpg"]
        myImages[41] = ["images/images/COL-60-5-at.jpg", "images/images/A&R-60-5-at.jpg"]
        myImages[42] = ["images/images/A&R-60-5-st.jpg", "images/images/COL-60-5-st.jpg"]
        myImages[43] = ["images/images/COL-60-5-st.jpg", "images/images/A&R-60-5-st.jpg"]
        myImages[44] = ["images/images/A&R-60-6-at.jpg", "images/images/COL-60-6-at.jpg"]
        myImages[45] = ["images/images/COL-60-6-at.jpg", "images/images/A&R-60-6-at.jpg"]
        myImages[46] = ["images/images/A&R-60-6-st.jpg", "images/images/COL-60-6-st.jpg"]
        myImages[47] = ["images/images/COL-60-6-st.jpg", "images/images/A&R-60-6-st.jpg"]
        myImages[48] = ["images/images/A&R-75-3-at.jpg", "images/images/COL-75-3-at.jpg"]
        myImages[49] = ["images/images/COL-75-3-at.jpg", "images/images/A&R-75-3-at.jpg"]
        myImages[50] = ["images/images/A&R-75-3-st.jpg", "images/images/COL-75-3-st.jpg"]
        myImages[51] = ["images/images/COL-75-3-st.jpg", "images/images/A&R-75-3-st.jpg"]
        myImages[52] = ["images/images/A&R-75-4-at.jpg", "images/images/COL-75-4-at.jpg"]
        myImages[53] = ["images/images/COL-75-4-at.jpg", "images/images/A&R-75-4-at.jpg"]
        myImages[54] = ["images/images/A&R-75-4-st.jpg", "images/images/COL-75-4-st.jpg"]
        myImages[55] = ["images/images/COL-75-4-st.jpg", "images/images/A&R-75-4-st.jpg"]
        myImages[56] = ["images/images/A&R-75-5-at.jpg", "images/images/COL-75-5-at.jpg"]
        myImages[57] = ["images/images/COL-75-5-at.jpg", "images/images/A&R-75-5-at.jpg"]
        myImages[58] = ["images/images/A&R-75-5-st.jpg", "images/images/COL-75-5-st.jpg"]
        myImages[59] = ["images/images/COL-75-5-st.jpg", "images/images/A&R-75-5-st.jpg"]
        myImages[60] = ["images/images/A&R-75-6-at.jpg", "images/images/COL-75-6-at.jpg"]
        myImages[61] = ["images/images/COL-75-6-at.jpg", "images/images/A&R-75-6-at.jpg"]
        myImages[62] = ["images/images/A&R-75-6-st.jpg", "images/images/COL-75-6-st.jpg"]
        myImages[63] = ["images/images/COL-75-6-st.jpg", "images/images/A&R-75-6-st.jpg"]

        window.sessionStorage.setItem("practiceImages", JSON.stringify(testImages))
        window.sessionStorage.setItem("images", JSON.stringify(myImages))
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


    var identifyFeedback = document.getElementById("identifyFeedback").value
    // var easierFeedback = document.getElementById("easierFeedback").value
    // var lookFeedback = document.getElementById("changesFeedback").value
    // var harderFeedback = document.getElementById("harderFeedback").value;
    var genFeedback = document.getElementById("generalFeedback").value;

    var age = document.getElementById("age").value
    var experience = document.getElementById("experience").value
    var area = document.getElementById("area").value


    if (age.length < 1 || experience.length < 1 || area.length < 1) {
        alert("Please enter your demographic information")
    } else {
        if (identifyFeedback.length < 1 && easierFeedback.length < 1 && lookFeedback.length < 1 && harderFeedback.length < 1 && genFeedback.length < 1) {
            alert("You need to enter comments or close the tab!")
        } else {
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
            feedback["Age"] = age
            feedback["Experience"] = experience
            feedback["Area"] = area
            feedback["How did you identify groups?"] = identifyFeedback;
            // feedback["What made groups easier to see?"] = easierFeedback;
            // feedback["what made groups harder to see?"] = harderFeedback;
            feedback["Any other comments"] = genFeedback
            // feedback["how would you like social networks to look?"] = lookFeedback;
            const db = firebase.firestore();
            db.collection("feedback_2").doc().set(feedback)
                .then(function () {
                    document.getElementById("feedbackText").innerHTML = "Thank you for your feedback! " + "<br/>" + "You may now close the window";
                    document.getElementById("feedbackDiv").style.display = 'none'
                });
        }

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
    db.collection("/answers_3/").doc().set(answers)
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
        image.src = practiceImages[0][0];
        image2.src = practiceImages[0][1];
        practiceImages.splice(0, 1);
        window.sessionStorage.setItem("practiceImages", JSON.stringify(practiceImages));

    } else {
        if (counter % 8 == 0) {
            image.src = "images/images/break-p.png"
            image2.src = "images/images/break-p.png"
        } else {
            if (images.length == 0) {
                writeToDB();
            }
            var rnd = Math.floor(Math.random() * images.length);
            counter += 1;
            image.src = images[rnd][0];
            image2.src = images[rnd][1];
            images.splice(rnd, 1);
            window.sessionStorage.setItem("images", JSON.stringify(images))
        }
    }

}


// checks that an answer has been selected
function validate(id) {
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
        storeAnswer(id);
    } else {
        alert("You must select an answer!")
    }
}

// stores answer selected from radio buttons
function storeAnswer(id) {

    total = window.sessionStorage.getItem("total")
    count = total - ((JSON.parse(window.sessionStorage.getItem("images")).length + JSON.parse(window.sessionStorage.getItem("practiceImages")).length) - 1);
    document.getElementById("counter").innerHTML = "You are on image " + count + " of " + total;

    var answers = JSON.parse(window.sessionStorage.getItem("answers"))
    var img = document.getElementById("image");
    var img2 = document.getElementById("image2");

    var img_file = img.src.slice(-16);
    if (img_file[0] == "/") {
        img_file.slice(1);
    }

    var img_file2 = img2.src.slice(-16);
    if (img_file2[0] == "/") {
        img_file.slice(1);
    }

    var selected = id;

    console.log(selected);



    var question = [img_file, img_file2]

    if (img.src.search("-p") == -1) {



        if (selected == "image") {
            answers[question] = [img_file]
        } else {
            answers[question] = [img_file2]
        }

        console.log(answers)


        window.sessionStorage.setItem("answers", JSON.stringify(answers));

    }



    // if (img.src.search("-p") == -1) {

    //     for (var i = 0; i < radio.length; i++) {
    //         if (radio[i].checked) {
    //             var name = img.src.slice(-16);
    //             if (name[0] == "/") {
    //                 name = name.slice(1)
    //             }
    //             var dict = {}
    //             dict[radio[i].value] = confident
    //             answers[name] = dict;
    //             radio[i].checked = false;
    //             window.sessionStorage.setItem("answers", JSON.stringify(answers));
    //             break;
    //         }
    //     }
    // }
    console.log(answers)

    randomImg1();
}
