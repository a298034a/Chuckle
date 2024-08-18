window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        document.documentElement.style.setProperty('--navbg-width', `580px`)
    }
    else if (window.scrollY == 0) {
        document.documentElement.style.setProperty('--navbg-width', 0)
    }
});