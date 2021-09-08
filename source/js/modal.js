(function () {
  const popupLink = document.querySelector('.js-popup');
  const modalPopup = document.querySelector('.modal');
  const modalClose = document.querySelectorAll('.js-close');
  const form = modalPopup.querySelector('form');
  const userName = modalPopup.querySelector('#data-name');
  const userPhone = modalPopup.querySelector('#data-phone');
  const userText = modalPopup.querySelector('#data-text');
  const checkbox = modalPopup.querySelector('input[type=checkbox]');

  let isStorageSupport = true;
  let storageName = '';
  let storagePhone = '';
  let storage = '';

  try {
    storage = localStorage.getItem('userText');
    storageName = localStorage.getItem('userName');
    storagePhone = localStorage.getItem('userPhone');
  } catch (err) {
    isStorageSupport = false;
  }

  if (storageName) {
    userText.value = storage;
    userName.value = storageName;
    userPhone.value = storagePhone;
  } else userName.focus();

  const showPopup = function () {
    modalPopup.classList.add('modal--show');

    userName.focus();
  }

  popupLink.addEventListener('click', showPopup);

  form.addEventListener('submit', function (evt) {
    if (!userName.value || !userPhone.value || !userText) {
      evt.preventDefault();
      checkbox.setCustomValidity('Check it');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('userName', userName.value);
        localStorage.setItem('userPhone', userPhone.value);
        localStorage.setItem('userText', userText.value);
      }
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (modalPopup.classList.contains('modal--show')) {
        evt.preventDefault();
        modalPopup.classList.remove('modal--show');
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
