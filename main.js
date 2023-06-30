const expend_more = document.querySelector('.expand-more');
const shop_dropdown = document.querySelector('.shop-dropdown');

expend_more.addEventListener('click', () => {
  expend_more.classList.toggle('open');
  shop_dropdown.classList.toggle('open');
});
