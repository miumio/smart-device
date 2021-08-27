(function () {
  const footer = document.querySelector('.footer');
  const menuLink = footer.querySelectorAll('footer__accordion-link');
  const menuList = footer.querySelectorAll('.footer__list');

  menuList.forEach(function (item) {
    item.classList.add('footer__list--hidden');
  })

  menuLink.forEach(function (item) {
    item.classList.add('footer__acc-link--active');
  })

  menuLink.forEach(function (item) {

    item.addEventListener('click', function () {

      item.classList.toggle('footer__acc-link--active');
      item.nextElementSibling.classList.toggle('footer__list--hidden');
    });
  });
})();
