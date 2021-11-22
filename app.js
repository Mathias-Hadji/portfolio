

// Animation menu de navigation petits écrans

const menuHamburger = document.querySelector('.menu-hamburger');
const iconMenuHamburger = document.querySelectorAll('.icon-menu-hamburger');

const menuSmallScreen = document.querySelector('.menu-small-screen');

const linkMenuSmallScreen = document.querySelectorAll('.menu-small-screen a');

menuHamburger.addEventListener('click', () => {

    iconMenuHamburger.forEach(icon => {

        icon.classList.toggle('active');
        icon.classList.toggle('disabled');
    });

    menuSmallScreen.classList.toggle('menu-small-screen-active');
    
    // Lock scrolling when menu small screen is active
    document.getElementsByTagName('body')[0].classList.toggle('block-scroll');

    linkMenuSmallScreen.forEach(link => {

        link.addEventListener('click', () => {

            document.getElementsByTagName('body')[0].classList.toggle('block-scroll');
            menuSmallScreen.classList.remove('menu-small-screen-active')
        });
    });

});

// const btnMenuHamburger = document.querySelector('.menu-hamburger');
// const menuSmallScreen = document.querySelector('.menu-small-screen');

// btnMenuHamburger.addEventListener('click', () => {

//     menuSmallScreen.classList.toggle('display-menu-small-screen');


//     // Lock scrolling when menu small screen is open
//     if(menuSmallScreen.classList.contains('display-menu-small-screen')) {
//         document.getElementsByTagName('body')[0].style.overflow = 'hidden';
//     } else {
//         document.getElementsByTagName('body')[0].style.overflow = 'visible';
//     }
// });





// Animation texte au survol des liens dans le menu de navigation des petits écrans

const txtMenuHover = document.querySelector('.txt-menu-hover');
const liMenuSmallScreen = document.querySelectorAll('.menu-small-screen a');

liMenuSmallScreen.forEach(link => {

    link.addEventListener('mouseover', (e) => {

        txtMenuHover.innerHTML = `${e.target.innerHTML}`;
    });
});



// Animation navbar bg darker on scroll
const menuDesktop = document.querySelector('.menu-desktop');

window.addEventListener('scroll', () => {

    if(window.scrollY >= 150 && !menuDesktop.classList.contains('menu-desktop-bg-darker')){

        menuDesktop.classList.remove('menu-desktop-bg-lighter');
        menuDesktop.classList.add('menu-desktop-bg-darker');

    } else if(window.scrollY <= 150 && !menuDesktop.classList.contains('menu-desktop-bg-lighter')){
        
        menuDesktop.classList.remove('menu-desktop-bg-darker');
        menuDesktop.classList.add('menu-desktop-bg-lighter');
    }
});

