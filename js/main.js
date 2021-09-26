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
function menu () {
   let selectMenu = prompt(`Menu,  Jouer : ' j '  Règles :  ' r '  Quitter : ' q ' `)
    if (selectMenu == 'q'){
        alert(`Merci d'être passé !`)
    }   
    if (selectMenu == 'j') {
       selectedWords = words[Math.floor(Math.random() * words.length)];   //setup et resetup des datas necessaires pour re/lancer le jeu.
       splitWord = selectedWords.split("");
       life = 7;
       underscoreWord()                                                   //apelle des fonctions du jeu
       Main()
    }
    if (selectMenu == 'r') {
        alert(`Le but du jeu est simple : deviner toute les lettres qui doivent composer un mot.\n       
        A chaque fois que le joueur devine une lettre, celle-ci est affichée`)
        menu()
    }
    else if (selectMenu !== "j" && selectMenu !== "r" && selectMenu !== "q"){
        menu()                                                               //relance le menu si aucun imput viable   
    }
}

function underscoreWord() {
    for (let i = 0; i < selectedWords.length; i++) {                 //incrémentation des underscores dans le tableau vide (même nombre que mot éclaté)
     selectedWords[i] = hiddenWord.push(" _ ") 
    }
};

//fonction principale où boucle la logique

function Main() {
    play = true;                                                     //condition de lancement de la boucle resetup pour rejouer
    let find;                                                        //variable utilisée pour définir true ou false sur l'imput du joueur 
    while (play === true){                                           //boucle principale de la fonction avec comme condition (voir ligne 12)
        if (hiddenWord.join("") === splitWord.join("")) {            // termine le jeu quand le joueur a trouvé le mot + affichage du mot
            play = false;
            alert (`Bravo vous avez trouvé le mot ${selectedWords} (>'-')>`)
            hiddenWord = [];
            life = 0;
            return menu();
        }
        find = false;
        let playerImput = prompt( "il vous reste " + life + " tentatives \n"  + hiddenWord ) //demande d'imput au joueur + affichage du mot en underscore
        
        if  (playerImput.length !== 1) {                             //statement qui vérifie qu'il y a bien une seule lettre et relance la fonction sinon.                    
            Main();
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
            hiddenWord = [];
            menu();
        }
    }
}
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Apelle de la fonctions menu>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
menu();

