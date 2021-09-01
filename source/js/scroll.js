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
