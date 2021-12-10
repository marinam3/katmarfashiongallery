//Welcome message on index page
function welcomeMsg() {
	alert("Welcome to KatMar Fashoin Gallery!")
}
//Function Send a message Form /Contact Page
function myMessage() {
	event.preventDefault();

	var name = document.getElementById("userName").value;
	var email = document.getElementById("userEmail").value;
	var message = document.getElementById("userMessage").value;

	document.getElementById("userForm").innerHTML = name + ", thank you for your details. We will be in touch via " + email + " shortly.";

}
function hide() {
	document.getElementById("userForm").style.display = "none";
}

// Open the full screen search box (DRAFT SEARCH BOX)
function openSearch() {
	document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box (DRAFT SEARCH BOX)
function closeSearch() {
	document.getElementById("myOverlay").style.display = "none";
}

//Newsletter Form
function mySubscription() {
	e.preventDefault();

	var email = document.getElementById("userEmail").value;

	alert("Thank you for the subscription. We will send the latest news to " + email);
	hide();
}
function hide() {
	document.getElementById("userSub").style.display = "none";
}
