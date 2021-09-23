// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Declaration des variables>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let life = 7;
let words = [
    "concatenation",
    "javascipt",
    "prototype",
    "recursive"
];
let selectedWords = words[Math.floor(Math.random() * words.length)];
let hiddenWord = [];

    

for (let i = 0; i < selectedWords.length; i++) {
        selectedWords[i] = hiddenWord.push(" _ ") 
     };

console.log(selectedWords);
console.log(hiddenWord);

alert(hiddenWord)


function Main() {
   
    for (let i = 0; i < selectedWords.length; i++) {
        hiddenWord.push(" _ ") 
     };



}