// Animation menu de navigation petits écrans

const btnMenuHamburger = document.querySelector('.menu-hamburger');
const menuSmallScreen = document.querySelector('.menu-small-screen');

btnMenuHamburger.addEventListener('click', () => {

    menuSmallScreen.classList.toggle('display-menu-small-screen');


    // Lock scrolling when menu small screen is open
    if(menuSmallScreen.classList.contains('display-menu-small-screen')) {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    } else {
        document.getElementsByTagName('body')[0].style.overflow = 'visible';
    }
});





// Animation texte au survol des liens dans le menu de navigation des petits écrans

const txtMenuHover = document.querySelector('.txt-menu-hover');
const liMenuSmallScreen = document.querySelectorAll('.menu-small-screen a');

liMenuSmallScreen.forEach(link => {

    link.addEventListener('mouseover', (e) => {

        txtMenuHover.innerHTML = `${e.target.innerHTML}`;
    });
});

