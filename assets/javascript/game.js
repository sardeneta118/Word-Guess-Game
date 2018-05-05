// Array of words
    const word = ['margarita', 'martini', 'corona', 'indio', 'buchanans', 'donjulio', 'patron', 'heineken', 'mezcal', 'bacardi'];
// Choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];



//testing
console.log(choosenWord);

// create underscore based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderscore());
// get users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
// if users guess is right    
    if(choosenWord.indexOf(keyword) > -1) {
    // add to right words array
    rightWord.push(keyword);
    wrongWord.push(keyword);
    }
});

