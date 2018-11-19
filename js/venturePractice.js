let sample = "Hello there, how are you?";
function noSpaces(sampleString){
    let output = sampleString.split(" ");
    return output.join("");
}
console.log(noSpaces(sample));

let sample1 = 'hello there';
function capitalizeFirst(sampleString){
    let output = sampleString.substring(0,1).toUpperCase()+sampleString.substring(1,sampleString.length);
    return output
}
console.log(capitalizeFirst(sample1));

let sample2 = 'JavaScript exercises';
function camelCase(sampleString) {
    output = '';
    for (let i = 0; i < sampleString.length; i++) {
        let sampleCharacter = sampleString.substring(i,i+1);
        if (sampleCharacter === " "){
            continue
        }
        if (sampleString.substring(i-1,i) === " "){
            sampleCharacter = sampleCharacter.toUpperCase();
        }
        output += sampleCharacter
    }
    return output
}
console.log(camelCase(sample2));
