let pause = document.getElementById("pauseButton");
let unpause = document.getElementById("unpauseButton");
let reset = document.getElementById("resetButton");
// ================= [ count down ] ================= 
function pauseTimer() {
	//----- Pause ---- 
	clearInterval(intervalHandle);
	disable(pause); 
	enable(unpause);
}
function resumeTimer() {
	// ----- Stop -------
	intervalHandle = setInterval(tick, 1000);
	disable(unpause); 
	enable(pause);
}
// Functions to disable and re-enable HTML elements
function disable(element) { 
	element.setAttribute("disabled", ""); 
	element.style.display = "none";
}
function enable(element) { 
	element.removeAttribute("disabled");
	element.style.display = "inline";
}
// ================= [ Display time ] ================= 
function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
// ------Start time-------------
function start_T() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('currentTime').innerHTML = h + ":" + m + ":" + s;
	t = setTimeout(function() {
		start_T()
	}, 1000);
}
start_T();
// --------- Confirmation box for refresh --------
function refresh() {
	let confirmAction = confirm("This will reload the page and reset the countdown interval.\n Are you sure?");
	if (confirmAction) {
		location.reload();
	} else {
		alert("Action canceled!");
	}
	return;
}