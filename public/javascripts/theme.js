$('document').ready(function () {
  var nav_height = 70;

  $("a[data-role='smoothscroll']").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top - nav_height;

    $("body, html").animate({
      scrollTop: position
    }, 1000);
    return false;
  });
});

$('document').ready(function () {
  // Back to top
  var backTop = $(".back-to-top");

  $(window).scroll(function () {
    if ($(document).scrollTop() > 400) {
      backTop.css('visibility', 'visible');
    }
    else if ($(document).scrollTop() < 400) {
      backTop.css('visibility', 'hidden');
    }
  });

  backTop.click(function () {
    $('html').animate({
      scrollTop: 0
    }, 750);
    return false;
  });
});


$('document').ready(function () {

  // Loader
  $(window).on('load', function () {
    $('.loader-container').fadeOut();
  });

  // Tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Popovers
  $('[data-toggle="popover"]').popover();

  // Page scroll animate
  new WOW().init();
});

$('document').ready(function () {
  $('#testimonials').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
  });
});

/*
 *  Counter
 *
 *  Require(" jquery.animateNumber.min.js ", " jquery.waypoints.min.js ")
 */
$(document).ready(function () {
  var counterInit = function () {
    if ($('.counter-section').length > 0) {
      $('.counter-section').waypoint(function (direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {

          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
          $('.number').each(function () {
            var $this = $(this),
              num = $this.data('number');
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step
              }, 5000
            );
          });

        }

      }, { offset: '95%' });
    }

  }
  $.getScript("../assets/js/petitions.js", function () {
    tabla();

  });
  setTimeout(() => {
    counterInit();
  }, 500);

});


$(document).ready(function () {
  window.onscroll = function () {
    var y = window.scrollY;
    console.log('Scroll1: ' + y);
    if (document.documentElement.scrollTop>300) {
      document.getElementById('navbar').classList.add("sticky-f");
      document.getElementById('navbar').classList.remove("sticky-t");


    } else{
      document.getElementById('navbar').classList.remove("sticky-f");
      document.getElementById('navbar').classList.add("sticky-t");
    }

  };
});
$(document).ready(function () {
  $('.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });

});
$(document).ready(function () {

  $('.txt').html(function(i, html) {
    var chars = $.trim(html).split("");
  
    return '<span>' + chars.join('</span><span>') + '</span>';
  });

});

