const expend_more = document.querySelector('.expand-more');
const shop_dropdown = document.querySelector('.shop-dropdown');
const burger = document.querySelector('.burger');
const header_nav = document.querySelector('.header-nav');

expend_more.addEventListener('click', () => {
  if (header_nav.classList.contains('open')) {
    header_nav.classList.toggle('open');

    document.querySelector('body').classList.toggle('overflow-burger');
    // document.querySelector('html').classList.toggle('overflow-burger');
  }

  expend_more.classList.toggle('open');
  shop_dropdown.classList.toggle('open');
  document.querySelector('body').classList.toggle('overflow-burger');
  // document.querySelector('html').classList.toggle('overflow-burger');
});

burger.addEventListener('click', () => {
  if (expend_more.classList.contains('open')) {
    expend_more.classList.toggle('open');
    shop_dropdown.classList.toggle('open');
    document.querySelector('body').classList.toggle('overflow-burger');
    // document.querySelector('html').classList.toggle('overflow-burger');
  }
  header_nav.classList.toggle('open');

  document.querySelector('body').classList.toggle('overflow-burger');
  // document.querySelector('html').classList.toggle('overflow-burger');
});
