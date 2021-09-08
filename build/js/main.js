(function () {
  const d = document;
  const footer = d.querySelector('.footer');
  const ul = d.querySelector('.footer__according-list');
  const h4s = d.querySelectorAll('h4');

  footer.classList.add('footer--js');

  ul.addEventListener('click', function (e) {
    for (let i = 0; i < h4s.length; i++) {
      h4s[i].classList.remove('footer__according-title--active');
    }

    if (e.target && e.target.nodeName == 'H4') {
      e.target.classList.toggle('footer__according-title--active');
    }
  });
})();

(function () {
  const input = document.querySelectorAll('input[type="tel"]');

  input.forEach(function (item) {
    item.addEventListener('input', () => {
      const value = item.value.replace(/\D+/g, '');
      const numberLength = 11;

      const prefixNumber = (str) => {
        if (str === '7') {
          return '7 (';
        }
        if (str === '8') {
          return '8 (';
        }
        if (str === '9') {
          return '7 (9';
        }
        return '7 (';
      };

      let result;
      if (item.value.includes('+8') || item.value[0] === '8') {
        result = '';
      } else {
        result = '+';
      }

      for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          case 4:
            result += ') ';
            break;
          case 7:
            result += '-';
            break;
          case 9:
            result += '-';
            break;
          default:
            break;
        }
        result += value[i];
      }
      item.value = result;
    });

  });

})();

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

(function () {
  const links = document.querySelectorAll('.js-scroll');

  links.forEach((item) => {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();

      const hash = this.href.replace(/[^#]*(.*)/, '$1');
      const href = item.getAttribute('href').substr(1);
      const el = document.querySelector(hash);

      if (!el) return;

      document.getElementById(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
})();
