//game starts
$(document).ready(function(){

//This holds the setInterval that runs the timer
var intervalId;

//timer object, starts at 30 seconds
var timer = {
	
	time: 10,

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
		$('#timeRemaining').html("Time Remaining: 00:10");		
});
$("#startButton").click(stopTimer);

//when time is up, games end -- hide h2, h3, p, input & show h4
function stopTimer() {
	setTimeout(function(){
		$("h2").hide();
		$("h3").hide();
		$("p").hide();
		$("input").hide();
		$("h4").show();
	}, 10000);
	triviaOver();
};

//shows correct, incorrect, and unanswered scores
var triviaOver = function() {
	var correctAnswers = $('input:checked[value=correct]').length; 
		$("#correctAnswers").text("Correct Answers: " + correctAnswers)
	//if ($('input:checked[value="correct"]').val() == 'correct') {};	
	var incorrectAnswers = $('input:checked[value=incorrect]').length;
		$("#incorrectAnswers").text("Incorrect Answers: " + incorrectAnswers)
	//var unanswered = 0;
};

});




