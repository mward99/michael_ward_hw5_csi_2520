function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question3.value;
    var question5 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "A") {
		correct++;
}
	if (question2 == "A") {
		correct++;
}	
	if (question3 == "A") {
		correct++;
}
    if (question4 == "C") {
    correct++;
}
    if (question5 == "D") {
    correct++;
}    

	
	
	var messages = ["Great job!", "You can do better!", "Study More!"];
	var score;

	if (correct == 0) {
		score = 2;
    }
    if (correct == 1) {
		score = 2;
    }
    if (correct == 2) {
		score = 2;
    }
    if (correct == 3) {
		score = 1;
    }
    if (correct == 4) {
		score = 0;
    }
    if (correct == 5) {
		score = 0;
    }

	

   


	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	
	}
	




