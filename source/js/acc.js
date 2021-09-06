(function () {
  const d = document;
  const footer = d.querySelector('.footer');
  const ul = d.querySelector('.footer__according-list');
  const h4s = d.querySelectorAll('h4');

  footer.classList.add('footer--js');

  ul.addEventListener('click', function (e) {
    for (let i = 0; i < h4s.length; i++) {
      h4s[i].classList.remove('footer__according-link--active');
    }

    if (e.target && e.target.nodeName == 'H4') {
      e.target.classList.toggle('footer__according-link--active');
    }
  });
})();
