// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Declaration des variables>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let words = [
    "concatenation",
    "javascript",
    "prototype",
    "recursive"
];
let selectedWords = words[Math.floor(Math.random() * words.length)]; //selection aléatoire du mot
let splitWord = selectedWords.split("");                             //éclatement du mot selectionné 
let hiddenWord = [];                                                 //création d'un tableau vide
let life = 7;                                                        //nombre de coup de base
let play = true;                                                     //boolean utilisé pour faire boucler la fonction principale(main)

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Mise en place des fonctions>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function underscoreWord() {
    for (let i = 0; i < selectedWords.length; i++) {                 //incrémentation des underscores dans le tableau vide(même nombre que mot éclaté)
    selectedWords[i] = hiddenWord.push(" _ ") 
    }
};



function Main() {
    let find ;                                                       //variable utilisé pour définir true ou false sur l'imput du joueur 
    while (play === true){                                           //boucle principale de la fonction avec comme condition (voir ligne 12)
        find = false;
        let playerImput = prompt( "il vous reste " + life + " tentatives \n"  + hiddenWord ) //demande d'imput au joueur + affichage du mot en underscore
        
        if  (playerImput.length !== 1) {                             //statement qui verifie qu'il y a bien une seul lettre et relance la fonction si non.                    
            Main()
        }
        if (hiddenWord.join("") === splitWord.join("")) {            // termine le jeu quand le joueur à trouvé le mot + affichage du mot
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

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Apelle des fonctions>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

underscoreWord();
Main();