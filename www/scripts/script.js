$(document).ready(function() {

  let isMenuOpen = false;

  $('.j-burger').on( 'click' , function() {

    $('.j-menu').slideToggle();
    // if (isMenuOpen) {
    //   $('.j-menu').slideUp();
    //   isMenuOpen = false;
    // } else {
    //   $('.j-menu').slideDown();
    //   isMenuOpen = true;
    // }
  });


  // Аккордионы
  let prevBtn;

  $('.j-accordion-btn').on('click', function(){

    if (prevBtn === this) {
      $(this).next().slideToggle();
      return;
    }

    $('.j-accordion-btn').next().slideUp();
    $(this).next().slideDown();
    prevBtn = this;

  });

});

