const body = document.querySelector('body');
const html = document.querySelector('html');
const burger = document.querySelector('.burger');
const search = document.querySelector('.search');
const header_nav = document.querySelector('.header-nav');
const expend_more = document.querySelector('.expand-more');
const search_close = document.querySelector('.search-close');
const shop_dropdown = document.querySelector('.shop-dropdown');
const search_dropdown = document.querySelector('.search-dropdown');
const sing_up = document.querySelector('#btn-sing-up');
const login = document.querySelector('#btn-login');
const form_login = document.querySelector('.login-form');
const eventsBtns = document.querySelectorAll('.events-btn');

console.log(form_login);

expend_more.addEventListener('click', () => {
  if (header_nav.classList.contains('open')) {
    header_nav.classList.toggle('open');

    body.classList.toggle('overflow-burger');
    html.classList.toggle('overflow-burger');
  }

  expend_more.classList.toggle('open');
  shop_dropdown.classList.toggle('open');

  body.classList.toggle('overflow-burger');
  html.classList.toggle('overflow-burger');
});

burger.addEventListener('click', () => {
  if (expend_more.classList.contains('open')) {
    expend_more.classList.toggle('open');
    shop_dropdown.classList.toggle('open');
    body.classList.toggle('overflow-burger');
    html.classList.toggle('overflow-burger');
  }

  header_nav.classList.toggle('open');

  body.classList.toggle('overflow-burger');
  html.classList.toggle('overflow-burger');
});

search.addEventListener('click', () => {
  if (expend_more.classList.contains('open')) {
    expend_more.classList.toggle('open');
    shop_dropdown.classList.toggle('open');

    body.classList.toggle('overflow-burger');
    html.classList.toggle('overflow-burger');
  }

  if (header_nav.classList.contains('open')) {
    header_nav.classList.toggle('open');

    body.classList.toggle('overflow-burger');
    html.classList.toggle('overflow-burger');
  }

  search_dropdown.classList.toggle('open');

  body.classList.toggle('overflow-burger');
  html.classList.toggle('overflow-burger');
});

search_close.addEventListener('click', () => {
  search_dropdown.classList.remove('open');

  body.classList.toggle('overflow-burger');
  html.classList.toggle('overflow-burger');
});

sing_up?.addEventListener('click', () => {
  window.location.href = 'create.html';
});

login?.addEventListener('click', () => {
  window.location.href = 'account-dashboard.html';
});

form_login?.addEventListener('submit', (e) => {
  e.preventDefault();
});

eventsBtns.forEach((btn) =>
  btn?.addEventListener('click', () => (window.location.pathname = 'event-pages/details.html'))
);
