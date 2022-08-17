var origin = document.getElementById("header-content");
var origin_footer = document.getElementById("footer-content");
var temp = origin.innerHTML;
var xx_nombre_pagina = getNameURLWeb();
news();


var line = "";
var text1 = '<footer class="page-footer">' +
  '<div class="container">' +
  '<div class="row justify-content-center mb-5">' +
  '<div class="col-lg-3 py-3">' +
  '<h3>My<span class="text-primary">Proyects.</span></h3>' +
  '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>' +

  '<p><a href="#" >cristhian.giron@unl.edu.ec</a></p>' +
  '<p><a href="#">+00 1122 3344 5566</a></p>' +
  '</div>' +
  '<div class="col-lg-3 py-3">' +
  '<h5>Quick Links</h5>' +
  '<ul class="footer-menu">' +
  '<li><a href="#">How it works</a></li>' +
  '<li><a href="#">Security</a></li>' +
  '<li><a href="#">Pricing</a></li>' +
  '<li><a href="#">Resources</a></li>' +
  '<li><a href="#">Report a Bug</a></li>' +
  '</ul>' +
  '</div>' +
  '<div class="col-lg-3 py-3">' +
  '<h5>About Us</h5>' +
  '<ul class="footer-menu">' +
  '<li><a href="#">About Us</a></li>' +
  '<li><a href="#">Jobs</a></li>' +
  '<li><a href="#">Our Teams</a></li>' +
  '<li><a href="#">Testimonials</a></li>' +
  '<li><a href="#">News & Press</a></li>' +
  '</ul>' +
  '</div>' +
  '<div class="col-lg-3 py-3">' +
  '<h5>Subscribe</h5>' +
  '<form action="#">' +
  '<input type="text" class="form-control" placeholder="Enter your mail..">' +
  '</form>' +

  '<div class="sosmed-button mt-4">' +
  '<a href="#"><span class="mai-logo-facebook-f"></span></a>' +
  '<a href="#"><span class="mai-logo-twitter"></span></a>' +
  '<a href="#"><span class="mai-logo-google"></span></a>' +
  '<a href="#"><span class="mai-logo-linkedin"></span></a>' +
  '</div>' +
  '</div>' +
  '</div>' +

  '<div class="row">' +
  '<div class="col-sm-6 py-2">' +
  '<p id="copyright">&copy; 2022 <a href="">Cristhian Girón</a>. All rights reserved</p>' +
  '</div>' +
  '<div class="col-sm-6 py-2 text-right">' +
  '<div class="d-inline-block px-3">' +
  '<a href="#">Privacy</a>' +
  '</div>' +
  '<div class="d-inline-block px-3">' +
  '<a href="#">Contact Us</a>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div> <!-- .container -->' +
  '</footer> <!-- .page-footer -->';


if (xx_nombre_pagina != "donations.html") {

  line = '<a href="donations.html" class="btn btn-outline rounded-pill ">Donate</a>';
} else {
  line = '';
}
var text = '<nav class="navbar navbar-expand-lg fixed-top " aria-label="Main navigation" id="navbar">'+
'<div class="container">'+
  '<a class="navbar-brand me-5" href="index.html"><img class="logo me-1" src="../assets/img/favicon.svg"><span>My</span><span class="text-primary">Proyects</span></a>'+
  '<button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">'+
    '<span class="navbar-toggler-icon"></span>'+
  '</button>'+
  '<div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">'+
    '<ul class="navbar-nav me-auto mb-2 mb-lg-0">'+
      '<li class="nav-item">'+
        '<a class="nav-link active me-3" aria-current="page" href="index.html">Home</a>'+
      '</li>'+
      '<li class="nav-item">'+
        '<a class="nav-link me-3" href="about.html">About</a>'+
      '</li>'+
      '<li class="nav-item">'+
        '<a class="nav-link me-3" href="services.html">Services</a>'+
      '</li>'+
      '<li class="nav-item">'+
        '<a class="nav-link me-3" href="blog.html">News</a>'+
      '</li>'+
      '<li class="nav-item dropdown" id="dropdown">'+
        '<a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Contactos</a>'+
        '<ul class="dropdown-menu">'+
          '<li><a class="dropdown-item" href="#">Action</a></li>'+
          '<li><a class="dropdown-item" href="#">Another action</a></li>'+
          '<li><a class="dropdown-item" href="#">Something else here</a></li>'+
        '</ul>'+
      '</li>'+
    '</ul>'+
    '<!--<form class="d-flex" role="search">'+
      '<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">'+
      '<button class="btn btn-outline-success me-3" type="submit">Search</button>'+
      
    '</form>-->'+
    '<a href="donations.html" class="btn btn-primary">Donate</a>'+
    
  '</div>'+
'</div>'+
'</nav>';
function getNameURLWeb() {
  var sPath = window.location.pathname;
  var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
  return sPage;
}

function news () {
  $.getScript("../assets/js/petitions.js", function () {
    carrusel();
    console.log('entra');
  });
};
$('document').ready(function () {
  
  document.getElementById("header-content").innerHTML = text + temp;
  document.getElementById("footer-content").innerHTML = text1;
  (() => {
    'use strict'
  
    document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
      document.getElementById('navbar').style.height='58px';
    })
  })()

});
$('document').ready(function () {
  // Back to top
  var backTop = $(".navbar-float");

  $(window).scroll(function () {
    if ($(document).scrollTop() > 20) {
      backTop.css('top', 0);
      backTop.css('position', 'fixed');
    }
    else if ($(document).scrollTop() < 20) {
      backTop.css('top', 20);
      backTop.css('position', 'absolute');

    }
  });
});
var miCheckbox1 = document.getElementById('inlineRadio1');
var miCheckbox2 = document.getElementById('inlineRadio2');
var miCheckbox3 = document.getElementById('inlineRadio3');
var miCheckbox4 = document.getElementById('inlineRadio4');
$('document').ready(function () {
  $("#otro").focus(function () {
    miCheckbox1.checked = false;
    miCheckbox2.checked = false;
    miCheckbox3.checked = false;
    miCheckbox4.checked = false;
  });
});

$('document').ready(function () {
  
  $('#inlineRadio1').on('click', function () {
    otherD.innerHTML='';
    if ($(this).is(':checked')) {
      document.getElementById('otro').value='';
    }
  });
  $('#inlineRadio2').on('click', function () {
    otherD.innerHTML='';
    if ($(this).is(':checked')) {
      document.getElementById('otro').value='';
    }
  });
  $('#inlineRadio3').on('click', function () {
    otherD.innerHTML='';
    if ($(this).is(':checked')) {
      document.getElementById('otro').value='';
    }
  });
  $('#inlineRadio4').on('click', function () {
    otherD.innerHTML='';
    if ($(this).is(':checked')) {
      document.getElementById('otro').value='';
    }
  });
});
