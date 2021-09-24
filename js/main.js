// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Déclaration des variables>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let words = [                              
    "concatenation",
    "javascript",           
    "prototype",                                         //mots contenus dans le jeu
    "recursive",
    "algorithme",
    "navigateur",
    "paradigme"
];
let selectedWords = words[Math.floor(Math.random() * words.length)]; //sélection aléatoire du mot
let splitWord = selectedWords.split("");                             //éclatement du mot selectionné 
let hiddenWord = [];                                                 //création d'un tableau vide
let life = 7;                                                        //nombre de coups de base
let play = true;                                                     //boolean utilisé pour faire boucler la fonction principale (main)

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Mise en place des fonctions>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function underscoreWord() {
    for (let i = 0; i < selectedWords.length; i++) {                 //incrémentation des underscores dans le tableau vide (même nombre que mot éclaté)
    selectedWords[i] = hiddenWord.push(" _ ") 
    }
};


//fonction principale où boucle la logique

function Main() {
    let find ;                                                       //variable utilisée pour définir true ou false sur l'imput du joueur 
    while (play === true){                                           //boucle principale de la fonction avec comme condition (voir ligne 12)
        find = false;
        let playerImput = prompt( "il vous reste " + life + " tentatives \n"  + hiddenWord ) //demande d'imput au joueur + affichage du mot en underscore
        
        if  (playerImput.length !== 1) {                             //statement qui vérifie qu'il y a bien une seule lettre et relance la fonction sinon.                    
            Main()
        }
        if (hiddenWord.join("") === splitWord.join("")) {            // termine le jeu quand le joueur a trouvé le mot + affichage du mot
            play = false;
            return alert (`Bravo vous avez trouvé le mot ${selectedWords} (>'-')>`)
        }
        for (let i = 0; i < splitWord.length; i++) {                //vérification de la concordance des index (imput joueur/mot éclaté)
            if (splitWord[i] === playerImput) {
            hiddenWord[i] = playerImput ;
             find = true;
            }
        }
        if (find === false) {                                      //Perte d'un coup si aucune concordance
            life--; 
        }
        if (life === 0) {                                          //si plus de coup annonce de la défaite + affichage du mot
            play = false;
            alert (`Vous avez perdu le mot était "${selectedWords}"`)
        }
    }
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Apel des fonctions et alert d'arrivé sur le jeu>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

alert ("Bienvenue sur le jeu du pendu à vous de trouver les lettres")
underscoreWord();
Main();