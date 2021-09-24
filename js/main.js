// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Declaration des variables>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let words = [
    "concatenation",
    "javascript",
    "prototype",
    "recursive"
];
let selectedWords = words[Math.floor(Math.random() * words.length)];
let splitWord = selectedWords.split("");
let hiddenWord = [];
let life = 7;
let play = true;

function underscoreWord() {
    for (let i = 0; i < selectedWords.length; i++) {
    selectedWords[i] = hiddenWord.push(" _ ") 
    }
};

function Main() {
    let find ;
    while (play === true){
        find = false;
        if (hiddenWord.join("") === splitWord.join("")) {
            play = false;
            return alert (`Bravo vous avez trouvé le mot ${selectedWords} (>'-')>`)
            }
        
            let playerImput = prompt( "il vous reste " + life + " tentatives \n"  + hiddenWord )

        for (let i = 0; i < splitWord.length; i++) {
            if (splitWord[i] === playerImput) {
            hiddenWord[i] = playerImput ;
             find = true;
            }
        }
        if (find === false) {
            life--; 
        }
        if (life === 0) {
            play = false;
            alert (`Vous avez perdu le mot était "${selectedWords}"`)
        }
    }
}

    

underscoreWord();
Main();
console.log(selectedWords);
console.log(splitWord);
console.log(hiddenWord);
