var mySeconds;
var intervalHandle;
var pauseButton = false;
var inputArea = document.getElementById("inputArea");

function resetPage() {
	inputArea.style.display = "inline";	
}
if (!pauseButton) {
	function tick() {
		var timeDisplay = document.getElementById("cdwnTime");
		var min = Math.floor(mySeconds / 60);
		var sec = mySeconds - (min * 60);
		if (sec < 10) {
			sec = "0" + sec;
		}	
		var message = min.toString() + ":" + sec;
		timeDisplay.innerHTML = message;
		if (mySeconds <= 0) {
			alert("Done!");
			clearInterval(intervalHandle);
			location.reload();
		}
		--mySeconds;
	}
}
function startCounter() {
	var myInput = document.getElementById("minutes").value;
	if (isNaN(myInput)) {
		alert("Type a valid number please");
		return;
	}
	if (mySeconds <= 0) {
		clearInterval(intervalHandle);
	} else {
		mySeconds = myInput * 60;
		intervalHandle = setInterval(tick, 1000);
		$(document).ready(function() {
			$("#inputArea").slideUp(500);
		});
	}
}
window.onload = function onload() {
	var myInput = document.createElement("input");
	myInput.setAttribute("type","text");
	myInput.setAttribute("id","minutes");
	
	var myButton = document.createElement("input");
	myButton.setAttribute("type","button");
	myButton.setAttribute("value","Start Timer");
	
	myButton.onclick = function() {
		startCounter();	
		document.getElementById("pauseButton").removeAttribute("disabled");
		document.getElementById("resetButton").removeAttribute("disabled");
	}
	inputArea.appendChild(myInput);
	inputArea.appendChild(myButton);	
}
