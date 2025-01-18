const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function () {
        const isMenuVisible = navMenu.classList.toggle('show'); 
        if (isMenuVisible) {
            hamburger.textContent = "X"; 
        } else {
            hamburger.textContent = "☰"; 
        }
    });

