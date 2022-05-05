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


  // Tabs
  $('.j-tabs-link').on('click', function(event){
    event.preventDefault();

    let index = $(this).index('.j-tabs-link');

    $('.j-tabs-link').removeClass('active');
    $(this).addClass('active');

    $('.j-contacts-item').removeClass('active');
    $('.j-contacts-item').eq(index).addClass('active');

  });


  // Works filter
  $('.j-works-link').on('click', function(event) {
    event.preventDefault();

    let dataFilter = $(this).data('filter');

    $('.j-works-link').removeClass('active');
    $(this).addClass('active');

    if (dataFilter === 'all') {
      $('.j-works-item').show();
      return;
    }

    $('.j-works-item').each(function() {
      let dataType = $(this).data('type');

      if (dataType === dataFilter) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

  });


  // Carousel
  $('.j-carousel').slick({
    dots: true
  });

});

