(function () {
  const body = document.querySelector('body');

  const popupLink = document.querySelector('.js-popup');
  const modalPopup = document.querySelector('.modal');
  const btnClose = document.querySelector('.modal__btn');
  const modalClose = modalPopup.querySelectorAll('.js-close');
  const form = modalPopup.querySelector('form');
  const userName = modalPopup.querySelector('#data-name');
  const userPhone = modalPopup.querySelector('#data-phone');
  const userText = modalPopup.querySelector('#data-text');
  const checkbox = modalPopup.querySelector('input[type=checkbox]');

  let isStorageSupport = true;

  const storage = {
    name: '',
    phone: '',
    text: '',
  };

  try {
    storage.text = localStorage.getItem('userText');
    storage.name = localStorage.getItem('userName');
    storage.phone = localStorage.getItem('userPhone');
  } catch (err) {
    isStorageSupport = false;
  }

  if (storage.name) {
    userText.value = storage.text;
    userName.value = storage.name;
    userPhone.value = storage.phone;
  } else userName.focus();

  function focusRestrict () {
    document.addEventListener('focus', function( event ) {
      if ( showPopup && !modalPopup.contains( event.target ) ) {
        event.stopPropagation();
        btnClose.focus();
      }
    }, true);
  }

  const showPopup = function () {
    modalPopup.classList.add('modal--show');
    body.style.overflow = 'hidden';
    modalPopup.setAttribute('tabindex', '0');
    userPhone.focus();
    focusRestrict();
  }

  const closePopup = function () {
    body.style.overflow = 'visible';
    modalPopup.classList.remove('modal--show');
  }

  popupLink.addEventListener('click', showPopup);

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
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
    closePopup();
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (modalPopup.classList.contains('modal--show')) {
        evt.preventDefault();
        closePopup();
      }
    }
  });

  modalClose.forEach(function (el) {
    el.addEventListener('click', function () {
      closePopup();
    })
  })
})();
