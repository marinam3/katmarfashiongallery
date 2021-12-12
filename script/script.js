//Welcome message on index page
function welcomeMsg() {
    alert("Welcome to KatMar Fashoin Gallery!")
}

//Function for Google search when someone searches in a search bar.
const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'https://marinam3.github.io/katmargallery.github.io/';

function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}
f.addEventListener('submit', submitted);


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
    document.getElementById("userSub").innerHTML = "\u2713 You have subscribed";
}

//Gallery page images
function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

//Go to the Top Button 
var mybutton = document.getElementById("topBtn");

//Go to the Top Button-after 20px from the top the button will show
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//Go to the Top Button- clicks on the button and it will scroll to the top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//jQuery Contact Page show phone,address and Opening Hours
$( "#but1" ).click(function() {
  $( "#show1" ).toggle( "slow" );
});
$( "#but2" ).click(function() {
  $( "#show2" ).toggle( "slow" );
});
$( "#but3" ).click(function() {
  $( "#show3" ).toggle( "slow" );
});

