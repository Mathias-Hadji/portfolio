// -------------------- Animation du menu de navigation --------------------

const menuHamburger = document.querySelector('.menu-hamburger');
const iconMenuHamburger = document.querySelectorAll('.icon-menu-hamburger');
const menuSmallScreen = document.querySelector('.menu-small-screen');


// Animation du menu lorsque l'on clique sur l'icone hamburger
menuHamburger.addEventListener('click', () => {


    // Au clic sur l'icone du menu petit écran : 
    // - Permutation de l'image du bouton du menu hamburger en fonction de si le menu est ouvert ou fermé
    // - Toggle la classe qui ouvre ou ferme le menu
    // - Toggle la classe qui bloque ou débloque le scroll


    // // - Permutation de l'image du bouton du menu hamburger en fonction de si le menu est ouvert ou fermé

    iconMenuHamburger.forEach(icon => {

        if(icon.classList.contains('display-transition-scale-y')) {

            icon.classList.remove('display-transition-scale-y');
            icon.classList.add('disappear-transition-scale-y');

        } else {
            
            icon.classList.add('display-transition-scale-y');
            icon.classList.remove('disappear-transition-scale-y');
        }
    });

    // - Toggle la classe qui ouvre ou ferme le menu
    const menuSmallScreen = document.querySelector('.menu-small-screen');
    menuSmallScreen.classList.toggle('menu-small-screen-active');


    // - Toggle la classe qui bloque ou débloque le scroll
    document.getElementsByTagName('body')[0].classList.toggle('block-scroll');

});



// Animations du menu aux evenements sur les liens du menu petit ecran
const linkMenuSmallScreen = document.querySelectorAll('.menu-small-screen a');
const txtMenuHover = document.querySelector('.txt-menu-hover');

linkMenuSmallScreen.forEach(link => {

    link.addEventListener('click', () => {

        // Au clic sur les liens : 
        // - Fermeture du menu
        // - Remise en place de l'image du bouton du menu hamburger position par défaut (menu fermé).
        // - Débloquage du scroll 


        // - Fermeture du menu
        menuSmallScreen.classList.remove('menu-small-screen-active');


        // - Remise en place de l'image du bouton du menu hamburger position par défaut (menu fermé).
        iconMenuHamburger.forEach(icon => {

            if(icon.classList.contains('display-transition-scale-y')) {
    
                icon.classList.remove('display-transition-scale-y');
                icon.classList.add('disappear-transition-scale-y');
    
            } else {
                
                icon.classList.add('display-transition-scale-y');
                icon.classList.remove('disappear-transition-scale-y');
            }
        });


        // - Débloquage du scroll 
        document.getElementsByTagName('body')[0].classList.remove('block-scroll');
    });


    link.addEventListener('mouseover', (e) => {

        // Au survol sur les liens :
        // - Injection innerHTML du texte survolé par l'utilisateur
        txtMenuHover.innerHTML = `${e.target.innerHTML}`;
    });

});


// Animation bg de la navbar plus opaque au scroll
const menuDesktop = document.querySelector('.menu-desktop');

window.addEventListener('scroll', () => {

    // Au scroll : 
    // - Si la position Y du scroll passe au dessus de 150 ==> ajout de la classe pour rendre le bg plus opaque
    // - Sinon la position du scroll est inférieur à Y ==> suppression de la classe pour le rendre plus opaque


    if(window.scrollY >= 150) {

        // - Si la position Y du scroll passe au dessus de 150 ==> ajout de la classe pour rendre le bg plus opaque
        menuDesktop.classList.add('menu-desktop-bg-darker');

    } else {

        // - Sinon la position du scroll est inférieur à Y ==> suppression de la classe pour rendre le bg plus opaque
        menuDesktop.classList.remove('menu-desktop-bg-darker');

    }
});

