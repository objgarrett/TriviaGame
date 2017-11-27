//game starts
$(document).ready(function(){
	//hide all questions and answers until start button is clicked
	$("h2").hide();
	$("h3").hide();
	$("p").hide();
	$("input").hide();
	$("#startButton").click(function() {
		$(this).hide();
		$("h2").show();
		$("h3").show();
		$("p").show();
		$("input").show();
		startTime();
	});

	var intervalId;
	//time counter starts - 2:00 minutes
	function startTime() {
		document.getElementById('timeRemaining').innerHTML = "Time Remaining: " 
	}
	//when time is up, game ends
	//hide h2, h3, p, input
	//show #allDone #correctAnswers #incorrectAnswer #unanswered
	//if value=answers then correctAnswers++
	if ($('input[value="answer"]').val() == 'answer') {
		$("#correctAnswers").text("Correct Answers: " + correctAnswers++)
	} else if ($('input[value="incorrect"]').val() == 'incorrect') {
		$("#incorrectAnswers").text("Incorrect Answers: " + incorrectAnswers++)
	} else ($("#unanswered").text("Unanswered: " + unanswered++)) 
	});
	//if else value=incorrect then incorrectAnswer++ 
	//else unanswered++





