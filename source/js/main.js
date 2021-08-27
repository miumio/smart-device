(function () {

  const footer = document.querySelector('.footer');
  const menuLink = footer.querySelectorAll('.footer__accordion-link');
  const menuList = footer.querySelectorAll('.footer__list');

  menuList.forEach(function (item) {
    item.classList.add('footer__list--hidden');
  })

  menuLink.forEach(function (item) {
    item.classList.add('footer__accordion-link--active');
  })

  menuLink.forEach(function (el) {

    el.addEventListener('click', function () {

      el.classList.toggle('footer__accordion-link--active');
      el.nextElementSibling.classList.toggle('footer__list--hidden');
    })
  });
})();

