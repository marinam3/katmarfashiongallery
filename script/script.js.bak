var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//Function for Google search when someone searches in a search bar.
const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'https://marinam3.github.io/katmarfashiongallery/';

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
  var age = document.getElementById("userAge").value;
  var message = document.getElementById("userMessage").value;
  if (email.match(mailformat) && age>=18)  {
    document.getElementById("userForm").innerHTML = name + ", thank you for your details. We will be in touch via " + email + " shortly.";
    hide();
  }
  else if (email.match(mailformat) && age<18){
	document.getElementById("userForm").innerHTML = name + ", thank you for your details but " + age + " is to young to leave a message";
    hide();
  }  
  else {
    alert("You have entered an invalid email address!");
    return (false);
  }

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

//Go to the Top Button-after 25px from the top the button will show
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
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
$("#but1").click(function () {
  $("#show1").toggle("slow");
});
$("#but2").click(function () {
  $("#show2").toggle("slow");
});
$("#but3").click(function () {
  $("#show3").toggle("slow");
});

//Calendar JQuery
// Setup the calendar with the current date
$(document).ready(function () {
  var date = new Date();
  var today = date.getDate();
  // Set click handlers for DOM elements
  $(".cal-right-button").click({ date: date }, next_year);
  $(".cal-left-button").click({ date: date }, prev_year);
  $(".month").click({ date: date }, month_click);
  $("#add-button").click({ date: date }, new_event);
  // Set current month as active
  $(".months-row").children().eq(date.getMonth()).addClass("active-month");
  init_calendar(date);
  var events = check_events(today, date.getMonth() + 1, date.getFullYear());
  show_events(events, months[date.getMonth()], today);
});

// Initialize the calendar by appending the HTML dates
function init_calendar(date) {
  $(".tbody").empty();
  $(".events-container").empty();
  var calendar_days = $(".tbody");
  var month = date.getMonth();
  var year = date.getFullYear();
  var day_count = days_in_month(month, year);
  var row = $("<tr class='table-row'></tr>");
  var today = date.getDate();
  // Set date to 1 to find the first day of the month
  date.setDate(1);
  var first_day = date.getDay();
  // 35+firstDay is the number of date elements to be added to the dates table
  // 35 is from (7 days in a week) * (up to 5 rows of dates in a month)
  for (var i = 0; i < 35 + first_day; i++) {
    // Since some of the elements will be blank, 
    // need to calculate actual date from index
    var day = i - first_day + 1;
    // If it is a sunday, make a new row
    if (i % 7 === 0) {
      calendar_days.append(row);
      row = $("<tr class='table-row'></tr>");
    }
    // if current index isn't a day in this month, make it blank
    if (i < first_day || day > day_count) {
      var curr_date = $("<td class='table-date nil'>" + "</td>");
      row.append(curr_date);
    }
    else {
      var curr_date = $("<td class='table-date'>" + day + "</td>");
      var events = check_events(day, month + 1, year);
      if (today === day && $(".active-date").length === 0) {
        curr_date.addClass("active-date");
        show_events(events, months[month], day);
      }
      // If this date has any events, style it with .event-date
      if (events.length !== 0) {
        curr_date.addClass("event-date");
      }
      // Set onClick handler for clicking a date
      curr_date.click({ events: events, month: months[month], day: day }, date_click);
      row.append(curr_date);
    }
  }
  // Append the last row and set the current year
  calendar_days.append(row);
  $(".year").text(year);
}

// Get the number of days in a given month/year
function days_in_month(month, year) {
  var monthStart = new Date(year, month, 1);
  var monthEnd = new Date(year, month + 1, 1);
  return (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
}

// Event handler for when a date is clicked
function date_click(event) {
  $(".events-container").show(250);
  $("#dialog").hide(250);
  $(".active-date").removeClass("active-date");
  $(this).addClass("active-date");
  show_events(event.data.events, event.data.month, event.data.day);
};

// Event handler for when a month is clicked
function month_click(event) {
  $(".events-container").show(250);
  $("#dialog").hide(250);
  var date = event.data.date;
  $(".active-month").removeClass("active-month");
  $(this).addClass("active-month");
  var new_month = $(".month").index(this);
  date.setMonth(new_month);
  init_calendar(date);
}

// Event handler for when the year right-button is clicked
function next_year(event) {
  $("#dialog").hide(250);
  var date = event.data.date;
  var new_year = date.getFullYear() + 1;
  $("year").html(new_year);
  date.setFullYear(new_year);
  init_calendar(date);
}

// Event handler for when the year left-button is clicked
function prev_year(event) {
  $("#dialog").hide(250);
  var date = event.data.date;
  var new_year = date.getFullYear() - 1;
  $("year").html(new_year);
  date.setFullYear(new_year);
  init_calendar(date);
}

// Display all events of the selected date in card views
function show_events(events, month, day) {
  // Clear the dates container
  $(".events-container").empty();
  $(".events-container").show(250);
  console.log(event_data["events"]);
  // If there are no events for this date, notify the user
  if (events.length === 0) {
    var event_card = $("<div class='event-card'></div>");
    var event_name = $("<div class='event-name'>There are no events planned for " + month + " " + day + ".</div>");
    $(event_card).css({ "border-left": "20px solid #225d5a" });
    $(event_card).append(event_name);
    $(".events-container").append(event_card);
  }
  else {
    // Go through and add each event as a card to the events container
    for (var i = 0; i < events.length; i++) {
      var event_card = $("<div class='event-card'></div>");
      var event_name = $("<div class='event-name'>" + month + " " + day + " " + events[i]["occasion"] + ":</div>");
      var event_count = $("<div class='event-count'>" + events[i]["invited_count"] + " Invited</div>");
      if (events[i]["cancelled"] === true) {
        $(event_card).css({
          "border-left": "20px solid #FF1744"
        });
        event_count = $("<div class='event-cancelled'>Cancelled</div>");
      }
      $(event_card).append(event_name).append(event_count);
      $(".events-container").append(event_card);
    }
  }
}

// Checks if a specific date has any events
function check_events(day, month, year) {
  var events = [];
  for (var i = 0; i < event_data["events"].length; i++) {
    var event = event_data["events"][i];
    if (event["day"] === day &&
      event["month"] === month &&
      event["year"] === year) {
      events.push(event);
    }
  }
  return events;
}

// Given data for events in JSON format
var event_data = {
  "events": [{ "occasion": " NYE Party ", "invited_count": 200, "year": 2021, "month": 12, "day": 31, "cancelled": true },
  { "occasion": " Christmas Party ", "invited_count": 120, "year": 2021, "month": 12, "day": 20, "cancelled": true },
  { "occasion": " Spring/Summer Launch Party ", "invited_count": 120, "year": 2022, "month": 3, "day": 10 },
  { "occasion": " Blacktie Cocktails ", "invited_count": 120, "year": 2022, "month": 1, "day": 22 },
  { "occasion": " Exclusive Sale ", "invited_count": 120, "year": 2022, "month": 2, "day": 10, "cancelled": true },
  { "occasion": " Exclusive Sale ", "invited_count": 120, "year": 2022, "month": 1, "day": 10 },
  { "occasion": " New Brand Launch ", "invited_count": 120, "year": 2022, "month": 2, "day": 19 }]
};

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
