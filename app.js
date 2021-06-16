const moi = document.body.querySelector('#moi');

const voiture = document.body.querySelector('.voiture')

const voiture_touche_main = parseInt(window.getComputedStyle(moi).getPropertyValue("height"), 10);

const voiture_touche_queue = parseInt(window.getComputedStyle(moi).getPropertyValue("left"), 10);

const voiture_touche_tete = voiture_touche_queue + 60;


//un tableau d'evenement mousedown c'est quand je clic avec la souris et 
//keyup c'est quand t'appuie sur une touche et que tu lache la pression
const jump_events = ['mousedown', 'keyup'];

//on le boucle, on ajoute une ecoute sur l'evenement et quand sa a lieu on applique moijump
jump_events.forEach((event) => document.addEventListener(event, moiJump));
    
/*
@param {string} key
*/


//c'est la fonction qu'on demande
function moiJump ({key}) {
    //si key existe et key n'est pas egal a ArrowUp
    //arrow up c'est la string qui sera retroune si t'appuie sur la touche fleche haut du clavier
    if ((key && key !== 'ArrowUp')) {
         //si ce n'est pas la touche du haut qui est appuie alors tu retourne
        return;
    }
    //on ajoute une classe
    moi.classList.add('moi-jump')

    //pour que sa saute a chaque fois
    moi.addEventListener('animationend', () => moi.classList.remove('moi-jump'));
}