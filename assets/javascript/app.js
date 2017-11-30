//game starts
$(document).ready(function(){

//This holds the setInterval that runs the timer
var intervalId;

//timer object, starts at 30 seconds
var timer = {
	
	time: 30,

//starts the timer
startTime: function() {
	intervalID = setInterval(decrement, 1000);
	function decrement () {
		timer.time--;
		var currentTime = timer.timeConverter(timer.time);
		$('#timeRemaining').html("Time Remaining: " + currentTime);
	}	
},

//takes current time and converts it to minutes and seconds
timeConverter: function(t) {
	var minutes = Math.floor(t / 60);
	var seconds = t - (minutes * 60);

	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	if (minutes === 0) {
		minutes = "00";
	}

	else if (minutes < 10) {
		minutes = "0" + minutes;
	}

	return minutes + ":" + seconds;
}
};

//shows correct, incorrect, and unanswered scores
//I couldn't get this to work, unfortunately :(
function triviaOver() {
	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var unanswered = (6 - correctAnswers - incorrectAnswers);

	if ($('input:checked[value="correct"]').val() == 'correct') {
		$("#correctAnswers").text("Correct Answers: " + correctAnswers++)
	} if ($('input:checked[value="incorrect"]').val() == 'incorrect') {
		$("#incorrectAnswers").text("Incorrect Answers: " + incorrectAnswers++)
	} else ($("#unanswered").text("Unanswered: " + unanswered));
};

//when time is up, games end -- hide h2, h3, p, input & show h4
function stopTimer() {
	setTimeout(function(){
		$("h2").hide();
		$("h3").hide();
		$("p").hide();
		$("input").hide();
		$("h4").show();
	}, 30000);
	triviaOver();
};

//hide all questions and answers until start button is clicked
$("h2").hide();
$("h3").hide();
$("p").hide();
$("input").hide();
$("#startButton").click(timer.startTime); 
$("#startButton").click(function() {
		$(this).hide();
		$("h4").hide();
		$("h2").show();
		$("h3").show();
		$("p").show();
		$("input").show();
		$('#timeRemaining').html("Time Remaining: 00:30");		
});
$("#startButton").click(stopTimer);

});




