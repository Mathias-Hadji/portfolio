// Animation menu de navigation petits écrans

const btnMenuHamburger = document.querySelector('.menu-hamburger');
const menuSmallScreen = document.querySelector('.menu-small-screen');

btnMenuHamburger.addEventListener('click', () => {

    menuSmallScreen.classList.toggle('display-menu-small-screen');
});


// Animation texte au survol des liens dans le menu de navigation des petits écrans

const txtMenuHover = document.querySelector('.txt-menu-hover');
const liMenuSmallScreen = document.querySelectorAll('.menu-small-screen a');

liMenuSmallScreen.forEach(link => {

    link.addEventListener('mouseover', (e) => {

        txtMenuHover.innerHTML = `${e.target.innerHTML}`;
    });
});

