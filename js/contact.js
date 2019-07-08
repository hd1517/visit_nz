// navbar script
function navScroll() {
  var navbar = $(".navbar");
  var scrollPos = $(window).scrollTop();

  // After 70px add background color to make it easier to see
  if (scrollPos > 70) {
    navbar.addClass("scrollDownColor");
  } else {
    navbar.removeClass("scrollDownColor");
  }
}

// On Activities navbar drowdown link, push id to activities page
$(function() {
  $('.redirect_act').click(function(){ //link that is clicked on
    var currentId = $(this).attr('id'); //capture id of clicked item
    window.location = 'activities.html#' + currentId; //load new page
    return false;
  });
});

// On Events navbar drowdown link, push id to events page
$(function() {
  $('.redirect_events').click(function(){ //link that is clicked on
    var currentId = $(this).attr('id'); //capture id of clicked item
    window.location = 'events.html#' + currentId; //load new page
    return false;
  });
});


// On window scroll
$(window).scroll(function() {
  navScroll();
});

// On window refresh
$(document).ready(function() {
  navScroll();
});

// Contact form validation
$('#sendButton').click(function(e) {
  $(".errorMsg").hide();

  //retrieve value from Form
  firstName = $("#inputFName");
  lastName = $("#inputLName");
  email = $("#inputEmail");
  message = $("#inputMessage");
  errors = false;

  if (firstName.val() == "") {
    $(".fNameError").show();
    event.preventDefault();
    errors = true;
  }

  if (lastName.val() == "") {
    $(".lNameError").show();
    event.preventDefault();
    errors = true;
  }

  if (email.val() == "") {
    $(".emailError").show();
    event.preventDefault();
    errors = true;
  }

  if (message.val() == "") {
    $(".msgError").show();
    event.preventDefault();
    errors = true;
  }

// Feedback message
  if (errors == false) {
    $("#feedbackModal").modal("show");
  }

});

$("#modalClose").click(function() {
  $("#contactForm").submit();
});
