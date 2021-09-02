(function () {
  var d = document;
  var footer = d.querySelector('.footer');
  var ul = d.querySelector('.footer__according-list');
  var h4s = d.querySelectorAll('h4');

  footer.classList.add('footer--js');

  ul.addEventListener('click', function (e) {
    for (var i = 0; i < h4s.length; i++) {
      h4s[i].classList.remove('footer__accordion-link--active');
    }

    if (e.target && e.target.nodeName == 'H4') {
      e.target.classList.toggle('footer__accordion-link--active');
    }
  });
})();
