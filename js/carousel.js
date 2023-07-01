$(document).ready(function () {
  var top = $('.top_carousel');

  top.owlCarousel({
    margin: 30,
    nav: false,
    dots: false,
    loop: true,
    navElement: 'button',
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 4,
        margin: 10,
      },
    },
  });

  $('.top-prev').click(function () {
    top.trigger('prev.owl.carousel');
  });

  $('.top-next').click(function () {
    top.trigger('next.owl.carousel');
  });
});
