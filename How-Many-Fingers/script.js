

document.getElementById("user-submit").onclick = function () {
    //random number between 0-5
    var fingers = Math.floor(Math.random() * 6);
    var guessedAnswer = document.getElementById("user-answer").value;
    if(guessedAnswer == fingers){
        alert("Correct!");
    }
    else {
        alert("Wrong! The correct answer is " + fingers);
    }
}

