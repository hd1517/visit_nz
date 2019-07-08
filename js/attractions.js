function navScroll() {

  var navbar = $(".navbar");
  var c, currentScrollTop = 0;
  var scrollPos = $(window).scrollTop();
  currentScrollTop = scrollPos;

  // After 70px add background color to make it easier to see
  if (scrollPos > 70) {
    navbar.addClass("scrollDownColor");
  } else {
    navbar.removeClass("scrollDownColor");
  }
}

$(window).scroll(function() {
  navScroll();
  float();
});

$(document).ready(function() {
  navScroll();
  float();
});

// Find viewport dimensions
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

// Float elements as they appear in viewport
function float() {
  $('.no-view').each(function() {
    if ($(this).isInViewport()) {
      $(this).addClass('in-view');
    } else {
      return;
    }
  });
}

// Back to top button
$(function() {
  $('.go-top').on('click', function() {
    $('html, body').animate({
      scrollTop: 1
    }, 800);
    return false;
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $(".go-top").fadeIn('slow');
    } else {
      $(".go-top").fadeOut('slow');
    }
  });
});

// Redirect to Activities page
$(function() {
  $('.redirect_act').click(function() { //link that is clicked on
    var currentId = $(this).attr('id'); //capture id of clicked item
    window.location = 'activities.html#' + currentId; //load new page
    return false;
  });
});

// Redirect to Events page
$(function() {
  $('.redirect_events').click(function() { //link that is clicked on
    var currentId = $(this).attr('id'); //capture id of clicked item
    window.location = 'events.html#' + currentId; //load new page
    return false;
  });
});
