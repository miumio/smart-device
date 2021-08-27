const footer = document.querySelector('.footer');
const menuLink = footer.querySelectorAll('h3');
const menuList = footer.querySelectorAll('.footer__list');

menuList.forEach(function (item) {
  item.classList.add('footer__list--hidden');
})

menuLink.forEach(function (item) {
  item.classList.add('footer__acc-link--active');
})

menuLink.forEach(function (el) {

  el.addEventListener('click', function () {

    el.classList.toggle('footer__acc-link--active');
    el.nextElementSibling.classList.toggle('footer__list--hidden');
  })
})
