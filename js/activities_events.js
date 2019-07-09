var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
    $(".iconRow").addClass("flex-row flex-nowrap");
    $(".arrows").show();
    $(".swipeImg").show();
}


// Function to show content div based on icon link selected
function show(id) {
  //remove previous selection
  $(".features-items.speech-bubble").find("path, polygon, circle, rect").attr("fill", "#96191d");
  $(".features-items.speech-bubble").children().children().css("color", "#000");
  $(".features-items.speech-bubble").removeClass("speech-bubble");
  $(".features-items.selected_div").removeClass("selected_div");
  $(".dropdown-item.active").removeClass("active");

  //change everything else back to display: none;
  $(".content").css("display", "none");
  //show the desired section
  $(id).css("display", "block");
  //scroll to section
  $("html, body").animate({
    scrollTop: $(".features-items").offset().top
  }, "slow");
  //add color to div
  var name = $(id).attr("id");
  $(".link_" + name).parent().addClass("speech-bubble");
  $(".features-items.speech-bubble").children().children().css("color", "#fff");
  $(".link_" + name).find("path, polygon, circle, rect").attr("fill", "#fff");



  //add active class to navbar link
  $("a#" + name).addClass("active");

}

// Icon links on mouseenter and mouseleave
$(".iconLink").mouseenter(function() {
  $(this).find("path, polygon, circle, rect").attr("fill", "#fff");
  $(this).parent().addClass("selected_div");
  $(this).children().css("color", "#fff");
});
$(".iconLink").mouseleave(function() {
  if ($(this).parent().hasClass("speech-bubble")) {
    return;
  }
  $(this).find("path, polygon, circle, rect").attr("fill", "#96191d");
  $(this).parent().removeClass("selected_div");
  $(this).children().css("color", "#000");
});


// navbar script
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


// On scroll
$(window).scroll(function() {
  navScroll();
  float();
});

// On refresh
$(document).ready(function() {
  navScroll();
  float();

  // if there's an ID in the url, grab the id
  var locationId = window.location.hash.substring(1);
  // simulate click on the icon
  $(".link_" + locationId).click();
  // bring icon in view within the horizontal menu
  var pos = $(".link_" + locationId).offset().left;
  var divwidth=$(".iconRow").width(); //get div width
  var diff = pos - (divwidth/2);

  $('.iconRow').animate({
            scrollLeft: diff
  });

});

$(".arrowLeft").click(function(){
  $('.iconRow').animate({
            scrollLeft: "-=110px"
  });
});

$(".arrowRight").click(function(){
  $('.iconRow').animate({
            scrollLeft: "+=110px"
  });
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

    // if already on the activities page, then reload
    if ((location.pathname.indexOf('/activities.html') > 0)) {
      window.location = 'activities.html#' + currentId; //load new page
          window.location.reload(true);
    } else {
      window.location = 'activities.html#' + currentId; //load new page
    }
  });
});

// Redirect to Events page
$(function() {
  $('.redirect_events').click(function() { //link that is clicked on
    var currentId = $(this).attr('id'); //capture id of clicked item
    var url = window.location.href;
    var events = ['sports', 'music', 'arts', 'food'];

// if already on events page, then reload
if ((location.pathname.indexOf('/events.html') > 0)) {
  window.location = 'events.html#' + currentId; //load new page
      window.location.reload(true);
} else {
  window.location = 'events.html#' + currentId; //load new page
}

  });
});
