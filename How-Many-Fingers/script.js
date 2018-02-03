

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


document.getElementById("guess").onclick = function() {
	var myNumber = document.getElementById('my-fingers').value;
	var guess;
	var guesses = 0;
	var correctGuess = false;

	while(correctGuess == false){
		guess = Math.floor(Math.random() * 6);
		if(guess == myNumber){
			correctGuess = true;
			alert("Computer got the correct answer after " + guesses + " guesses.");
		}
		else{
			guesses++;
		}
	}

}
