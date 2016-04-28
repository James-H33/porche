var navIcon = document.querySelector('.nav-icon');
var navWrapper = document.querySelector('.nav-wrapper');
var navDisplayLi = document.querySelectorAll('.nav-display li');
var navIconSpan = document.querySelectorAll('.nav-icon span');



//***************************************************
//            CLICK EVENTS
//***************************************************

// Header Events
$('.nav-icon').on('click', function(){
  $('.nav-wrapper').toggleClass('active-wrapper');
    navDisplayLineOpen();
    navIconRotate();
})

$('.collection-slide-icon').on('click', function() {
  $('html, body').animate({
      scrollTop: $(".collection-about-wrapper").offset().top
  }, 1000);
})



$(window).on('scroll', function() {
  aboutInfo();
  aboutImg();
  specInfo();
  specImg()
  cIntroTxtSlide();
  cHistoryTxtSlide();
  cHistoryTxtTwoSlide();
})



//***************************************************
//                    Functions
//***************************************************

function navDisplayLineOpen(){
  for(var i = 0; i < navDisplayLi.length; i++){

    if(navDisplayLi[i].style.display !== 'flex'){
      navDisplayLi[i].style.display = 'flex';
    } else {
      setTimeout(function(){
        navDisplayLi[i].style.display = 'none';
      }, 500)
    }
  }

  display();
}

function display(){
  for(var i = 0; i < navDisplayLi.length; i++){
      navDisplayLi[i].classList.toggle('active-li');
  }
}

// Function that loops through and spans of the nav-icon class
function navIconRotate() {
  for(var i = 0; i < navIconSpan.length; i++){
    navIconSpan[i].classList.toggle('active-rotate');
  }
}


// About Info Function || Collection Page
function aboutInfo() {
  if ($(window).scrollTop() >= $('.about-info').offset().top - ($(window).height() * 0.8)) {
    $('.about-info').addClass('active-about-info');
  }
}

// About Info Img Function || Collection Page
function aboutImg(){
  if ($(window).scrollTop() >= $('.about-info img').offset().top - ($(window).height() * 1.2)) {
    $('.about-info img').addClass('active-about-info');
  }
}

// Spec Info Function || Collection Page
function specInfo(){
  if ($(window).scrollTop() >= $('.spec-col-info').offset().top - ($(window).height() * 0.8)) {
    $('.spec-col-info').addClass('active-col');
  }
}

// Spec Info Img Function || Collection Page
function specImg() {
  if ($(window).scrollTop() >= $('.spec-col-img').offset().top - ($(window).height() * 0.8)) {
    $('.spec-col-img').addClass('active-col');
  }
}

// Intro Text Animation || Collection Page
function cIntroTxtSlide() {
  if ($(window).scrollTop() >= $('.collection-intro-display h1').offset().top - ($(window).height() * 0.8)) {
    $('.collection-intro-display h1').addClass('active-intro-text');
    $('.collection-intro-display p').addClass('active-intro-text');
  }
}

// History H1 Text Animation || Collection Page
function cHistoryTxtSlide(){
  if ($(window).scrollTop() >= $('.history-layout-top h1').offset().top - ($(window).height() * 1.2)) {
    $('.history-layout-top h1').addClass('active-history-text');
  }
}

// History Two P Text Animation || Collection Page
function cHistoryTxtTwoSlide() {
  if ($(window).scrollTop() >= $('.history-two').offset().top - ($(window).height() * 0.8)) {
    $('.history-two p').addClass('active-history-text');
  }
}
