$(document).ready(function(){
var magic8Ball = {};
magic8Ball.listOfAnswers = ["No", "Yes", "I don’t think so…", "Of course!", "Indubitably", "In your dreams."];
//hide answer when page loads
$("#answer").hide();
//ask question method. show 8ball triangle, fade in answer
magic8Ball.askQuestion = function(question){
$("#8ball").effect( "shake" );
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
$("#answer").fadeIn(4000);
var randomNumber = Math.random();
var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberForListOfAnswers);
var answer = this.listOfAnswers[randomIndex];
$("#answer").text(answer);
	console.log(question);
	console.log(answer);
};
//onclick function
var onClick = function() {
//hide previous answer
$("#answer").hide();
//display 8ball
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
//five time for the image to change
setTimeout(
	function(){
//create question box
var question = prompt("ASK A YES/NO QUESTION!");
magic8Ball.askQuestion(question);
//time delay for question box
},500);
};
//JQuery to ask question
$("#questionButton").click( onClick );
});
