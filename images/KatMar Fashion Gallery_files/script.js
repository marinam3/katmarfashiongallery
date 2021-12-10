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
function hidden() {
    var x = document.getElementById("hidden");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function mySubscription() {
    var email = document.getElementById("userEmail").value;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
        alert("Thank you for the subscription. We will send the latest news to " + email);
        hide();
    }
    else {
        alert("You have entered an invalid email address!");
        return (false);
    }

}
function hide() {
    //var tick = document.getElementById("tick");
    //tick.classList.remove("hidden");
    document.getElementById("userSub").innerHTML = "\u2713 You have subscribed";
}

