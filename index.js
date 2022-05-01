$(document).ready(function() {
  $(".about-jump a").click(function() {
    $('html, body').animate({
      scrollTop: $("#about-content").offset().top
    }, 2000);
  });
});

$(document).ready(function() {
  $(".skills-jump a").click(function() {
    $('html, body').animate({
      scrollTop: $("#skills-h2").offset().top
    }, 2000);
  });
});

$(document).ready(function() {
  $(".work-jump a").click(function() {
    $('html, body').animate({
      scrollTop: $("#work-h2").offset().top
    }, 2000);
  });
});

$(document).ready(function() {
  $(".contact-jump a").click(function() {
    $('html, body').animate({
      scrollTop: $("#contact-h2").offset().top
    }, 2000);
  });
});
