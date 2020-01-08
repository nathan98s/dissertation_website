function setup() {


    if (window.sessionStorage.getItem("answers") == null) {
        var answers = {};
        window.sessionStorage.setItem("answers", JSON.stringify(answers))
    }

    if (window.sessionStorage.getItem("images") == null) {
        var myImages1 = new Array();



        myImages1[0] = "images/images/attr_20.jpg";
        myImages1[1] = "images/images/attr_27.jpg";
        myImages1[2] = "images/images/attr_54.jpg";
        myImages1[3] = "images/images/attr_30.jpg";
        myImages1[4] = "images/images/attr_35.jpg";

        window.sessionStorage.setItem("images", JSON.stringify(myImages1))
    }

    randomImg1();

}

function randomImg1() {


    var images = JSON.parse(window.sessionStorage.getItem("images"))

    if (images.length == 0) {
        window.location.href = "feedback.html"
    }

    var rnd = Math.floor(Math.random() * images.length);

    var image = document.getElementById("image");
    image.src = images[rnd];

    images.splice(rnd, 1);

    window.sessionStorage.setItem("images", JSON.stringify(images))
}


function storeAnswer() {

    var answers = JSON.parse(window.sessionStorage.getItem("answers"))
    var radio = document.getElementsByName("Answer");
    var img = document.getElementById("image");

    var checkRadio = document.querySelector(
        'input[name="Answer"]:checked');

    if (checkRadio = null) {
        alert("You must select an answer")
    }

    for (var i = 0; i < radio.length; i++) {

        if (radio[i].checked) {
            var name = img.src.slice(-11)
            answers[name] = radio[i].value;
            console.log(answers);
            break;
        }
    }

    window.sessionStorage.setItem("answers", JSON.stringify(answers))

}