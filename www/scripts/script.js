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
  if ($('.j-carousel').length) {
    $('.j-carousel').slick({
      dots: true
    });
  }

  // ajax

  // ajax отзывы

  $('.j-btn-review').on('click', function() {

    $('.j-btn-review').addClass('btn-preload');

    $.ajax({
      type: 'POST',
      url: 'jsons/reviews.json',
      data: 'count=4',
      success: function(res) {
        $('.j-btn-review').removeClass('btn-preload');
        createHtmlString(res.reviews);
      },
      error: function() {
        console.log('О нееетт!!!');
      }
    });
  });

  function createHtmlString(dataArray) {
    let htmlString = '';

    dataArray.forEach(function(dataItem) {
      htmlString = htmlString + `<div class="reviews-item">
        <div class="reviews-photo-wrap">
          <img src="${dataItem.imgUrl}" alt="" class="reviews-img">
        </div>
        <div class="reviews-content">
          <strong class="reviews-name">${dataItem.name}</strong>
          <blockquote class="reviews-quote">“${dataItem.text}”</blockquote>
        </div>
      </div>`;
    });

    printToPage(htmlString);
  }

  function printToPage(string) {
    $('.j-reviews-list').append(string);
  }


});

