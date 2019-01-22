// let chordArray = ['I','ii','iii','IV','V', 'vi','vii'];
function returnChord(array){
    let randChord = Math.floor(Math.random()*array.length);
    return array[randChord];
}
// console.log(returnChord(chordArray));

associativeArray = {
    'I' : ['I','ii','iii','IV','V', 'vi','vii'],
    'ii' : ['ii','V','vii'],
    'iii' : ['iii','vi'],
    'IV' : ['IV','V','vii'],
    'V': ['V','I'],
    'vi' : ['vi','ii','IV'],
    'vii' : ['vii','I']
};

function randomChord(chord){
    let possibleChords = associativeArray[chord];
    return returnChord(possibleChords);
}

// console.log(randomChord('II'));

function chordProgression(number){
    let chord = 'I';
    let proArray = [];
    for(let i = 0 ; i < number ; i++){
        let nextChord = randomChord(chord);
        proArray.push(nextChord);
        chord = nextChord;
    }
    return proArray;
}

console.log(chordProgression(5));