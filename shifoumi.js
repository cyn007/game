const blocJoueur = document.getElementById('joueur');
const blocOrdinateur = document.getElementById('ordinateur');
const blocResultat = document.getElementById('resultat');
const choixPossibles = [...document.getElementsByClassName('bouttons')];      // Boutonsjoueur
const contenantScoreOrdinateur = document.getElementById('scoreordinateur');
const contenantScoreJoueur = document.getElementById('scorejoueur');
const reset = document.getElementById('btn-reset');



// variable qui aura le score Joueur
// variable qui aura le score Ordinateur
let joueur ;
let ordinateur ;

//Evenement 'Click' sur les bouttons
choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click', (e) => {
// récupération de l'ID du boutton cliqué
  joueur = e.target.id ;
  
//Ajout de l'image qui correspond au choix du joueur
  blocJoueur.innerHTML = `<img src="images/${joueur}.png">`

//Affiche le message resultat
  blocResultat.style.visibility = 'visible';

  nombreAleatoire()

  verification()

}));

// fonction pour récupérer les valeurs 
// recupérer la valeur en texte 
const PIERRE = "pierre"
const PAPIER = "papier"
const CISEAUX = "ciseaux"

  //1 = pierre
  //2 = feuille
  //3 = ciseaux

function nombreAleatoire() {
  let random = Math.floor(Math.random() * 3) + 1;

  switch(random) {
    case 1 : ordinateur = PIERRE;
      break;

    case 2: ordinateur = PAPIER;
      break;

    default: ordinateur = CISEAUX;
  }

 /* OU
 if (random === 1) {
    ordinateur = PIERRE
  }
  if (random === 2) {
    ordinateur = PAPIER
  }
  if (random === 3) {
    ordinateur = CISEAUX
  }
*/
  blocOrdinateur.innerHTML = `<img src="images/${ordinateur}.png">`
}


// verifier l'egalité des valeurs
// fonction verifie qui gagne et met à jour le contenu du message et des scores
function verification() {
  if (joueur === ordinateur) {
    blocResultat.textContent = "Egalité !";

  }
  else if ((joueur === PIERRE && ordinateur === CISEAUX) || (joueur === CISEAUX && ordinateur === PAPIER) || (joueur === PAPIER && ordinateur === PIERRE)) {
    blocResultat.textContent = "Vous avez gagné !";
    contenantScoreJoueur.textContent++
  }
  else {
    blocResultat.textContent = "Vous avez perdu !";
    contenantScoreOrdinateur.textContent++
  }
}

//Mettre les scrores à zero pour lancer un nouvelle partie
//Mettre les scores à 0
// Cacher le message qui apparait
reset.addEventListener('click', () => {
  contenantScoreOrdinateur.textContent = 0;
  contenantScoreJoueur.textContent = 0;
  blocResultat.style.visibility = 'hidden';
 
  
});















