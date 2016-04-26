var navIcon = document.querySelector('.nav-icon');
var navWrapper = document.querySelector('.nav-wrapper');
var navDisplayLi = document.querySelectorAll('.nav-display li');
var navIconSpan = document.querySelectorAll('.nav-icon span');


// CLICK EVENTS

navIcon.addEventListener('click', function(){
  navWrapper.classList.toggle('active-wrapper');
  navDisplayLineOpen();
  navIconRotate();
})





//***************************************************
//                    Functions
//***************************************************

function navDisplayLineOpen(){
    display();
  for(var i = 0; i < navDisplayLi.length; i++){

    if(navDisplayLi[i].style.display !== 'flex'){
      navDisplayLi[i].style.display = 'flex';
    } else {
      setTimeout(function(){
        navDisplayLi[i].style.display = 'none';
      }, 500)
    }
  }
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
