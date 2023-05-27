var nav_links = document.getElementById('nav-links');
var nav_open = document.getElementById('nav-open');
window.addEventListener('resize', navReset);

function navOpen() {
    nav_links.style.visibility = 'visible';
    nav_open.style.visibility = 'hidden';
}

function navClose() {
    nav_links.style.visibility = 'hidden';
    nav_open.style.visibility = 'visible';
}

function navReset() {
    if (window.innerWidth > 600) {
        navOpen();
    } else {
        navClose();
    }
}

