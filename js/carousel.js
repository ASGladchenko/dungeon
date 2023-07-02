$(document).ready(function () {
  const pick = $('.pick-carousel');
  const topLive = $('.top-live');
  const topReplay = $('.top-replay');
  const trending = $('.trending-carousel');
  const talents = $('.talents-carousel');

  pick.owlCarousel({
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

  $('.pick-prev').click(function () {
    pick.trigger('prev.owl.carousel');
  });

  $('.pick-next').click(function () {
    pick.trigger('next.owl.carousel');
  });

  topLive.owlCarousel({
    margin: 20,
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
      },
    },
  });

  $('.top-live-prev').click(function () {
    topLive.trigger('prev.owl.carousel');
  });

  $('.top-live-next').click(function () {
    topLive.trigger('next.owl.carousel');
  });

  topReplay.owlCarousel({
    margin: 20,
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
      },
    },
  });

  $('.top-replay-prev').click(function () {
    topReplay.trigger('prev.owl.carousel');
  });

  $('.top-replay-next').click(function () {
    topReplay.trigger('next.owl.carousel');
  });

  trending.owlCarousel({
    margin: 20,
    nav: false,
    dots: false,
    loop: true,
    navElement: 'button',
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      1200: {
        items: 2,
        margin: 131,
      },
      1400: {
        items: 3,
      },
    },
  });

  $('.trending-prev').click(function () {
    trending.trigger('prev.owl.carousel');
  });

  $('.trending-next').click(function () {
    trending.trigger('next.owl.carousel');
  });

  talents.owlCarousel({
    margin: 27,
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
      },
    },
  });

  $('.talents-prev').click(function () {
    talents.trigger('prev.owl.carousel');
  });

  $('.talents-next').click(function () {
    talents.trigger('next.owl.carousel');
  });
});
