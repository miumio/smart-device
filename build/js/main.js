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

(function () {

  const popupLink = document.querySelector(".js-popup");
  const modalPopup = document.querySelector(".modal");
  const modalClose = document.querySelectorAll(".js-close");

  popupLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalPopup.classList.add('modal--show')
  })

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalPopup.classList.contains("modal--show")) {
        evt.preventDefault();
        modalPopup.classList.remove("modal--show");
      }
    }
  });

  modalClose.forEach(function (el) {

    el.addEventListener('click', function () {
      modalPopup.classList.contains('modal--show');
      modalPopup.classList.remove('modal--show');
    })
  })
})();
