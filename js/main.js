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

        testImages[0] = "images/images/practice/data-40-3-a-p.jpg";
        testImages[1] = "images/images/practice/data-40-4-b-p.jpg";
        testImages[2] = "images/images/practice/data-40-5r-c-p.jpg";
        testImages[3] = "images/images/practice/data-50-3-d-p.jpg";
        testImages[4] = "images/images/practice/data-50-4r-e-p.jpg";
        testImages[5] = "images/images/practice/data-50-6r-f-p.jpg";
        testImages[6] = "images/images/practice/data-60-3r-a-p.jpg";
        testImages[7] = "images/images/practice/data-60-5-b-p.jpg";
        testImages[8] = "images/images/practice/data-60-6-c-p.jpg";
        testImages[9] = "images/images/practice/data-70-4r-d-p.jpg";
        testImages[10] = "images/images/practice/data-70-5r-e-p.jpg";
        testImages[11] = "images/images/practice/data-70-6-f-p.jpg";
        myImages[0] = "images/images/data-30-3-a.jpg";
        myImages[1] = "images/images/data-30-3-b.jpg";
        myImages[2] = "images/images/data-30-3-c.jpg";
        myImages[3] = "images/images/data-30-3-d.jpg";
        myImages[4] = "images/images/data-30-3-e.jpg";
        myImages[5] = "images/images/data-30-3-f.jpg";
        myImages[6] = "images/images/data-30-3r-a.jpg";
        myImages[7] = "images/images/data-30-3r-b.jpg";
        myImages[8] = "images/images/data-30-3r-c.jpg";
        myImages[9] = "images/images/data-30-3r-d.jpg";
        myImages[10] = "images/images/data-30-3r-e.jpg";
        myImages[11] = "images/images/data-30-3r-f.jpg";
        myImages[12] = "images/images/data-30-4-a.jpg";
        myImages[13] = "images/images/data-30-4-b.jpg";
        myImages[14] = "images/images/data-30-4-c.jpg";
        myImages[15] = "images/images/data-30-4-d.jpg";
        myImages[16] = "images/images/data-30-4-e.jpg";
        myImages[17] = "images/images/data-30-4-f.jpg";
        myImages[18] = "images/images/data-30-4r-a.jpg";
        myImages[19] = "images/images/data-30-4r-b.jpg";
        myImages[20] = "images/images/data-30-4r-c.jpg";
        myImages[21] = "images/images/data-30-4r-d.jpg";
        myImages[22] = "images/images/data-30-4r-e.jpg";
        myImages[23] = "images/images/data-30-4r-f.jpg";
        myImages[24] = "images/images/data-30-5-a.jpg";
        myImages[25] = "images/images/data-30-5-b.jpg";
        myImages[26] = "images/images/data-30-5-c.jpg";
        myImages[27] = "images/images/data-30-5-d.jpg";
        myImages[28] = "images/images/data-30-5-e.jpg";
        myImages[29] = "images/images/data-30-5-f.jpg";
        myImages[30] = "images/images/data-30-5r-a.jpg";
        myImages[31] = "images/images/data-30-5r-b.jpg";
        myImages[32] = "images/images/data-30-5r-c.jpg";
        myImages[33] = "images/images/data-30-5r-d.jpg";
        myImages[34] = "images/images/data-30-5r-e.jpg";
        myImages[35] = "images/images/data-30-5r-f.jpg";
        myImages[36] = "images/images/data-30-6-a.jpg";
        myImages[37] = "images/images/data-30-6-b.jpg";
        myImages[38] = "images/images/data-30-6-c.jpg";
        myImages[39] = "images/images/data-30-6-d.jpg";
        myImages[40] = "images/images/data-30-6-e.jpg";
        myImages[41] = "images/images/data-30-6-f.jpg";
        myImages[42] = "images/images/data-30-6r-b.jpg";
        myImages[43] = "images/images/data-30-6r-c.jpg";
        myImages[44] = "images/images/data-30-6r-d.jpg";
        myImages[45] = "images/images/data-30-6r-f.jpg";
        myImages[46] = "images/images/data-45-3-a.jpg";
        myImages[47] = "images/images/data-45-3-b.jpg";
        myImages[48] = "images/images/data-45-3-c.jpg";
        myImages[49] = "images/images/data-45-3-d.jpg";
        myImages[50] = "images/images/data-45-3-e.jpg";
        myImages[51] = "images/images/data-45-3-f.jpg";
        myImages[52] = "images/images/data-45-3r-a.jpg";
        myImages[53] = "images/images/data-45-3r-b.jpg";
        myImages[54] = "images/images/data-45-3r-c.jpg";
        myImages[55] = "images/images/data-45-3r-d.jpg";
        myImages[56] = "images/images/data-45-3r-e.jpg";
        myImages[57] = "images/images/data-45-3r-f.jpg";
        myImages[58] = "images/images/data-45-4-a.jpg";
        myImages[59] = "images/images/data-45-4-b.jpg";
        myImages[60] = "images/images/data-45-4-c.jpg";
        myImages[61] = "images/images/data-45-4-d.jpg";
        myImages[62] = "images/images/data-45-4-e.jpg";
        myImages[63] = "images/images/data-45-4-f.jpg";
        myImages[64] = "images/images/data-45-4r-a.jpg";
        myImages[65] = "images/images/data-45-4r-b.jpg";
        myImages[66] = "images/images/data-45-4r-c.jpg";
        myImages[67] = "images/images/data-45-4r-d.jpg";
        myImages[68] = "images/images/data-45-4r-e.jpg";
        myImages[69] = "images/images/data-45-4r-f.jpg";
        myImages[70] = "images/images/data-45-5-a.jpg";
        myImages[71] = "images/images/data-45-5-b.jpg";
        myImages[72] = "images/images/data-45-5-c.jpg";
        myImages[73] = "images/images/data-45-5-d.jpg";
        myImages[74] = "images/images/data-45-5-e.jpg";
        myImages[75] = "images/images/data-45-5-f.jpg";
        myImages[76] = "images/images/data-45-5r-a.jpg";
        myImages[77] = "images/images/data-45-5r-b.jpg";
        myImages[78] = "images/images/data-45-5r-c.jpg";
        myImages[79] = "images/images/data-45-5r-d.jpg";
        myImages[80] = "images/images/data-45-5r-e.jpg";
        myImages[81] = "images/images/data-45-5r-f.jpg";
        myImages[82] = "images/images/data-45-6-a.jpg";
        myImages[83] = "images/images/data-45-6-b.jpg";
        myImages[84] = "images/images/data-45-6-c.jpg";
        myImages[85] = "images/images/data-45-6-d.jpg";
        myImages[86] = "images/images/data-45-6-e.jpg";
        myImages[87] = "images/images/data-45-6-f.jpg";
        myImages[88] = "images/images/data-45-6r-a.jpg";
        myImages[89] = "images/images/data-45-6r-b.jpg";
        myImages[90] = "images/images/data-45-6r-c.jpg";
        myImages[91] = "images/images/data-45-6r-d.jpg";
        myImages[92] = "images/images/data-45-6r-e.jpg";
        myImages[93] = "images/images/data-45-6r-f.jpg";
        myImages[94] = "images/images/data-60-3-a.jpg";
        myImages[95] = "images/images/data-60-3-b.jpg";
        myImages[96] = "images/images/data-60-3-c.jpg";
        myImages[97] = "images/images/data-60-3-d.jpg";
        myImages[98] = "images/images/data-60-3-e.jpg";
        myImages[99] = "images/images/data-60-3-f.jpg";
        myImages[100] = "images/images/data-60-3r-a.jpg";
        myImages[101] = "images/images/data-60-3r-b.jpg";
        myImages[102] = "images/images/data-60-3r-c.jpg";
        myImages[103] = "images/images/data-60-3r-d.jpg";
        myImages[104] = "images/images/data-60-3r-e.jpg";
        myImages[105] = "images/images/data-60-3r-f.jpg";
        myImages[106] = "images/images/data-60-4-a.jpg";
        myImages[107] = "images/images/data-60-4-b.jpg";
        myImages[108] = "images/images/data-60-4-c.jpg";
        myImages[109] = "images/images/data-60-4-d.jpg";
        myImages[110] = "images/images/data-60-4-e.jpg";
        myImages[111] = "images/images/data-60-4-f.jpg";
        myImages[112] = "images/images/data-60-4r-a.jpg";
        myImages[113] = "images/images/data-60-4r-b.jpg";
        myImages[114] = "images/images/data-60-4r-c.jpg";
        myImages[115] = "images/images/data-60-4r-d.jpg";
        myImages[116] = "images/images/data-60-4r-e.jpg";
        myImages[117] = "images/images/data-60-4r-f.jpg";
        myImages[118] = "images/images/data-60-5-a.jpg";
        myImages[119] = "images/images/data-60-5-b.jpg";
        myImages[120] = "images/images/data-60-5-c.jpg";
        myImages[121] = "images/images/data-60-5-d.jpg";
        myImages[122] = "images/images/data-60-5-e.jpg";
        myImages[123] = "images/images/data-60-5-f.jpg";
        myImages[124] = "images/images/data-60-5r-a.jpg";
        myImages[125] = "images/images/data-60-5r-b.jpg";
        myImages[126] = "images/images/data-60-5r-c.jpg";
        myImages[127] = "images/images/data-60-5r-d.jpg";
        myImages[128] = "images/images/data-60-5r-e.jpg";
        myImages[129] = "images/images/data-60-5r-f.jpg";
        myImages[130] = "images/images/data-60-6-a.jpg";
        myImages[131] = "images/images/data-60-6-b.jpg";
        myImages[132] = "images/images/data-60-6-c.jpg";
        myImages[133] = "images/images/data-60-6-d.jpg";
        myImages[134] = "images/images/data-60-6-e.jpg";
        myImages[135] = "images/images/data-60-6-f.jpg";
        myImages[136] = "images/images/data-60-6r-a.jpg";
        myImages[137] = "images/images/data-60-6r-b.jpg";
        myImages[138] = "images/images/data-60-6r-c.jpg";
        myImages[139] = "images/images/data-60-6r-d.jpg";
        myImages[140] = "images/images/data-60-6r-e.jpg";
        myImages[141] = "images/images/data-60-6r-f.jpg";
        myImages[142] = "images/images/data-75-3-a.jpg";
        myImages[143] = "images/images/data-75-3-b.jpg";
        myImages[144] = "images/images/data-75-3-c.jpg";
        myImages[145] = "images/images/data-75-3-d.jpg";
        myImages[146] = "images/images/data-75-3-e.jpg";
        myImages[147] = "images/images/data-75-3-f.jpg";
        myImages[148] = "images/images/data-75-3r-a.jpg";
        myImages[149] = "images/images/data-75-3r-b.jpg";
        myImages[150] = "images/images/data-75-3r-c.jpg";
        myImages[151] = "images/images/data-75-3r-d.jpg";
        myImages[152] = "images/images/data-75-3r-e.jpg";
        myImages[153] = "images/images/data-75-3r-f.jpg";
        myImages[154] = "images/images/data-75-4-a.jpg";
        myImages[155] = "images/images/data-75-4-b.jpg";
        myImages[156] = "images/images/data-75-4-c.jpg";
        myImages[157] = "images/images/data-75-4-d.jpg";
        myImages[158] = "images/images/data-75-4-e.jpg";
        myImages[159] = "images/images/data-75-4-f.jpg";
        myImages[160] = "images/images/data-75-4r-a.jpg";
        myImages[161] = "images/images/data-75-4r-b.jpg";
        myImages[162] = "images/images/data-75-4r-c.jpg";
        myImages[163] = "images/images/data-75-4r-d.jpg";
        myImages[164] = "images/images/data-75-4r-e.jpg";
        myImages[165] = "images/images/data-75-4r-f.jpg";
        myImages[166] = "images/images/data-75-5-a.jpg";
        myImages[167] = "images/images/data-75-5-b.jpg";
        myImages[168] = "images/images/data-75-5-c.jpg";
        myImages[169] = "images/images/data-75-5-d.jpg";
        myImages[170] = "images/images/data-75-5-e.jpg";
        myImages[171] = "images/images/data-75-5-f.jpg";
        myImages[172] = "images/images/data-75-5r-a.jpg";
        myImages[173] = "images/images/data-75-5r-b.jpg";
        myImages[174] = "images/images/data-75-5r-c.jpg";
        myImages[175] = "images/images/data-75-5r-d.jpg";
        myImages[176] = "images/images/data-75-5r-e.jpg";
        myImages[177] = "images/images/data-75-5r-f.jpg";
        myImages[178] = "images/images/data-75-6-a.jpg";
        myImages[179] = "images/images/data-75-6-b.jpg";
        myImages[180] = "images/images/data-75-6-c.jpg";
        myImages[181] = "images/images/data-75-6-d.jpg";
        myImages[182] = "images/images/data-75-6-e.jpg";
        myImages[183] = "images/images/data-75-6-f.jpg";
        myImages[184] = "images/images/data-75-6r-a.jpg";
        myImages[185] = "images/images/data-75-6r-b.jpg";
        myImages[186] = "images/images/data-75-6r-c.jpg";
        myImages[187] = "images/images/data-75-6r-d.jpg";
        myImages[188] = "images/images/data-75-6r-e.jpg";
        myImages[189] = "images/images/data-75-6r-f.jpg";


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
    var easierFeedback = document.getElementById("easierFeedback").value
    var lookFeedback = document.getElementById("changesFeedback").value
    var harderFeedback = document.getElementById("harderFeedback").value;
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
            feedback["What made groups easier to see?"] = easierFeedback;
            feedback["what made groups harder to see?"] = harderFeedback;
            feedback["Any other comments"] = genFeedback
            feedback["how would you like social networks to look?"] = lookFeedback;
            const db = firebase.firestore();
            db.collection("feedback").doc().set(feedback)
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
        if (counter % 8 == 0) {
            image.src = "images/images/break-p.png"
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
    var radio = document.getElementsByName("Answer");
    var img = document.getElementById("image");
    var confident = id;

    console.log(confident)

    if (img.src.search("-p") == -1) {
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                var name = img.src.slice(-16);
                if (name[0] == "/") {
                    name = name.slice(1)
                }
                var dict = {}
                dict[radio[i].value] = confident
                answers[name] = dict;
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
