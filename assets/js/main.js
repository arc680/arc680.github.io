(function(window, document) {
    var menu = document.getElementsByTagName('header')[0],
        WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange' : 'resize';

    function toggleMenu() {
        var header = menu;
        if (header.classList.contains('h-10')) {
            header.classList.remove('h-10');
            header.classList.add('h-auto');
        } else {
            header.classList.add('h-10');
            header.classList.remove('h-auto');
        }
        document.getElementById('toggle').classList.toggle('active');
    };

    function closeMenu() {
        if (!menu.classList.contains('h-10')) {
            toggleMenu();
        }
    }

    var toggleEl = document.getElementById('toggle');
    if (toggleEl) {
        toggleEl.addEventListener('click', function(e) {
            toggleMenu();
            e.preventDefault();
        });
    }

    window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
})(this, this.document);
