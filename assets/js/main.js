var select = document.querySelector(".running-mode");
var start = document.querySelector(".go-btn");

start.addEventListener("click", function() {
	if (select.value == "Light Run") {
		alert("Your are now beginning your light run");
	} else if (select.value == "Moderate Run") {
		alert("You are now beginning your moderate run");
	} else if (select.value == "Intense Run") {
		alert("You are now beginning your intense run");	
	} else if (select.value == "Endurance Run") {
		alert("You're gonna die by the end of this!")
	} else if (select.value == "Catch that Thief!") {
		alert("Go get that mugger!")
	} else {
		// This scope should not occur at all
		console.log("Your Browser is likely blocking JavaScript. Please enable it to use this application")
	}
})