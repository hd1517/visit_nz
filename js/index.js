var isMobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
  isMobile = true;
  $(".description").text("Tap on the region to learn more");
  $(".videoContainer").css("background-color", "none");
  $("path").css("fill", "#BCBEC0");
}

var myRegions = [{
    "region": "Auckland",
    "city": "Auckland",
    "city_img": "css/images/attractions/auckland.jpg",
    "link": "auckland.html",
    "description": "<p>Known as the \"City of Sails,\" <strong>Auckland</strong> is the point of arrival for most visitors, and a few days soaking up the cultural and outdoor attractions here should be on every tourist's to-do list.</p><p>The monuments, museums, and art galleries here are some of the finest in the country and the suburban coastline of the city is speckled with fine beaches.</p><p>To see Auckland's top scenic attractions, click on the region on the map or click <a href=\"auckland.html\">here</a>.</p>"
  },
  {
    "region": "Wellington",
    "city": "Wellington",
    "city_img": "css/images/attractions/wellington.jpg",
    "link": "wellington.html",
    "description": "<p><strong>Wellington</strong> may be little, but this capital city is big on funky café culture and beautiful views. Recently named \"the coolest little capital in the world\" by Lonely Planet, Wellington is a city with a powerful mix of culture, history, nature and cuisine.</p><p>Fuel your visit with strong coffee and world-class craft beer – Wellingtonians are masters of casual dining, with plenty of great restaurants, night markets and food trucks.</p><p>To see Wellington's top scenic attractions, click on the region on the map or click <a href=\"wellington.html\">here</a>.</p>"
  },
  {
    "region": "BayofPlenty",
    "city": "Bay of Plenty",
    "city_img": "css/images/attractions/rotorua.jpg",
    "link": "rotorua.html",
    "description": "<p><strong>Rotorua</strong> is known for being a volcanic wonderland where the land steams, mud and water bubble and geysers erupt into the air.  A place where the Earth's crust is thin and the history is dense, surrounded by sparking lakes and thousands of hectares of native forest. </p><p> This region is a nature lover’s playground where you can satisfy your inner adrenalin junkie, all while exploring a geothermal wonderland and beautiful beaches in the Bay of Plenty</p><p>To see Rotorua's top scenic attractions, click on the region on the map or click <a href=\"rotorua.html\">here</a>.</p>"
  },
  {

    "region": "Waikato",
    "city": "Waikato Region",
    "city_img": "css/images/attractions/hamilton.jpg",
    "description": "<p><strong>Hamilton-Waikato</strong> - a land of lush pastures that was chosen to play The Shire in The Lord of the Rings and The Hobbit films. <strong>Coromandel</strong> - renowned for its pristine beaches, misty forests and laid-back vibe, is one of NZ's most popular destinations. <strong>Taupo</strong> - one of New Zealand's top tourist destinations with beautiful forests, volcanic mountains and the stunning Lake Taupo.</p><p>To see these areas' top scenic attractions, choose from the following links: <br><a href=\"hamilton.html\">Hamilton-Waikato</a>  |  <a href=\"coromandel.html\">Coromandel</a>  |  <a href=\"taupo.html\">Taupo</a></p>"
  },
  {

    "region": "TasmanDistrict",
    "city": "Nelson Tasman Region",
    "city_img": "css/images/attractions/nelson.jpg",
    "link": "nelson.html",
    "description": "<p>Where the sea breeze is never too far away, the <strong>Nelson Tasman</strong> region is the South Island’s little corner of paradise. But this is New Zealand, so the dreamy white-sand beaches that make up much of the coast are not just for relaxing. There’s more to discover through hiking, biking, horse riding, kayaking and jumping! Even on land, there’s some natural phenomenons worth checking out in the form of fire and water.</p> <p>To see Nelson Tasman's top scenic attractions, click on the region on the map or click <a href=\"nelson.html\">here</a>.</p>"
  },
  {

    "region": "WestCoast",
    "city": "West Coast",
    "city_img": "css/images/attractions/westcoast.jpg",
    "link": "westcoast.html",
    "description": "<p>The long stretching region of the <strong>West Coast</strong> on the South Island is as rugged as it gets! In fact, Kiwis are more accustomed to calling it the \"Wild West Coast\". </p><p>Mostly unpopulated, this a place where nature takes control, which is evident is some amazing natural features, such as the Pancake Rocks, the Blue Pools of Haast, and the glaciers. All in all, any adventurous and curious traveller will never get bored in this region!</p><p>To see the West Coast's top scenic attractions, click on the region on the map or click <a href=\"westcoast.html\">here</a>.</p>"
  },
  {

    "region": "Otago",
    "city": "Otago Region",
    "city_img": "css/images/attractions/queenstown.jpg",
    "description": "<p><strong>Queenstown</strong> - surrounded by majestic mountains and set on the shores of crystal clear Lake Wakatipu, the natural beauty and the unique energy of the region create the perfect backdrop for a holiday full of adventure and discovery.  <strong>Dunedin</strong> - known as the Edinburgh of New Zealand - is one of the best-preserved Victorian and Edwardian cities in the Southern Hemisphere and is surrounded by dramatic hills and a picturesque harbour. <p>To see these areas' top scenic attractions, choose from the following links: <br><a href=\"queenstown.html\">Queenstown</a> | <a href=\"dunedin.html\">Dunedin</a></p>"
  },
  {

    "region": "Southland",
    "city": "Southland",
    "city_img": "css/images/attractions/fiordland.jpg",
    "link": "fiordland.html",
    "description": "<p>As New Zealand’s ultimate nature and wildlife destination, Southland's dramatic scenery spans pristine rainforests, fertile farmlands and sweeping coastlines. </p><p>Within this region is <strong>Fiordland</strong>, one of the southern hemisphere’s great wilderness regions which has achieved World Heritage Status for its stunning natural features, exceptional beauty and role in demonstrating the earth’s evolutionary history</p><p>To see the Fiordland's top scenic attractions, click on the region on the map or click <a href=\"fiordland.html\">here</a>.</p>"
  },
  {

    "region": "Canterbury",
    "city": "Canterbury",
    "city_img": "css/images/attractions/christchurch.jpg",
    "link": "christchurch.html",
    "description": "<p><strong>Christchurch</strong> and <strong>Canterbury</strong> offer visitors a unique and diverse destination. From lush vineyards and wild coastlines to sky-piercing mountains and pristine glacial lakes, Canterbury is a region of remarkable contrasts for those seeking incredible scenery and adventure.</p><p>Christchurch is affectionately known as 'The Garden City'. In the city, and its big backyard of Canterbury, you'll find many a green oasis of gardens, parks, forests and native wetlands.</p><p>To see Christchurch and Canterbury's top scenic attractions, click on the region on the map or click <a href=\"christchurch.html\">here</a>.</p>"
  },
];


$(function() {

  for (i = 0; i < myRegions.length; i++) {

    $("#" + myRegions[i].region)
      .css({
        "fill": "#BCBEC0"
      })
      .data("myRegions", myRegions[i]);
  }

  // on mouse over
  $("path").mouseenter(function(e) {
    var region_data = $(this).data("myRegions");
    // check if the path has data
    if (typeof $(this).data("myRegions") !== "undefined") {
      $(".city").html(region_data.city);
      $(".description").html(region_data.description);
      $(".city_img").attr("src", region_data.city_img);
      $(".img_link").attr("href", region_data.link);
      $(this).css({
        "fill": "#DF222E",
        "cursor": "pointer"
      });

      if (region_data.region == "Waikato") {
        $("#waikatoCaro").css({
          "display": "block"
        });
        $(".city_img").css({
          "display": "none"
        });
        $("#otagoCaro").css({
          "display": "none"
        });
      } else if (region_data.region == "Otago") {
        $("#otagoCaro").css({
          "display": "block"
        });
        $(".city_img").css({
          "display": "none"
        });
        $("#waikatoCaro").css({
          "display": "none"
        });
      } else {
        $("#waikatoCaro").css({
          "display": "none"
        });
        $("#otagoCaro").css({
          "display": "none"
        });
        $(".city_img").css({
          "display": "block"
        });
      }
    }

  });

  // on mouse leave
  $("path").mouseleave(function() {
    var region_data = $(this).data("myRegions");
    if (typeof $(this).data("myRegions") !== "undefined") {
      $(this).css({
        "fill": "#BCBEC0"
      });
    }
  });

  // If not on mobile, make map regions clickable
  if (isMobile == false) {
    $("path").on("click", function() {
      var region_data = $(this).data("myRegions");

      if (region_data.region == "Waikato") { // If the region is Waikato, show the modal
        $("#waikatoModal").modal("show");
      } else if (region_data.region == "Otago") { // If the region is Otago, show the modal
        $("#otagoModal").modal("show");
      } else { // Else go to link
        window.location = region_data.link;
      }
    });
    // If on mobile, make map region go to url after second tap
  } else {
    var clicked = false;
    var pathClicked = ["nothing"];
    $("path").on("click", function(e) {
      var region_data = $(this).data("myRegions");
      var newPathClicked = region_data.region;

// Check if the map region has been clicked on twice
      if (newPathClicked == pathClicked[0]) {
        clicked = true; // if twice, then change to true
      } else {
        pathClicked.splice(0, 1, newPathClicked);
      }
// If the region hasn't been clicked twice in a row, don't do anything
      if (clicked == false) {
        e.preventDefault();
      } else { // Else, go to link
        if (region_data.region == "Waikato") {
          $("#waikatoModal").modal("show");
          clicked = false;
        } else if (region_data.region == "Otago") {
          $("#otagoModal").modal("show");
          clicked = false;
        } else {
          window.location = region_data.link;
        }

      }
    });
  }
});

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
});

$(document).ready(function() {
  navScroll();
});


// On Activities navbar drowdown link, push id to activities page
$(function() {
  $('.redirect_act').click(function() { //link that is clicked on
    var currentId = $(this).attr('id'); //capture id of clicked item
    window.location = 'activities.html#' + currentId; //load new page
    return false;
  });
});

// On Events navbar drowdown link, push id to events page
$(function() {
  $('.redirect_events').click(function() { //link that is clicked on
    var currentId = $(this).attr('id'); //capture id of clicked item
    window.location = 'events.html#' + currentId; //load new page
    return false;
  });
});
